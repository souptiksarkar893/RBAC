import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  fetchPermissions,
  addPermission,
  deletePermission,
  updatePermission,
} from "../../api/mockApi";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPermission, setCurrentPermission] = useState({
    id: null,
    name: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    fetchPermissions().then(setPermissions);
  }, []);

  const handleOpenDialog = (permission = { id: null, name: "" }) => {
    setIsEditMode(Boolean(permission.id));
    setCurrentPermission(permission);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentPermission({ id: null, name: "" });
  };

  const handleSavePermission = async () => {
    if (isEditMode) {
      const updatedPermission = await updatePermission(currentPermission);
      setPermissions((prev) =>
        prev.map((perm) =>
          perm.id === updatedPermission.id ? updatedPermission : perm
        )
      );
    } else {
      const addedPermission = await addPermission(currentPermission);
      setPermissions((prev) => [...prev, addedPermission]);
    }
    handleCloseDialog();
  };

  const handleDeletePermission = async (id) => {
    await deletePermission(id);
    setPermissions((prev) => prev.filter((perm) => perm.id !== id));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => handleOpenDialog()}
        style={{ marginBottom: "20px" }}
      >
        Add Permission
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Permission Name</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((perm) => (
            <TableRow key={perm.id}>
              <TableCell>{perm.id}</TableCell>
              <TableCell>{perm.name}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleOpenDialog(perm)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeletePermission(perm.id)}>
                  <DeleteIcon color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Dialog for Add/Edit Permission */}
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          {isEditMode ? "Edit Permission" : "Add Permission"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Permission Name"
            value={currentPermission.name}
            onChange={(e) =>
              setCurrentPermission({
                ...currentPermission,
                name: e.target.value,
              })
            }
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSavePermission} color="primary">
            {isEditMode ? "Save Changes" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PermissionManagement;

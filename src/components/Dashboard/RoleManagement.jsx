import React, { useState, useEffect } from "react";
import { fetchRoles, addRole, updateRole, deleteRole } from "../../api/mockApi";
import {
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState(""); // "add" or "edit"
  const [roleData, setRoleData] = useState({ name: "", permissions: "" });

  // Fetch roles on component mount
  useEffect(() => {
    const loadRoles = async () => {
      const fetchedRoles = await fetchRoles();
      setRoles(fetchedRoles);
    };
    loadRoles();
  }, []);

  // Handle Dialog Open
  const openDialog = (mode, role = null) => {
    setDialogMode(mode);
    setRoleData(role || { name: "", permissions: "" });
    setIsDialogOpen(true);
  };

  // Handle Add/Edit Role Save
  const handleSaveRole = async () => {
    if (!roleData.name || !roleData.permissions) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      if (dialogMode === "add") {
        const addedRole = await addRole(roleData);
        setRoles((prev) => [...prev, addedRole]);
      } else if (dialogMode === "edit") {
        const updatedRole = await updateRole(roleData);
        setRoles((prev) =>
          prev.map((role) => (role.id === updatedRole.id ? updatedRole : role))
        );
      }
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error saving role:", error);
    }
  };

  // Handle Role Delete
  const handleDeleteRole = async (id) => {
    try {
      await deleteRole(id);
      setRoles((prev) => prev.filter((role) => role.id !== id));
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Role Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => openDialog("add")}
        style={{ marginBottom: "1rem" }}
      >
        Add Role
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(", ")}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => openDialog("edit", role)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteRole(role.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>
          {dialogMode === "add" ? "Add Role" : "Edit Role"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Role Name"
            value={roleData.name}
            onChange={(e) => setRoleData({ ...roleData, name: e.target.value })}
            style={{ marginBottom: "1rem" }}
          />
          <TextField
            fullWidth
            label="Permissions (comma-separated)"
            value={roleData.permissions}
            onChange={(e) =>
              setRoleData({ ...roleData, permissions: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSaveRole}>
            {dialogMode === "add" ? "Add" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RoleManagement;

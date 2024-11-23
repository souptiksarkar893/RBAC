import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { fetchUsers, addUser, deleteUser, updateUser } from "../../api/mockApi";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "" });

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleEdit = (user) => {
    setEditMode(user.id);
    setEditedUser({ ...user });
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditedUser(null);
  };

  const handleSaveEdit = async () => {
    const updatedUser = await updateUser(editedUser);
    setUsers((prev) =>
      prev.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    handleCancelEdit();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const handleAddUser = async () => {
    const addedUser = await addUser(newUser);
    setUsers((prev) => [...prev, addedUser]);
    setNewUser({ name: "", email: "" });
    setIsAddDialogOpen(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setIsAddDialogOpen(true)}
        style={{ marginBottom: "1rem" }}
      >
        Add User
      </Button>
      <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddUser} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <TextField
                      name="name"
                      value={editedUser.name}
                      onChange={handleChange}
                    />
                  ) : (
                    user.name
                  )}
                </TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <TextField
                      name="email"
                      value={editedUser.email}
                      onChange={handleChange}
                    />
                  ) : (
                    user.email
                  )}
                </TableCell>
                <TableCell>
                  {editMode === user.id ? (
                    <>
                      <IconButton color="primary" onClick={handleSaveEdit}>
                        <SaveIcon />
                      </IconButton>
                      <IconButton color="error" onClick={handleCancelEdit}>
                        <CancelIcon />
                      </IconButton>
                    </>
                  ) : (
                    <>
                      <IconButton
                        color="primary"
                        onClick={() => handleEdit(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(user.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Users</Typography>
              <Typography variant="body2">
                Manage users, assign roles, and update statuses.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/users")}
                style={{ marginTop: "10px" }}
              >
                Go to Users
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Roles</Typography>
              <Typography variant="body2">
                Create and manage roles with permissions.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/roles")}
                style={{ marginTop: "10px" }}
              >
                Go to Roles
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Permissions</Typography>
              <Typography variant="body2">
                Assign and customize permissions dynamically.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => navigate("/permissions")}
                style={{ marginTop: "10px" }}
              >
                Go to Permissions
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

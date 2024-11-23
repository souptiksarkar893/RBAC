import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import UserManagement from "./components/Dashboard/UserManagement";
import RoleManagement from "./components/Dashboard/RoleManagement";
import PermissionManagement from "./components/Dashboard/PermissionManagement";

const App = () => (
  <Router>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;

// Mock API implementation for roles and users

// Mock data
const mockRoles = [
  { id: 1, name: "Admin", permissions: ["read", "write", "delete"] },
  { id: 2, name: "Editor", permissions: ["read", "write"] },
  { id: 3, name: "Viewer", permissions: ["read"] },
];

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
];

const mockPermissions = [
  { id: 1, name: "read" },
  { id: 2, name: "write" },
  { id: 3, name: "delete" },
];

let roleIdCounter = mockRoles.length + 1;
let userIdCounter = mockUsers.length + 1;
let permissionIdCounter = mockPermissions.length + 1;

// --- Role Management APIs ---

export const fetchRoles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockRoles]), 500);
  });
};

export const addRole = async (roleData) => {
  const newRole = {
    id: roleIdCounter++,
    ...roleData,
    permissions: roleData.permissions.split(",").map((perm) => perm.trim()), // Clean and split permissions
  };
  mockRoles.push(newRole);
  return new Promise((resolve) => {
    setTimeout(() => resolve(newRole), 500);
  });
};

export const updateRole = async (updatedRole) => {
  const index = mockRoles.findIndex((role) => role.id === updatedRole.id);
  if (index > -1) {
    mockRoles[index] = {
      ...updatedRole,
      permissions: updatedRole.permissions.split(",").map((perm) => perm.trim()), // Clean and split permissions
    };
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRoles[index]), 500);
  });
};


export const deleteRole = async (id) => {
  const index = mockRoles.findIndex((role) => role.id === id);
  if (index > -1) {
    mockRoles.splice(index, 1);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
};

// --- User Management APIs ---

export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockUsers]), 500);
  });
};

export const addUser = async (userData) => {
  const newUser = { id: userIdCounter++, ...userData };
  mockUsers.push(newUser);
  return new Promise((resolve) => {
    setTimeout(() => resolve(newUser), 500);
  });
};

export const updateUser = async (updatedUser) => {
  const index = mockUsers.findIndex((user) => user.id === updatedUser.id);
  if (index > -1) {
    mockUsers[index] = { ...updatedUser };
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockUsers[index]), 500);
  });
};

export const deleteUser = async (id) => {
  const index = mockUsers.findIndex((user) => user.id === id);
  if (index > -1) {
    mockUsers.splice(index, 1);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
};

// --- Permission Management APIs ---
export const fetchPermissions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockPermissions]), 500);
  });
};

export const addPermission = async (permissionData) => {
  const newPermission = { 
    id: permissionIdCounter++, // Ensure the ID is unique and increments properly
    ...permissionData 
  };
  mockPermissions.push(newPermission);
  return new Promise((resolve) => {
    setTimeout(() => resolve(newPermission), 500); // Resolve the full object including the ID
  });
};


export const deletePermission = async (id) => {
  const index = mockPermissions.findIndex((perm) => perm.id === id);
  if (index > -1) {
    mockPermissions.splice(index, 1);
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500);
  });
};

// Add this function
export const updatePermission = async (updatedPermission) => {
  const index = mockPermissions.findIndex((perm) => perm.id === updatedPermission.id);
  if (index > -1) {
    mockPermissions[index] = { ...mockPermissions[index], ...updatedPermission };
  }
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPermissions[index]), 500);
  });
};

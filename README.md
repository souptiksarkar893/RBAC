# Permission Management System

This project is a **Permission Management System** built with React and Material-UI. It allows users to manage roles, permissions, and users through a user-friendly interface. The project includes features such as adding, editing, and deleting permissions.

---

## Features

- **Permission Management:**
  - Fetch all existing permissions.
  - Add new permissions to the list.
  - Edit permissions to update their details.
  - Delete permissions from the system.

- **Role Management:**
  - Manage roles with associated permissions.
  - Add and update roles, including assigning permissions.

- **User Management:**
  - Fetch, add, update, and delete user details.
  - Assign roles to users.

---

## Technology Stack

### Frontend:
- **React**: Component-based user interface.
- **Material-UI**: Pre-designed React components for styling and responsiveness.

### Backend (Mock API):
- **Custom Mock API**: Simulates backend functionality for fetching, adding, updating, and deleting data.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── ModalForm.js        # Modal for adding and editing permissions
│   ├── PermissionManagement.js # Main permission management component
├── api/
│   ├── mockApi.js          # Mock API for roles, users, and permissions
├── App.js                  # Root component
├── index.js                # React entry point
```

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/souptiksarkar893/RBAC.git
   cd permission-management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Usage

### Adding a Permission
1. Click the **Add Permission** button.
2. Fill in the form with the permission details.
3. Submit the form to add the permission to the list.

### Editing a Permission
1. Click the **Edit** icon next to a permission.
2. Modify the details in the modal form.
3. Save changes to update the permission.

### Deleting a Permission
1. Click the **Delete** icon next to a permission.
2. Confirm the deletion.

---

## Mock API

### Available Functions
- `fetchPermissions`: Fetch all permissions.
- `addPermission`: Add a new permission.
- `deletePermission`: Delete a permission by ID.
- `updatePermission`: Update a permission by ID.
- Similar functions for roles and users.

### Mock Data
- **Permissions**: `read`, `write`, `delete`
- **Roles**: Admin, Editor, Viewer
- **Users**: Example users with roles and statuses.

---

## Future Enhancements

- Add role-based access control (RBAC) integration.
- Implement backend API to replace the mock API.
- Include search and filter functionality for better usability.
- Add unit and integration tests.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and push them to your branch.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For questions or suggestions, feel free to reach out to:

- **Your Name**  
- **Email**: souptiksarkar853@gmail.com  
- **GitHub**: https://github.com/souptiksarkar893 

--- 

Let me know if you need additional sections or customization!

// src/layouts/AdminLayout.tsx
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <main className="container mt-4 flex-grow-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

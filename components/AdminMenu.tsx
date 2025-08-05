"use client";

import AdminMenuLinks from "./AdminMenuLinks";

function AdminMenuDetail() {
  return (
    <nav className="relative z-50 w-full">
      <div className="w-full flex items-center justify-between h-16 px-4 lg:px-10 poppins-font">
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
          <AdminMenuLinks />
        </div>
      </div>
    </nav>
  );
}

export default AdminMenuDetail;

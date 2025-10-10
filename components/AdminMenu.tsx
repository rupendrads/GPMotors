"use client";

import AdminMenuLinks from "./AdminMenuLinks";

function AdminMenuDetail() {
  return (
    <nav className="relative z-50 w-full">
      <div className="w-full bg-[#fff] flex items-center justify-start h-16 px-4 lg:px-10 poppins-font">
        <div className="hidden lg:flex flex-1 justify-start items-center space-x-8">
          <AdminMenuLinks />
        </div>
      </div>
    </nav>
  );
}

export default AdminMenuDetail;

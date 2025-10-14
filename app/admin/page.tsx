import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | GP Motors Teddington",
  description: "Admin dashboard for GP Motors management system",
  robots: {
    index: false,
    follow: false,
  },
};

function AdminHomePage() {
  return <div className="h-[calc(100vh-14rem)]"></div>;
}

export default AdminHomePage;

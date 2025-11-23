import {
  Sidebar,
  SidebarItems,
  SidebarItemGroup,
  SidebarItem,
  SidebarLogo,
} from "flowbite-react";
import {
  PieChart,
  BookOpen,
  Inbox,
  Users,
  ShoppingBag,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const AppSidebar = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/home", { replace: true });
  };

  const confirmLogout = () => {
    setShowConfirm(true);
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <Sidebar aria-label="Admin Dashboard Sidebar" className="h-full rounded-none border-r border-gray-200">
        <SidebarLogo as={Link} to="/admin/dashboard" imgAlt="GyanShala Logo">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">GyanShala</span>
          </div>
        </SidebarLogo>

        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem as={Link} to="/admin/dashboard" icon={PieChart} className="hover:bg-blue-50 hover:text-blue-700 transition">
              Dashboard
            </SidebarItem>
            <SidebarItem as={Link} to="/admin/upload_books" icon={BookOpen} className="hover:bg-blue-50 hover:text-blue-700 transition">
              Upload Book
            </SidebarItem>
            <SidebarItem as={Link} to="/admin/manage_books" icon={Inbox} className="hover:bg-blue-50 hover:text-blue-700 transition">
              Manage Books
            </SidebarItem>
            <SidebarItem as={Link} to="/admin/users" icon={Users} className="hover:bg-blue-50 hover:text-blue-700 transition">
              Users
            </SidebarItem>
            <SidebarItem as={Link} to="/admin/products" icon={ShoppingBag} className="hover:bg-blue-50 hover:text-blue-700 transition">
              Products
            </SidebarItem>
            <SidebarItem as={Link} to="/admin/help" icon={HelpCircle} className="hover:bg-blue-50 hover:text-blue-700 transition">
              Help & Support
            </SidebarItem>
            <SidebarItem onClick={confirmLogout} icon={LogOut} className="cursor-pointer hover:bg-red-50 hover:text-red-700 transition text-red-600">
              Logout
            </SidebarItem>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>

      {/* Logout Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Confirm Logout</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppSidebar;
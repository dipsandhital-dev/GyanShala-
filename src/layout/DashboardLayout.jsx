import React from 'react';
import { Outlet } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - Fixed Width */}
      <div className="w-64 bg-white shadow-lg hidden md:block">
        <AppSidebar />
      </div>

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
import React, { useState } from 'react';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';

const Dashboard = () => {

  return (
    <div>
      {/* <UserDashboard /> */}
      <AdminDashboard />

    </div>
  );
};

export default Dashboard;
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import AdminDashboard from '../AdminDashboard/AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard/UserDashboard';

const Dashboard = () => {
  const { admin } = useAuth();

  return (
    <div>
      {
        admin ? <AdminDashboard /> : <UserDashboard />
      }
    </div>
  );
};

export default Dashboard;
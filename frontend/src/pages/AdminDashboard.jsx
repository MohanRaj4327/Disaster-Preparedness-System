import React from 'react';

const AdminDashboard = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-game-accent mb-6">System Administration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-panel p-4">
                    <h4 className="font-bold text-lg text-red-400">Emergency Alerts</h4>
                    <p className="text-sm text-gray-400 mt-2">Broadcast alerts to all users</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">User Management</h4>
                    <p className="text-sm text-gray-400 mt-2">Manage students and teachers</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Complaints</h4>
                    <p className="text-sm text-gray-400 mt-2">View and assign incidents</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Risk Assessment</h4>
                    <p className="text-sm text-gray-400 mt-2">Generate preparedness reports</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Analytics</h4>
                    <p className="text-sm text-gray-400 mt-2">System-wide performance overview</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

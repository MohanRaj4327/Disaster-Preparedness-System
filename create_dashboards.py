import os

base_dir = r"frontend\src\pages"

files = {
    f"{base_dir}\\StudentDashboard.jsx": """import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/auth.service';

const StudentDashboard = () => {
    const user = authService.getCurrentUser();

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-game-accent mb-6">Command Center</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="glass-panel p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Player Profile</h3>
                    <div className="text-gray-300">
                        <p>Name: {user?.name || 'Student'}</p>
                        <p>Level: 1 Beginner</p>
                        <p>XP: 0</p>
                    </div>
                    <Link to="/profile" className="mt-auto bg-game-secondary p-2 text-center rounded hover:bg-game-accent transition">View Profile</Link>
                </div>

                <div className="glass-panel p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">3D Campus</h3>
                    <p className="text-gray-300 text-sm">Explore the virtual campus, find evacuation routes, and identify hazards.</p>
                    <Link to="/campus" className="mt-auto bg-game-accent p-2 text-center rounded hover:bg-opacity-80 transition">Enter 3D Campus</Link>
                </div>

                <div className="glass-panel p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Simulations & Missions</h3>
                    <p className="text-gray-300 text-sm">Complete interactive disaster simulations to earn XP.</p>
                    <Link to="/simulations" className="mt-auto bg-game-secondary p-2 text-center rounded hover:bg-game-accent transition">View Missions</Link>
                </div>

                <div className="glass-panel p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Learning World</h3>
                    <p className="text-gray-300 text-sm">Read encyclopedia, take quizzes, and earn certificates.</p>
                    <Link to="/learning" className="mt-auto bg-game-secondary p-2 text-center rounded hover:bg-game-accent transition">Start Learning</Link>
                </div>

                <div className="glass-panel p-6 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">AI Assistant</h3>
                    <p className="text-gray-300 text-sm">Ask questions and get emergency guidance.</p>
                    <Link to="/assistant" className="mt-auto bg-game-secondary p-2 text-center rounded hover:bg-game-accent transition">Chat Now</Link>
                </div>

            </div>
        </div>
    );
};

export default StudentDashboard;
""",
    f"{base_dir}\\TeacherDashboard.jsx": """import React from 'react';

const TeacherDashboard = () => {
    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-game-accent mb-6">Teacher Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Learning Modules</h4>
                    <p className="text-sm text-gray-400 mt-2">Manage course materials</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Quizzes</h4>
                    <p className="text-sm text-gray-400 mt-2">Create and evaluate quizzes</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Mock Drills</h4>
                    <p className="text-sm text-gray-400 mt-2">Schedule and record attendance</p>
                </div>
                <div className="glass-panel p-4">
                    <h4 className="font-bold">Student Performance</h4>
                    <p className="text-sm text-gray-400 mt-2">View analytics and progress</p>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
""",
    f"{base_dir}\\AdminDashboard.jsx": """import React from 'react';

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
"""
}

for path, content in files.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

print("Dashboards created.")

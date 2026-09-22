import React from 'react';

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

import React from 'react';
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

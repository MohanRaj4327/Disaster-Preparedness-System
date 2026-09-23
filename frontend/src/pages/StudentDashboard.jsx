import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/auth.service';

const StudentDashboard = () => {
    const user = authService.getCurrentUser();

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gov-primary mb-6 border-b-2 border-gov-accent pb-2">Citizen Services Portal</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="official-panel flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gov-primary border-b pb-2">File a Grievance</h3>
                    <p className="text-gray-600 text-sm">Report potential man-made disasters, safety violations, or industrial hazards to government authorities immediately.</p>
                    <Link to="/complaints/new" className="mt-auto bg-gov-accent p-2 text-white text-center rounded font-bold hover:bg-red-700 transition shadow">Report Incident</Link>
                </div>

                <div className="official-panel flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gov-primary border-b pb-2">Track Grievances</h3>
                    <p className="text-gray-600 text-sm">Check the status of your submitted grievances and view authority responses.</p>
                    <Link to="/complaints/track" className="mt-auto bg-gov-primary p-2 text-white text-center rounded hover:bg-blue-900 transition shadow">View My Grievances</Link>
                </div>

                <div className="official-panel flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gov-primary border-b pb-2">Citizen Profile</h3>
                    <div className="text-gray-700">
                        <p><span className="font-semibold">Name:</span> {user?.name || 'Citizen'}</p>
                        <p><span className="font-semibold">Status:</span> Verified</p>
                    </div>
                </div>

                <div className="official-panel flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-gov-primary border-b pb-2">Disaster Awareness Learning</h3>
                    <p className="text-gray-600 text-sm">Access government-approved disaster preparedness learning materials and encyclopedias.</p>
                    <Link to="/learning" className="mt-auto border border-gov-primary text-gov-primary p-2 text-center rounded hover:bg-gov-bg transition">Access Knowledge Base</Link>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;

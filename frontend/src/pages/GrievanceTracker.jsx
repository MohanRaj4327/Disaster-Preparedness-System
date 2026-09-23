import React from 'react';

const GrievanceTracker = () => {
    // Mock data for grievances
    const grievances = [
        { id: '#GRV-2026-8924', category: 'Industrial Hazard', date: '2026-09-23', status: 'In Progress', authority: 'Dept of Industrial Safety' },
        { id: '#GRV-2026-8810', category: 'Structural Damage', date: '2026-09-20', status: 'Resolved', authority: 'Municipal Corporation' },
        { id: '#GRV-2026-8799', category: 'Chemical Spill Risk', date: '2026-09-18', status: 'Under Review', authority: 'Environmental Protection Agency' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Resolved': return 'bg-green-100 text-green-800 border-green-300';
            case 'In Progress': return 'bg-blue-100 text-blue-800 border-blue-300';
            case 'Under Review': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
            default: return 'bg-gray-100 text-gray-800 border-gray-300';
        }
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gov-primary mb-6 border-b-2 border-gov-accent pb-2">Track Grievance Status</h2>
            <p className="text-gray-700 mb-6">Monitor the progress of the grievances you have submitted to the national authorities.</p>

            <div className="official-panel overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gov-primary border-b border-gray-300">
                            <th className="p-3 font-bold">Grievance ID</th>
                            <th className="p-3 font-bold">Category</th>
                            <th className="p-3 font-bold">Date Filed</th>
                            <th className="p-3 font-bold">Assigned Authority</th>
                            <th className="p-3 font-bold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grievances.map((g) => (
                            <tr key={g.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                                <td className="p-3 font-semibold text-gov-primary">{g.id}</td>
                                <td className="p-3 text-gray-700">{g.category}</td>
                                <td className="p-3 text-gray-700">{g.date}</td>
                                <td className="p-3 text-gray-700">{g.authority}</td>
                                <td className="p-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(g.status)}`}>
                                        {g.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GrievanceTracker;

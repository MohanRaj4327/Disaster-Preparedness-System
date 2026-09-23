import React, { useState } from 'react';

const GrievanceForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Grievance ID: #GRV-2026-8924 submitted successfully. Authorities have been notified.');
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gov-primary mb-6 border-b-2 border-gov-accent pb-2">File a Public Grievance</h2>
            <p className="text-gray-700 mb-6">Report a potential man-made disaster, hazardous condition, or safety violation directly to the relevant government authorities.</p>
            
            <form onSubmit={handleSubmit} className="official-panel flex flex-col gap-4">
                <div>
                    <label className="block mb-2 font-bold text-gov-primary">Incident Category</label>
                    <select className="w-full p-2 rounded bg-gray-50 border border-gray-300 outline-none focus:border-gov-primary">
                        <option>Industrial Hazard</option>
                        <option>Chemical Spill Risk</option>
                        <option>Structural Damage</option>
                        <option>Fire Hazard</option>
                        <option>Other Man-Made Risk</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-bold text-gov-primary">Location / Address</label>
                    <input type="text" placeholder="Enter precise location or address" required className="w-full p-2 rounded bg-gray-50 border border-gray-300 outline-none focus:border-gov-primary" />
                </div>

                <div>
                    <label className="block mb-2 font-bold text-gov-primary">Detailed Description</label>
                    <textarea rows="4" placeholder="Describe the hazard or incident in detail..." required className="w-full p-2 rounded bg-gray-50 border border-gray-300 outline-none focus:border-gov-primary"></textarea>
                </div>

                <button type="submit" className="mt-4 bg-gov-accent p-3 text-white rounded font-bold hover:bg-red-700 transition shadow">Submit Grievance to Authorities</button>

                {status && <div className="mt-4 p-4 bg-green-50 border border-green-500 rounded text-green-700 font-medium">{status}</div>}
            </form>
        </div>
    );
};

export default GrievanceForm;

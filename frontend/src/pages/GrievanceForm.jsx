import React, { useState } from 'react';

const GrievanceForm = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for API call
        setStatus('Grievance submitted successfully. Authorities have been notified.');
    };

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-game-accent mb-6">File a Grievance</h2>
            <p className="text-gray-300 mb-6">Report a potential man-made disaster, hazardous condition, or safety violation to the relevant government authorities.</p>
            
            <form onSubmit={handleSubmit} className="glass-panel p-6 flex flex-col gap-4">
                <div>
                    <label className="block mb-2 font-bold">Incident Category</label>
                    <select className="w-full p-2 rounded bg-game-secondary border border-gray-600 outline-none focus:border-game-accent">
                        <option>Industrial Hazard</option>
                        <option>Chemical Spill Risk</option>
                        <option>Structural Damage</option>
                        <option>Fire Hazard</option>
                        <option>Other Man-Made Risk</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-bold">Location</label>
                    <input type="text" placeholder="Enter precise location or address" required className="w-full p-2 rounded bg-game-secondary border border-gray-600 outline-none focus:border-game-accent" />
                </div>

                <div>
                    <label className="block mb-2 font-bold">Description</label>
                    <textarea rows="4" placeholder="Describe the hazard or incident in detail..." required className="w-full p-2 rounded bg-game-secondary border border-gray-600 outline-none focus:border-game-accent"></textarea>
                </div>

                <button type="submit" className="mt-4 bg-red-600 p-3 rounded font-bold hover:bg-red-500 transition">Submit Grievance to Authorities</button>

                {status && <div className="mt-4 p-3 bg-green-600/20 border border-green-500 rounded text-green-400">{status}</div>}
            </form>
        </div>
    );
};

export default GrievanceForm;

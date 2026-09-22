import React, { Suspense } from 'react';
import CampusScene from '../components/3d/CampusScene';

const CampusMap = () => {
    return (
        <div className="p-4 max-w-7xl mx-auto h-[85vh] flex flex-col">
            <h2 className="text-3xl font-bold text-game-accent mb-4">3D Campus Map</h2>
            <p className="text-gray-300 mb-4">
                Use your mouse to rotate and zoom. Click on buildings to view details or start simulations.
            </p>
            <div className="flex-grow glass-panel overflow-hidden relative rounded-xl border border-game-accent/30">
                <Suspense fallback={
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                        Loading 3D Environment...
                    </div>
                }>
                    <CampusScene />
                </Suspense>
            </div>
        </div>
    );
};

export default CampusMap;

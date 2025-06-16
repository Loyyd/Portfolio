import React from 'react';
import HELM from './3D_Viewer';

const ModelShowOne = () => (
    <div className="fade-in-initial modelshowone-hero">
        <div className="modelshowone-content">
            <div className="modelshowone-3d">
                <HELM />
            </div>
            <div className="modelshowone-text">
                <h3 className="modelshowone-subtitle">Three.js Javascript Web implementations</h3>
                <h1 className="modelshowone-title">3D IN WEB</h1>
                <p className="modelshowone-desc">
                    Those are all Three.js Javascript Web implementations. Here for example is a camera I modeled for a youtube video. Its a complete 3D Viewer.
                </p>
                <a href="#" className="modelshowone-btn">SEE MAKING-OF</a>
            </div>
        </div>
    </div>
);

export default ModelShowOne;

import React from "react";



const skillsData = [
    { icon: "🎨", name: "Blender", description: "Modeling, Animation, Rigging" },
    { icon: "⚡", name: "Substance", description: "Texturing, Materials" },
    { icon: "🔥", name: "Unreal Engine", description: "Game Mechanics, Rigging" },
    { icon: "💎", name: "VsCode", description: "HTML, CSS, JS, C#, C++" },
];

const ThreeDExpertise = () => {
  return (
    <div className="skills-section fade-in-initial">
    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--secondary)' }}>3D EXPERTISE</h2>
    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem' }}>Tools and Technologies that I use</p>
    <div className="skills-grid">
        {skillsData.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px', fontSize: '0.85rem' }}>{skill.description}</p>
            </div>
        ))}
    </div>
    </div>
  );
};

export default ThreeDExpertise;
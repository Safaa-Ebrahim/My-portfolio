import React from 'react';

const SkillBar = ({ skill, level }) => {
  return (
    <div className="skill-bar">
      <div className="skill-label text-white">{skill}</div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
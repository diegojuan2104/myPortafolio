import React from 'react';

const cardProject = ({Project}) => {
    return (
    <div className="card">
        <div className="card-body"> 
            <h3>{Project.name}</h3>
        </div>
    </div>);
}

export default cardProject;
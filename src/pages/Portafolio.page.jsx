import React from 'react';

import ProjectCard from "../components/ProjectCard.component"

import { projects } from "../utils/projects"

const Portafolio = () => {

    const selectedProject = (project) => {

        var url = project.url;
        window.open(url, '_blank');

    }

    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-body pl-5">
                    <h1 className="row justify-content-center " >Portafolio</h1>
                    <div className="row justify-content-center">
                        {projects.map((project, i) => (
                            <div onClick={selectedProject.bind(this,project)}
                                key={i}
                                >
                                <ProjectCard
                                    className=" col-sm-6  col-md-4 col-lg-3 col-xl-3"
                                    project={project}
                                />
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;
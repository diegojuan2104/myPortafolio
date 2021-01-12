import React from 'react';
import styled from '@emotion/styled';

import img from "../images/projects/Veterinaria_admin.png"



const Card = styled.button`
    
    background-color:#fff;
    margin:5px;
    border:none;
    &:hover{
        cursor:pointer;
        img{
            width:15.2rem;
            height:10.2rem;
            border-bottom: 2px solid #000;
        }
    }

    img{
        background-color:#fff;
        width:15rem;
        height:10rem;
    }
`;


const cardProject = ({ project }) => {

    return (
        <Card>
            <div className="card  mr-3">
                <div className="col card-body ">
                    <h5>{project.title}</h5>

                    <img src={project.img} alt="" />

                    <div className="tags">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                class="badge bg-dark m-1 text-white">{tag}</span>
                        ))
                        }
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default cardProject;
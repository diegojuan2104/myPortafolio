import React from 'react';

const ResumeDescription = () => {
    return (<div className="card card-resume mt-5 ">
        <div className="card-body">
            <div className="row justify-content-md-center ">
                <h1>Hi!</h1>
                My name is Juan Diego Mejia, systems engineer student at the Universidad de Medellin. I am quite self-taught and good at teamwork; I really like to be active and contribute to new solutions. I am focused on web development and I am currently learning new technologies of mobile development, I have gained experience with personal and university projects.
            </div>
            <div className="row mt-5">
                <h2>Skills</h2>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h5>Frontend</h5>
                    <ul>
                        <li>HTML5 <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span></span>  
                        </li>
                        <li>CSS <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span></span> </li>
                        <li>JavaScript <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star "></span></span></li>
                        <li>React Js <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span></span></li>
                    </ul>
                    <ul>
                    </ul>
                </div>

                <div className="col mt-3">

                    <h5>Backend</h5>
                    <ul>
                        <li>Node/Express <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star  checked "></span>
                            <span class="fa fa-star "></span></span></li>
                        <li>Flask <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span></span></li>
                        <li>Mongo DB <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span></span></li>
                        <li>PostgreSQL <span><span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span></span> </li>
                    </ul>
                    <ul>
                    </ul>

                </div>

            </div>

        </div>
    </div>);
}

export default ResumeDescription;
import React from 'react';

const Portafolio = () => {
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="card-body">
                    <h1 className="row justify-content-center" >Portafolio</h1>
                    {projects.map((project, i) => (
                        <Link
                            style={{ textDecoration: "none", color: "#000" }}
                            className="card_project"
                            to="/adopcion/detalles_adopcion"
                            key={i}
                            onClick={mascotaSeleccionada.bind(this, mascota)}
                            className="col-md-6 col-sm-12 col-lg-6 col-xl-4"
                        >
                            <MascotaCard mascota={mascota} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portafolio;
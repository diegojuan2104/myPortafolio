import React from 'react';
import profilePhoto from "../images/others/fotoPerfil1.jpeg"


const Profile = () => {
    return (
        <div class="card mt-5 " >
            <div class="card-body ">
                <div className="col justify-content-md-center  ">
                <div className="row justify-content-center  ">
                    <img className="profile-photo" src={profilePhoto} alt=""/>
                
                </div>

                
                <h1 className="row justify-content-center  ">Juan Mejia</h1>
                <i className="row justify-content-center  ">Junior Developer</i>
               
                <div className="row justify-content-center">
                <div className="mt-3">
                    <li><strong>Email: </strong> </li>
                    diegojuan2104@gmail.com
                    <li><strong>Career:</strong>  </li>
                    Systems engeneering
                    <li><strong>Age: </strong>19</li>
                </div>

                </div>
                
                <div className="row justify-content-center" >
                    <button className="  relevant-button mt-3">Download CV</button>
                </div>

                </div>
                
            </div>
        </div>);
}

export default Profile;
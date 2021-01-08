import React from 'react';
import profilePhoto from "../images/others/fotoPerfil.jpeg"


const Profile = () => {
    return (
        <div class="card mt-5 " >
            <div class="card-body ">
                <div className="row justify-content-md-center ">
                    <img className="profile-photo" src={profilePhoto} alt=""/>
                </div>
                <h1>Juan Mejia</h1>
                <i>Junior Developer</i>
               
                
                <div className="mt-3">
                    <li><strong>Email: </strong> </li>
                    diegojuan2104@gmail.com
                    <li><strong>Career:</strong>  </li>
                    Systems engeneering
                    <li><strong>Age: </strong>19</li>
                </div>
                <div className="row justify-content-md-center" ><button className="relevant-button mt-3">Download CV</button></div>
                
            </div>
        </div>);
}

export default Profile;
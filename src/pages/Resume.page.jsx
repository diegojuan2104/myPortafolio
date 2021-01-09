import React from 'react';


import Profile from '../components/Profile.component'
import Resume_desription from '../components/Resume_description.component'

const ResumePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col  col-xs-12 col-sm-12 col-md-4">
                    <Profile />
                </div>
                <div className="col col-xs-12 col-sm-12 col-md-8">
                    <Resume_desription/>
                </div>
            </div>
        </div>);
}

export default ResumePage;
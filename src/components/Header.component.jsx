import React from 'react';
import styled from '@emotion/styled';
import { Link } from "react-router-dom";

//Logos 
import facebookLogo from "../images/SocialMedia/facebook.png"
import instagramLogo from "../images/SocialMedia/instagram.png"
import twitterLogo from "../images/SocialMedia/twitter.png"
import homeLogo from "../images/others/home.png"

const Icon = styled.button`
    
    background-color:#fff;
    margin:5px;
    border:none;
    &:hover{
        cursor:pointer;
        img{
            width:1.6rem;
            height:1.6rem;
        }
    }

    img{
        background-color:#fff;
        width:1.5rem;
        height:1.5rem;
    }
`;

const Option = styled.div`
    margin-left:3px;
    color:#000;
`;


const Header = () => {
    return (
        <div className="container bg-white rounded">
            <div className="row ">
                <div className="col  col-md-6 col-xs-12 mt-5">
                    <div className="row justify-content-md-center">
                        <Link to="/home"><Icon><img src={homeLogo} alt=""/></Icon></Link>
                        <Link className="option_menu" to="/resume">RESUME</Link>
                        <Link className="option_menu" to="/portafolio">PORTAFOLIO</Link>
                        <Link className="option_menu" to="/contact">CONTACT</Link>
                    </div>
                </div>
                <div className="col-md-6 col-xs-12 mt-5">
                    <div className="row justify-content-md-center">

                        <Icon>
                            <img src={facebookLogo} alt="facebookImg" />
                        </Icon>

                        <Icon>
                            <img src={instagramLogo} alt="instagramImg" />
                        </Icon>

                        <Icon>
                            <img src={twitterLogo} alt="twitterImg" />
                        </Icon>

                        <button className="relevant-button">
                            Hire me!
                        </button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Header;
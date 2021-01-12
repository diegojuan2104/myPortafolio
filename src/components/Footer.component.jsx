import React from 'react';

const Footer = () => {
    let now = new Date()
    let year = now.getFullYear()
    return (
        <footer className="foot row justify-content-center ">
            <p>copyright © {year} Juan Mejia</p>
            
        </footer>
      );
}
 
export default Footer;
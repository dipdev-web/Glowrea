import React from 'react';
import './footer.css';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa';

export default function Footer(){
    return(
        <footer>
             <h1>Follow us</h1>
             <div className='socialmedia'>
                
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaWhatsapp /></a>
                <a href="#"><FaTwitter /></a>

            </div>
            <p>©© 2025 Nada Zkiou. All rights reserved.</p>
           
          
        </footer>
    )
 
}
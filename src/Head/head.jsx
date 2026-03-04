import React from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaFacebook, FaInstagram, FaWhatsapp, FaShoppingBag } from 'react-icons/fa';

export default function Head(){
    return(
       <header>
                <p>free shipping for new costumers on total of 250 dh</p>
             <nav>
               <button><FaSearch className='search'/></button>
             <h1>Makeup Maven
             </h1>
             <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/blog">Blog</Link></li>
                <li><Link className="link" to="/shop">Shop</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/faq">FAQ</Link></li>
            </ul>
            
             <button><FaUser className='user' title="Account"/></button>
             <button><FaShoppingBag title="Purchases"/></button>
             
         

             </nav>
       </header>
    )
}
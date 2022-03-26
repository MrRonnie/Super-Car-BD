import React from 'react';
import './Header.css'

const Header = () => {
    return (
    <nav className='header'>
           <div className='header-name'>
           <h1>Super Car BD</h1>
           </div>

        <div>
            <a href="">Shop</a>
            <a href="">Orders</a>
            <a href="">Inventory</a>
            <a href="">About</a>
        </div>
    </nav>
    );
};

export default Header;
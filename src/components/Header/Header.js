import React from 'react';
import './Header.css'

const Header = () => {
    return (
    <nav className='header'>
           <div className='header-name'>
           <h1>Super Car BD</h1>
           </div>

        <div>
            <a href="/shop">Shop</a>
            <a href="">Orders</a>
            <a href="">Inventory</a>
            <a href="/about">About</a>
        </div>
    </nav>
    );
};

export default Header;
import React from 'react';
import './Cart.css'


const Cart = ({name , img}) => {
    
    return (
        <div className='selected-carName-img'>
            <img className='small-rounded-img' src={img} alt="" />
            <p className='selected-car'> {name}</p>
       </div>
    );
};

export default Cart;
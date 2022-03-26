import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Car.css'

const Car = (props) => {
    const {handler} = props;
    const {img ,name ,price} = props.car;
    return (
        <div className='card'>
           <img src={img} alt="" />

           <div className='car-infos'>
           <h4>{name}</h4>
           <p>Price: ${price}</p>
           </div>

           <button  className='card-btn' onClick={() => handler(props.car) }>
               <p>Add To Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Car;
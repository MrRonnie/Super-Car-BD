import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import Cart from '../Cart/Cart';
import './Shop.css' ;
import Modal from 'react-modal';

Modal.setAppElement('#root')

const Shop = () => {
    const [cars , setCars] = useState([]);

    
    const [cart , setCart] = useState([]);
    const [randomCar , setRandomCar] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }

    function closeModal() {
        setIsOpen(false);
      }

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[]);
    
    
    const handleAddToCartBtn = (addedCar) =>{
        const exist = cart.find(car => car.id === addedCar.id)
        if(!exist){
           if(cart.length < 4 ){
            const newCart = [...cart , addedCar]
            setCart(newCart)
           }
           else{
           alert('Not more than 4 cars')
           }
        } 
    }
    
    const randomCarChoose = () =>{
        let randomNum = Math.floor(Math.random() *10) 
        if(randomNum <= cart.length-1){
           const randomCarObj =  cart[randomNum];
           setRandomCar(randomCarObj);
            openModal();
        }
        else{
            randomCarChoose()
        }
        ;
    };

    const chooseAgain = () =>{
        const emptyCart = [];
        setCart(emptyCart)
    }
     
    return (
    <div className='shop-full-body'>

    
    <Modal
        className='Modal'
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        
      >
          <h2>You Should Get A {randomCar.name}</h2>
          <h4>Price: ${randomCar.price}</h4>
          <img  className='modal-img'  src={randomCar.img} alt="" />
          <br />
          <button className='close-modal-btn' onClick={closeModal}>Close</button>
          
      </Modal>

            <div className='card-container'>
               {
                   cars.map(car => <Car car={car} key={car.id} handler={handleAddToCartBtn}></Car> )
               }
               <div>
               
               </div>
              
            </div>

            <div className='cart-section'>
                <div className='cart-name-div'>
                    {
                     cart.map(car => <Cart name={car.name} img={car.img} key={car.id}></Cart> )
                    }

                </div>
                <div className='choose-btn-div'>
                    <button className='choose-one-again-btn' onClick={randomCarChoose}>Choose One</button>
                    <br />
                    <button className='choose-one-again-btn' onClick={chooseAgain}>Choose Again</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;
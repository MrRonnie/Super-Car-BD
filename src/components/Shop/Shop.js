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

    {/* Modal Body Starts here */}
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
               <div className='question-answer'>
                <p>Question: How React work?<br /> <br />

                Ans: React at its very core basically maintains a tree. In my point of view This tree is able to do efficient diff computations on the nodes, also React is a declarative library for building user interfaces. React also efficient, and flexible JavaScript library. React lets us compose complex UIs from small and isolated pieces of code called components 
React has a few different kinds of components like --
<br />
•	Functional Components: functions that return JSX. It Can do more awesome stuff with React Hooks. <br />
•	Class Components: that can manipulate props, state, and lifecycle methods.<br />
•	Pure Components: functional components that performs automatically.it Re-renders only if state or props is different from previous state or props.<br />
•	Higher-Order Components:  In react functions that return one or multiple components, depending on array data.</p>
                   
               </div>

               <div className='question-answer'>
               <p>Question: What is the Difference between props and state?<br /> <br />

               Ans: The main and key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.<br/>
               
               Props: <br/>
•	Props are red-only <br/>
•	Props are immutable. <br/>
•	Props allow data to pass from one component to other       components as an argument. <br/>
•	Props communicate between components. <br/>
•	Props make components reusable. <br/>
•	Props can access by the child component. <br/>

               <br/>
               State: <br/>
•	state changes can be asynchronous <br/>
•	State is mutable. <br/>
•	State holds information about the components. <br/>
•	States is used for rendering dynamic changes with the component. <br/>
•	State cannot make components reusable. <br/>
•	State cannot access by child components. <br/>
<br/>

               </p>
               </div>
               </div>
              
            </div>

            <div className='cart-section'>
                <div className='cart-name-div'>
                    {
                     cart.map(car => <Cart name={car.name} img={car.img} key={car.id}></Cart> )
                    }

                </div>
                <div className='choose-btn-div'>
                    <button className='choose-one-again-btn' onClick={randomCarChoose}>Choose One For Me</button>
                    <br />
                    <button className='choose-one-again-btn' onClick={chooseAgain}>Choose Again</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;
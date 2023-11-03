'use client'
import { useState, useEffect } from 'react'
import React, { useRef } from 'react';
import './style.css'
import Image from 'next/image'
import LogIn from '../Authentication/LogIn';
import SignUp from '../Authentication/SignUp';
import axios from 'axios';

export default function ProductView() {

    const id = window.location.href.split('/').pop();
    // console.log(id,'idddddd');

    const [singleProduct, setSingleProduct] = useState();

    const [heartColor, setHeartColor] = useState('white');

     // State variable for tracking success message
    const [addToCartSuccess, setAddToCartSuccess] = useState(false);

    // Function to show the success message
    const showAddToCartSuccessMessage = () => { 
        setAddToCartSuccess(true);
        setTimeout(() => {
        setAddToCartSuccess(false);
        }, 3000); // Hide the message after 3 seconds (adjust the time as needed)
    };


    const [showModal, setShowModal] = useState(false);
	const change = () =>{
		if(showModal){
			setShowModal(false);
		}else{
			setShowModal(true)
		}
	}
	const [showModal2, setShowModal2] = useState(false);
	const change2 = () =>{
		if(showModal2){
			setShowModal2(false);
		}else{
			setShowModal2(true)
		}
	}
    


    useEffect(() => {

        
    
     const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/product/'+id;
     
     const headers = {
       'Content-Type': 'application/json',
       'projectID': 's412etnzxy4q',
     };
     axios.get(apiUrl, {
       headers: headers,
     })
       .then((response) => {
        setSingleProduct(response?.data?.data);
       })
       .catch((error) => {
         console.error("Error fetching data: ", error);
       });
    }, []);

    // const addWhishlist = async (productId) => {
    //     const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';
    //     const token = localStorage.getItem('token');
    
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`,
    //         'projectID': 's412etnzxy4q', 
    //     };
    
    //     const body = {
    //         "productId": productId
    //     };
    
    //     try {
    //         const response = await axios.patch(apiUrl, body, { headers: headers });
    //         console.log(response);
    //         setHeartColor('red');
    //         localStorage.setItem('heartColor', 'red');

    //     } catch (error) {
    //         console.error("Error fetching data: ", error);
    //     }

    // }
    

    const addWhishlist = async (productId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            // User is not logged in, show a pop-up message
            setShowModal(true);
            return;
        }
        
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';
        
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectID': 's412etnzxy4q', 
        };
    
        const body = {
            "productId": productId
        };
    
            
            try {
                const response = await axios.patch(apiUrl, body, { headers: headers });
                console.log(response);
                // Set the heart color to red and store it in localStorage
                setHeartColor('red');
                localStorage.setItem('heartColor', 'red');
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        
    }

    const [quantities, setQuantities] = useState('');
    const getQuantity = (KO) => {
        const quant= KO.target.value;
        // console.log(quant);
        setQuantities(quant)
       

    }

    console.log(quantities);

    const addToCart = async (productId, quantities) => {

        const token = localStorage.getItem('token');
        if (!token) {
            // User is not logged in, show a pop-up message
            setShowModal(true);
            return;
        }
        
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart/'+productId;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectID': 's412etnzxy4q', 
        };
        // if(!quantities){
        //     quantities==3;
        // }
        const body = {
            "quantity": 1,

        };

        try {
            const response = await axios.patch(apiUrl, body, { headers: headers });
            console.log(response);
            showAddToCartSuccessMessage();
        } catch (error) {
            console.error("Error fetching data: ", error);
        }

    }

    const addToBuyNow = async (productId) => {
        const token = localStorage.getItem('token');

        if (!token) {
            // User is not logged in, show a pop-up message
            setShowModal(true);
            return;
        }

        window.location.href = '/Cart/CheckOutBuy/'+productId;


    }

    
    
    

    
    




console.log(singleProduct);
    return (
        <>

            <LogIn
				showModal={showModal}
				setShowModal={setShowModal}
				showModal2={showModal2}
				setShowModal2={setShowModal2}
			/>
			<SignUp
				showModal={showModal}
				setShowModal={setShowModal}
				showModal2={showModal2}
				setShowModal2={setShowModal2}
			/>
            <div class="productViewBox">
                <section class="container checkout-container-maincart">
                    <div class="checkoutsteps">
                        

                        <div class="product-main-box">
                            <div class="product-left-box">
                                <div class="cartdetails" id="cart_0">
                                    <div class="cartdetail">
                                        <figure>
                                            <a href="#">
                                            {
                                            //singleProduct?.images?.map((img) => (
                                                <img src={singleProduct?.images[0]} alt="product img" />
                                            //))
                                            }
                                            </a>
                                            
                                        </figure>
                                        
                                    </div>
                                    
                                </div>

                            </div>



                            
                            <div className="product-right-box">
                                

                                <div className="product-details-info">
                                    <div className="p-heart-icon">
                                        <h1>{singleProduct?.name}</h1>
                                        <div className="heart-icon" onClick={() => addWhishlist(singleProduct?._id)} style={{ cursor: 'pointer' }}>
                                        <svg
                                            style={{ margin: '9px 0px 0px 9px' }}
                                            viewBox="0 0 24 22"
                                            fill={heartColor}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="add-to-wishlist"
                                            height="18"
                                            width="18"
                                        >
                                            <path
                                            d="M11.0661 2.81728L11.6026 3.45246L12.1391 2.81728C13.2867 1.45859 15.0479 0.600098 16.8697 0.600098C20.0815 0.600098 22.6051 3.13599 22.6051 6.38807C22.6051 8.38789 21.72 10.2564 20.0229 12.3496C18.3175 14.4529 15.8645 16.6977 12.8407 19.4622L12.826 19.4756L12.8249 19.4766L11.6008 20.6001L10.3798 19.4879L10.3783 19.4866L10.3336 19.4457C10.3336 19.4457 10.3336 19.4457 10.3336 19.4457C7.31862 16.6834 4.87347 14.4409 3.17365 12.3404C1.4821 10.25 0.600098 8.38442 0.600098 6.38807C0.600098 3.13599 3.12361 0.600098 6.33544 0.600098C8.15729 0.600098 9.91845 1.45859 11.0661 2.81728Z"
                                            stroke="#000000"
                                            stroke-width="1"
                                            ></path>
                                        </svg>
                                        </div>
                                    </div>

                                    <span className="beyoung-original-text">{singleProduct?.brand}</span>

                                    <div className="p-price-text">
                                        <strong>
                                        <b> ₹ </b>{singleProduct?.price}
                                        </strong>
                                        
                                    </div>

                                    <span className="discounted-text">Inclusive of All Taxes + Free Shipping</span>

                                    <div className="user-product-rating" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                        <div className="star-rating" style={{ marginRight: '15px', marginTop: '15px' }}>
                                        
                                        {[1, 2, 3, 4, 5].map((index) => (
                                            <svg key={index} width="18px" height="18px" viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <g id="star" transform="translate(-2 -3)">
                                                <path id="secondary" fill="#FFC800" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z"></path>
                                                <path id="primary" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" fill="none" stroke="#FFC800" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                            </g>
                                            </svg>
                                        ))}
                                        </div>
                                        <p className="rating-user" style={{ marginTop: '15px' }}>
                                        <span className="prating">5.0</span>
                                        <span className="puser" style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#0009' }}>(24 Ratings & Reviews)</span>
                                        </p>
                                    </div>


                                    <div className="product-details-one-box">
                                        <ul>
                                            <li className="radio-selection">
                                                <div className="custom-radios">
                                                    <div className="title" style={{ color: '#000'}}>
                                                        COLOR :<label style={{ color: 'rgb(97, 95, 95)', marginLeft: '5px' }}>{singleProduct?.color}</label>
                                                    </div>

                                                    
                                                    <div>
                                                        <div class="color">
                                                            <input type="radio" id="White" name="color" readonly="" value="White" />
                                                            <label for="White">
                                                                <span class="colorActive" style={{backgroundColor:`${singleProduct?.color}`}}></span>
                                                            </label>
                                                        </div>
                                                        
                                                        
                                                        
                                                        
                                                        
                                                    </div>

                                                </div>
                                            </li>
                                            <li className="radio-selection">
                                                <div className="select-product-size">
                                                    <div className="title">
                                                        <span>SIZE</span>
                                                    </div>

                                                    <div class="size-box">
                                                    {
                                                        singleProduct?.size?.map((item) => (
                                                            <div className="size activeBorder" key={item}>{item}</div>
                                                        ))
                                                    }
                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px' }}>
                                        <div className="selection-quantity-main-box">
                                        <div className="selection-quantity">
                                            <strong>QTY:</strong>
                                            <div className="quantity-box">
                                                
                                                <select onChange={getQuantity}> 
                                                    <option selected="" value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                        </div>
                                        </div>
                                    </div>



                                    <div className="product-add-button">
                                        <div className="left">
                                        <a onClick={() => addToCart(singleProduct?._id)}>
                                            <img src="https://www.beyoung.in/desktop/images/product-details-2/cart.svg" alt="Add to Cart" /> ADD TO CART
                                        </a>
                                        </div>
                                        <div className="right">
                                        <a onClick={() => addToBuyNow(singleProduct?._id)}>
                                            <img src="https://www.beyoung.in/desktop/images/product-details-2/arrow-right.svg" alt="Buy Now" /> BUY NOW
                                        </a>
                                        </div>

                                      
                                    </div>
                                    
                                </div>

                            </div>   


                        </div>

                                                    
                        
            


                    </div>

                </section>
            </div>

            {addToCartSuccess && (
        <div className="success-message">
          Item added to the cart successfully!
        </div>
      )}

                       
        </>
    )

};

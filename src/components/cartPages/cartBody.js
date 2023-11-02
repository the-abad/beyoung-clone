'use client'
import { useState, useEffect } from 'react'
import React, { useRef } from 'react';
import './bodyStyle.css'
import Image from 'next/image'
import axios from 'axios';


export default function CartBody() {

    // const [profile, setProfile] = useState(null);

    // useEffect(() => {
    //     const serializedObject = localStorage.getItem('profile');
    //     const parsedProfile = JSON.parse(serializedObject);

    //     if (parsedProfile) {
    //         setProfile(parsedProfile);
    //     }
    // }, []);


    const [singleCart, setSingleCart] = useState(null);

    const fetchCartData = () => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'projectID': 's412etnzxy4q',
                'Authorization': `Bearer ${token}`,
            };

            axios.get(apiUrl, { headers: headers })
                .then((response) => {
                    setSingleCart(response?.data?.data);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        }
    };

    useEffect(() => {
        fetchCartData();
    }, []);

    const removeCart = async (productId) => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart/' + productId;

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "projectID": 's412etnzxy4q', // Replace with your actual Project ID
            };

            try {
                const response = await axios.delete(apiUrl, { headers: headers });
                console.log(response);
                fetchWishlistData();
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }

        window.location.reload();
    };

    const calculateTotalPrice = () => {
        if (singleCart && singleCart.items) {
            return singleCart.items.reduce((total, item) => {
                return total + item.product.price;
            }, 0);
        }
        return 0;
    };

    

    

    return (
        <>
            <div className='cartdesktop'>

                <section class="container checkout-container-maincart">
                    <div class="checkoutsteps">
                        <div className='cartbanner'>
                        <img src='/assets/image/cartbanner.png' />
                        <hr></hr>
                          
                        </div>
                            {singleCart && (
                                <div class="product-main-box">
                                    <div className='special'>
                                    {singleCart.items.map((item, index) => (
                                        <div class="product-left-box" key={item._id}>
                                            
                                            <div class="cartdetails" id="cart_0">
                                                <div class="cartdetail">
                                                    <figure>
                                                        <a href={`/products/${item.product._id}`}><img src={item.product.displayImage} alt="product img" /></a>
                                                        
                                                    </figure>
                                                    
                                                    <article class="productdetail">
                                                        <span class="cartpname" style={{marginBottom:'0px'}}>{item.product.name}</span>
                                                        {/* <span class="desktop-prefix-checkout">{item.product.brand}</span> */}
                                                        
                                                        <div class="price-detail">
                                                            <strong>₹{item.product.price}</strong>
                                                        </div>
                                                        
                                                    

                                                      
                                                        
                                                        
                                                    </article>
                                                </div>
                                                
                                                <div class="product-remove">
                                                    <div class="left">
                                                        <a onClick={() => removeCart(item.product._id)} class="remove-btn">Remove</a>
                                                    </div>
                                                    
                                                  
                                                </div>
                                            </div>

                                            
                                        </div>

                                    ))};
                                    </div>

                                                            {/*right part*/}
                                    
                                    <div className="product-right-box">
                                        <div className="price-items">
                                            <div className="heading">PRICE DETAILS</div>

                                            <div className="mrp-text" style={{ marginBottom: '20px' }}>
                                            <span>Total MRP (Inc. of Taxes)</span>
                                            <span>₹{calculateTotalPrice()}</span>
                                            </div>

                                            <div className="mrp-text" style={{ marginBottom: '20px' }}>
                                            <span>Shipping</span>
                                            <span style={{ color: 'rgb(9, 181, 9)' }}>
                                                <span style={{ textDecoration: 'line-through', color: 'rgb(0, 0, 0' }}>
                                                ₹49
                                                </span> Free
                                            </span>
                                            </div>

                                            <div className="mrp-text" style={{ marginBottom: '10px' }}>
                                            <span>Cart Total</span>
                                            <span>₹{calculateTotalPrice()}</span>
                                            </div>
                                        </div>

                                        <div className="total-amount">
                                            <div className="inner">
                                            <strong>Total Amount</strong>
                                            <span>₹{calculateTotalPrice()}</span>
                                            </div>
                                            <br></br>

                                            <a href='/Cart/Checkout/' className="checkout-btn">checkout securely</a>
                                        </div>
                                    </div>   


                                </div>
                            )}

                                                    
                        
            


                    </div>

                </section>

                <div class="container" style={{background:'rgb(248, 248, 248)'}}>
                    <div class="also-product">
                        <div class="cards-images">
                            <img src="https://www.beyoung.in/desktop/images/home/lock.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/paytm.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/visa.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/card.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/upi.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/maestro.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/rupay.png" alt="" />
                            <img src="https://www.beyoung.in/desktop/images/home/net.png" alt="" />
                        </div>
                    </div>
                </div>
                    
                    
                    
            
            
            
            
            </div>

            
        </>
    )

}
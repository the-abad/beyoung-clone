'use client'
import { useState, useEffect } from 'react'
import React, { useRef } from 'react';
import './checkStyle.css'
import Image from 'next/image'
import CartPop from './cartPop';
import axios from 'axios';


export default function MycheckOuts() {

    const [showModal, setShowModal] = useState(false);
	const change = () =>{
		if(showModal){
			setShowModal(false);
		}else{
			setShowModal(true)
		}
	}

    const [lastCartItem, setLastCartItem] = useState(null);

    const fetchLastCartItem = () => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'projectID': 's412etnzxy4q',
                'Authorization': `Bearer ${token}`,
            };

            axios
                .get(apiUrl, { headers: headers })
                .then((response) => {
                    const cartItems = response?.data?.data.items;

                    if (cartItems.length > 0) {
                        // Extract the last item from the cart items
                        const lastItem = cartItems[cartItems.length - 1];
                        setLastCartItem(lastItem);
                    } else {
                        // If the cart is empty, set last item to null
                        setLastCartItem(null);
                    }
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        }
    };


    useEffect(() => {
        fetchLastCartItem();
    }, []);

    // const calculateTotalPrice = () => {
    //     if (lastCartItem && lastCartItem.items) {
    //         return singleCart.items.reduce((total, item) => {
    //             return total + item.product.price;
    //         }, 0);
    //     }
    //     return 0;
    // };

    const calculateTotalPrice = () => {
        if (lastCartItem) {
            return lastCartItem.product.price;
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

                        <div class="product-main-box">
                            <div class="product-left-box">
                                

                                <div className="right-tab cardpaymentmaintab">
                                    <div id="tab-1" className="tab-contents current">
                                        <div className="heading">Enter Your Debit/Credit Card Details</div>
                                        <p className="cardsub">We do not store your card details.</p>

                                        <div className="payment-form-group">
                                        <form id="card_payment" style={{ position: 'relative' }}>
                                            <div className="form-in in">
                                            <input id="card_number" type="text" placeholder="Card Number " maxLength="19" />
                                            <label className="floating-label">Card Number</label>
                                            </div>

                                            <div className="form-in in">
                                            <input id="card_name" type="text" placeholder="Name On The Card " />
                                            <label className="floating-label">Name On The Card</label>
                                            </div>

                                            <span className="validdate-txt">Valid Through (MM/YY)</span>

                                            <div className="card-potion">
                                            <div className="card-date">
                                                <div className="form-in">
                                                <input id="card_expiry_mm" type="text" placeholder="MM" maxLength="2" style={{ textAlign: 'center' }} />
                                                </div>

                                                <div className="form-in">
                                                <input id="card_expiry_yy" type="text" placeholder="YY" maxLength="2" style={{ textAlign: 'center' }} />
                                                </div>
                                            </div>

                                            <div className="cvvcard">
                                                <div className="form-in in">
                                                <input id="card_cvv" type="password" placeholder="CVV " maxLength="3" />
                                                <label className="floating-label">CVV</label>
                                                </div>

                                                <img src="/assets/image/cvv-icon.png" alt="" />
                                            </div>
                                            </div>
                                        </form>
                                        </div>

                                        <div className="razorpay-box razorpay">
                                        <div className="razorpayline">
                                            <span>100% secured by</span>
                                            <img src="/assets/image/razor.png" alt="" />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>

                                                    {/*right part*/}
                            
                            <div className="product-right-box">

                                <div className="paymentpage address">
                                    <div className="addresssbar-top">
                                        <div className="paymentdelive">
                                        <svg
                                            fill="#45BB00"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            viewBox="0 0 52 52"
                                            enableBackground="new 0 0 52 52"
                                            xmlSpace="preserve"
                                        >
                                            <path d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M39.4,20L24.1,35.5 c-0.6,0.6-1.6,0.6-2.2,0L13.5,27c-0.6-0.6-0.6-1.6,0-2.2l2.2-2.2c0.6-0.6,1.6-0.6,2.2,0l4.4,4.5c0.4,0.4,1.1,0.4,1.5,0L35,15.5 c0.6-0.6,1.6-0.6,2.2,0l2.2,2.2C40.1,18.3,40.1,19.3,39.4,20z"></path>
                                        </svg>
                                        <span>Deliver To:</span>
                                        <span>Zeeshan</span>
                                        </div>
                                    </div>
                                    <div className="fulladdress">
                                        <p>house no 45, malikana, bhadohi Sant Ravidas Nagar, 221401</p>
                                        <p>Contact Number: <span>9121804096</span></p>
                                    </div>
                                </div>



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
                                    {/* <p>You Saved ₹200 on this order</p> */}

                                    <a onClick={change} className="checkout-btn">checkout securely</a>
                                    <CartPop
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                    />
                                </div>
                            </div>   


                        </div>

                                                    
                        
            


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
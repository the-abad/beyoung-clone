'use client'
import { useState } from 'react'
import React, { useRef } from 'react';
import './bodyStyle.css'
import Image from 'next/image'

export default function CartBody() {

    

    return (
        <>
            <div className='cartdesktop'>

                <section class="container checkout-container-maincart">
                    <div class="checkoutsteps">
                        <div className='cartbanner'>
                        <img src='/assets/image/cartbanner.png' />
                        <hr></hr>
                            {/* <ul class="shopping-step">  
                                <li class="shopping-cart-icon active">
                                    <span class="checkouttopicon">
                                        <i> </i>
                                    </span>
                                    <span class="checkouttxt">My Cart</span>
                                </li>
                                
                                <li class="address active">
                                    <span class="checkouttopicon">
                                        <i> </i>
                                    </span>
                                    <span class="checkouttxt">Address</span>
                                </li>
                                
                                <li class="credit-card active">
                                    <span class="checkouttopicon">
                                        <i> </i>
                                    </span>
                                    <span class="checkouttxt">Payment</span>
                                </li>
                            </ul> */}
                        </div>

                        <div class="product-main-box">
                            <div class="product-left-box">
                                <div class="cartdetails" id="cart_0">
                                    <div class="cartdetail">
                                        <figure>
                                            <a href="/indian-cricket-half-sleeve-t-shirt-for-men"><img src="/assets/image/wishpro1.jpg" alt="product img" /></a>
                                            <div class="qty">
                                                <select>
                                                    <option value="1"> Qty : 1</option>
                                                    <option value="2"> Qty : 2</option>
                                                    <option value="3"> Qty : 3</option>
                                                    <option value="4"> Qty : 4</option>
                                                    <option value="5"> Qty : 5</option>
                                                    <option value="6"> Qty : 6</option>
                                                    <option value="7"> Qty : 7</option>
                                                    <option value="8"> Qty : 8</option>
                                                    <option value="9"> Qty : 9</option>
                                                    <option value="10"> Qty : 10</option>
                                                </select>
                                            </div>
                                        </figure>
                                        
                                        <article class="productdetail">
                                            <span class="cartpname" style={{marginBottom:'0px'}}>Indian Cricket Half Sleeve T-shirt for Men</span>
                                            <span class="desktop-prefix-checkout">Printed T-Shirts</span>
                                            
                                            <div class="price-detail">
                                                <strong>₹349</strong>
                                            </div>
                                            
                                            {/* <div class="yousaved" style={{marginBottom:'5px'}}>
                                                <p>You Save<span class="offerprice" style={{color:'rgb(75, 181, 80)', paddingLeft:'5px'}}  >₹200.00</span></p>
                                            </div> */}

                                            <br></br>
                                            
                                            <div class=" des-product">
                                                <div class="des-product-color">
                                                    <strong>Color :</strong>
                                                    <span> Navy Blue</span>
                                                </div>
                                                
                                                <div class="des-product-size">
                                                    <strong>Size :</strong>
                                                    <span> M</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    
                                    <div class="product-remove">
                                        <div class="left">
                                            <a href="" class="remove-btn">Remove</a>
                                        </div>
                                        
                                        <div class="right">
                                            <a href="" class="">Move to Wishlist</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="cartdetails" id="cart_0">
                                    <div class="cartdetail">
                                        <figure>
                                            <a href="/indian-cricket-half-sleeve-t-shirt-for-men"><img src="/assets/image/wishpro1.jpg" alt="product img" /></a>
                                            <div class="qty">
                                                <select>
                                                    <option value="1"> Qty : 1</option>
                                                    <option value="2"> Qty : 2</option>
                                                    <option value="3"> Qty : 3</option>
                                                    <option value="4"> Qty : 4</option>
                                                    <option value="5"> Qty : 5</option>
                                                    <option value="6"> Qty : 6</option>
                                                    <option value="7"> Qty : 7</option>
                                                    <option value="8"> Qty : 8</option>
                                                    <option value="9"> Qty : 9</option>
                                                    <option value="10"> Qty : 10</option>
                                                </select>
                                            </div>
                                        </figure>
                                        
                                        <article class="productdetail">
                                            <span class="cartpname" style={{marginBottom:'0px'}}>Indian Cricket Half Sleeve T-shirt for Men</span>
                                            <span class="desktop-prefix-checkout">Printed T-Shirts</span>
                                            
                                            <div class="price-detail">
                                                <strong>₹349</strong>
                                            </div>
                                            
                                            {/* <div class="yousaved" style={{marginBottom:'5px'}}>
                                                <p>You Save<span class="offerprice" style={{color:'rgb(75, 181, 80)', paddingLeft:'5px'}}  >₹200.00</span></p>
                                            </div> */}

                                            <br></br>
                                            
                                            <div class=" des-product">
                                                <div class="des-product-color">
                                                    <strong>Color :</strong>
                                                    <span> Navy Blue</span>
                                                </div>
                                                
                                                <div class="des-product-size">
                                                    <strong>Size :</strong>
                                                    <span> M</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    
                                    <div class="product-remove">
                                        <div class="left">
                                            <a href="" class="remove-btn">Remove</a>
                                        </div>
                                        
                                        <div class="right">
                                            <a href="" class="">Move to Wishlist</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                                                    {/*right part*/}
                            
                            <div className="product-right-box">
                                <div className="price-items">
                                    <div className="heading">PRICE DETAILS (1 items)</div>

                                    <div className="mrp-text" style={{ marginBottom: '20px' }}>
                                    <span>Total MRP (Inc. of Taxes)</span>
                                    <span>₹349</span>
                                    </div>

                                    <div className="mrp-text" style={{ marginBottom: '20px' }}>
                                    <span>Shipping</span>
                                    <span style={{ color: 'rgb(9, 181, 9)' }}>
                                        <span style={{ textDecorationLine: 'lineThrough', color: 'rgb(0, 0, 0' }}>
                                        ₹49
                                        </span> Free
                                    </span>
                                    </div>

                                    <div className="mrp-text" style={{ marginBottom: '10px' }}>
                                    <span>Cart Total</span>
                                    <span>₹349</span>
                                    </div>
                                </div>

                                <div className="total-amount">
                                    <div className="inner">
                                    <strong>Total Amount</strong>
                                    <span>₹349</span>
                                    </div>
                                    <p>You Saved ₹200 on this order</p>

                                    <a href='/Cart/Checkout/' className="checkout-btn">checkout securely</a>
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
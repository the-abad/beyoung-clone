'use client'
import { useState } from 'react'
import React, { useRef } from 'react';
import './style.css'
import Image from 'next/image'

export default function MyOrder() {

    const coupon1Ref = useRef(null);
    const coupon2Ref = useRef(null);
    const coupon3Ref = useRef(null);      

    const copyToClipboard = (couponRef) => {
        const input = couponRef.current;
        if (input) {
          input.select();
          document.execCommand('copy');
          // Deselect the input field after copying
          input.blur();
        }
    };

    return (
        <>

            <div className='whole'>
            <div class="container1">
                <div class="my-account profile">
                    <div class="myaccont-navigation">
                        
                        <div class="my-account-profile">
                            <p class="short-name">ZS</p>
                            <p class="username">Zeeshan Abad Siddiqui</p>
                            <span class="Beyoungster">#Beyoungster</span>
                        </div>
                        
                        <div class="myaccount-navigation">
                            <ul>
                                <li><a class="active" href="/MyAccount/Order"><span>Order</span></a></li>
                                {/* <li> <a href="/myaccount/address"><span>Address</span></a></li> */}
                                <li><a  href="/MyAccount/Profile"><span>Profile</span></a></li>
                                <li> <a href="/MyAccount/Wishlist"><span>Wishlist</span></a></li>
                                <li><a href="/MyAccount/Coupons"><span>Coupons</span></a></li>
                                
                                {/* <li><a href="https://beyoungfolkspvtltd.freshdesk.com/support/tickets"><span>Tickets</span></a></li> */}
                            
                            </ul>
                            
                            
                        </div>
                    </div>


                    
                    <div class="cartdetails">
                        <div class="" id="cart_0">
                                        <div class="cartdetail">
                                            <figure>
                                                <a href="/indian-cricket-half-sleeve-t-shirt-for-men"><img src="/assets/image/wishpro1.jpg" alt="product img" /></a>
                                                
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
                                                    <br></br>
                                                    <br></br>

                                                    <div class="des-product-size" style={{fontWeight:'bold'}}>
                                                        <strong>Ordered On :</strong>
                                                        <span> 2023-10-27</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        
                                        
                        </div>     

                        <div class="" id="cart_0">
                                        <div class="cartdetail">
                                            <figure>
                                                <a href="/indian-cricket-half-sleeve-t-shirt-for-men"><img src="/assets/image/wishpro1.jpg" alt="product img" /></a>
                                                
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
                                                    <br></br>
                                                    <br></br>

                                                    <div class="des-product-size" style={{fontWeight:'bold'}}>
                                                        <strong>Ordered On :</strong>
                                                        <span> 2023-10-27</span>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        
                                        
                        </div> 

                    </div>                

                    
                    
                    
                    

                </div>
            </div>

            </div>
        </>
    )

}
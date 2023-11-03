'use client'
import { useState, useEffect } from 'react'
import React, { useRef } from 'react';
import './style.css'
import Image from 'next/image'
import axios from 'axios';


export default function MyOrder() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Perform localStorage action
        const serializedObject = localStorage.getItem('profile');
        const parsedProfile = JSON.parse(serializedObject);

        if (parsedProfile) {
            setProfile(parsedProfile);
        }
    }, []);

    const [singleCart, setSingleCart] = useState(null);

    const fetchOrderData = () => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/order/';

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'projectID': 's412etnzxy4q',
                'Authorization': `Bearer ${token}`,
            };

            axios.get(apiUrl, { headers: headers })
                .then((response) => {
                    console.log("Response data:", response.data);
                    setSingleCart(response?.data?.data);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        }
    };

    useEffect(() => {
        fetchOrderData();
    }, []);    
// console.log(singleCart,'jjjkkkjkk');
    return (
        <>

            <div className='whole'>
            {profile ? (
                <div class="container1">
                    <div class="my-account profile">
                        <div class="myaccont-navigation">
                            
                            <div class="my-account-profile">
                                <p class="short-name">Hii</p>
                                <p class="username">{profile.name}</p>
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
                            
                            {singleCart?.reverse().map((item, index) => (
                            <div class="" id="cart_0" key={index}>
                                            <div class="cartdetail">
                                                <figure>
                                                    <a href={`/products/${item.order.items[0].product._id}`}><img src={item.order.items[0].product.displayImage} alt="product img" /></a>
                                                    
                                                </figure>
                                                
                                                <article class="productdetail">
                                                    <span class="cartpname" style={{marginBottom:'0px'}}>{item.order.items[0].product.name}</span>
                                                    {/* <span class="desktop-prefix-checkout">Printed T-Shirts</span> */}
                                                    
                                                    <div class="price-detail">
                                                        <strong>₹{item.order.items[0].product.price}</strong>
                                                    </div>
                                                    
                                                    {/* <div class="yousaved" style={{marginBottom:'5px'}}>
                                                        <p>You Save<span class="offerprice" style={{color:'rgb(75, 181, 80)', paddingLeft:'5px'}}  >₹200.00</span></p>
                                                    </div> */}

                                                    <br></br>
                                                    
                                                    <div class=" des-product">
                                                        {/* <div class="des-product-color">
                                                            <strong>Color :</strong>
                                                            <span> Navy Blue</span>
                                                        </div>
                                                        
                                                        <div class="des-product-size">
                                                            <strong>Size :</strong>
                                                            <span> M</span>
                                                        </div> */}
                                                        <br></br>
                                                        <br></br>

                                                        <div class="des-product-size" style={{fontWeight:'bold'}}>
                                                            <strong>Your order is on its way..</strong>
                                                            {/* <span> 2023-10-27</span> */}
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            
                                            
                            </div>     

                            ))};

                            


                        </div>  
                                    

                        
                        
                        
                        

                    </div>
                </div>
            ) : (
                <div>Loading profile...</div>
            )}

            </div>
        </>
    )

}
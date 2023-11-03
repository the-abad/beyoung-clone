'use client'
import { useState, useEffect } from 'react'
import React, { useRef } from 'react';
import './style.css'
import Image from 'next/image'

export default function MyCoupons() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Perform localStorage action
        const serializedObject = localStorage.getItem('profile');
        const parsedProfile = JSON.parse(serializedObject);

        if (parsedProfile) {
            setProfile(parsedProfile);
        }
    }, []);

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
                                    <li><a href="/MyAccount/Order"><span>Order</span></a></li>
                                    {/* <li> <a href="/myaccount/address"><span>Address</span></a></li> */}
                                    <li><a  href="/MyAccount/Profile"><span>Profile</span></a></li>
                                    <li> <a href="/MyAccount/Wishlist"><span>Wishlist</span></a></li>
                                    <li><a class="active" href="/MyAccount/Coupons"><span>Coupons</span></a></li>
                                    
                                    {/* <li><a href="https://beyoungfolkspvtltd.freshdesk.com/support/tickets"><span>Tickets</span></a></li> */}
                                
                                </ul>
                                
                                
                            </div>
                        </div>

                        {/* <div class="my-coupon-main desktop">
                            <div class="my-coupon">
                                <div class="container">
                                    <ul>
                                        <li>
                                            <div class="coupon-section">
                                                <div class="offer-percent">
                                                    <p class="precent">₹100 <sup style="vertical-align: super; font-size: 20px; color: rgb(0, 0, 0);">Off</sup></p>
                                                </div>
                                                
                                                <div class="copy-coupon">
                                                    <span class="offer-special">Min. Cart Value ₹999</span>
                                                    <span class="min-cart">Applicable on All orders </span>
                                                    <div class="copy-coupon-txt">
                                                        <input readonly="true" class="select-coupon1" type="textarea" value="BEYOUNG100">
                                                            <button class="copybtn1">COPY</button>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="circule"></div>
                                        </li>
                                        
                                        <li>
                                            <div class="coupon-section">
                                                <div class="offer-percent">
                                                    <p class="precent">₹200 <sup style="vertical-align: super; font-size: 20px; color: rgb(0, 0, 0);">Off</sup></p>
                                                </div>
                                                
                                                <div class="copy-coupon">
                                                    <span class="offer-special">Min. Cart Value ₹1999</span>
                                                    <span class="min-cart">Applicable on Prepaid Orders Only </span>
                                                    <div class="copy-coupon-txt">
                                                        <input readonly="true" class="select-coupon2" type="textarea" value="BEYOUNG200">
                                                            <button class="copybtn2">COPY</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="circule"></div>
                                        </li>
                                        
                                        <li>
                                            <div class="coupon-section">
                                                <div class="offer-percent">
                                                    <p class="precent">₹300 <sup style="vertical-align: super; font-size: 20px; color: rgb(0, 0, 0);">Off</sup></p>
                                                </div>
                                            
                                                <div class="copy-coupon">
                                                    <span class="offer-special">Min. Cart Value ₹2999 </span>
                                                    <span class="min-cart">Applicable on Prepaid Orders Only</span>
                                                    <div class="copy-coupon-txt">
                                                        <input readonly="true" class="select-coupon3" type="textarea" value="BEYOUNG300">
                                                            <button class="copybtn3">COPY</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="circule"></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="coupon-button">
                                <div class="container">
                                    <a href="/">Start Shopping</a>
                                </div>
                            </div>
                        </div> */}

                        <div className="my-coupon-main desktop">
                            <div className="my-coupon">
                                <div className="container">
                                <ul>
                                    <li>
                                    <div className="coupon-section">
                                        <div className="offer-percent">
                                        <p className="precent">₹100 <sup style={{ verticalAlign: 'super', fontSize: '20px', color: 'rgb(0, 0, 0)' }}>Off</sup></p>
                                        </div>

                                        <div className="copy-coupon">
                                        <span className="offer-special">Min. Cart Value ₹999</span>
                                        <span className="min-cart">Applicable on All orders</span>
                                        <div className="copy-coupon-txt">
                                            <input ref={coupon1Ref} readOnly={true} className="select-coupon1" type="text" value="BEYOUNG100" />
                                            <button className="copybtn1" onClick={() => copyToClipboard(coupon1Ref)}>COPY</button>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="circule"></div>
                                    </li>

                                    <li>
                                    <div className="coupon-section">
                                        <div className="offer-percent">
                                        <p className="precent">₹200 <sup style={{ verticalAlign: 'super', fontSize: '20px', color: 'rgb(0, 0, 0)' }}>Off</sup></p>
                                        </div>

                                        <div className="copy-coupon">
                                        <span className="offer-special">Min. Cart Value ₹1999</span>
                                        <span className="min-cart">Applicable on Prepaid Orders Only</span>
                                        <div className="copy-coupon-txt">
                                            <input ref={coupon2Ref} readOnly={true} className="select-coupon2" type="text" value="BEYOUNG200" />
                                            <button className="copybtn2" onClick={() => copyToClipboard(coupon2Ref)}>COPY</button>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="circule"></div>
                                    </li>

                                    <li>
                                    <div className="coupon-section">
                                        <div className="offer-percent">
                                        <p className="precent">₹300 <sup style={{ verticalAlign: 'super', fontSize: '20px', color: 'rgb(0, 0, 0)' }}>Off</sup></p>
                                        </div>

                                        <div className="copy-coupon">
                                        <span className="offer-special">Min. Cart Value ₹2999</span>
                                        <span className="min-cart">Applicable on Prepaid Orders Only</span>
                                        <div className="copy-coupon-txt">
                                            <input ref={coupon3Ref} readOnly={true} className="select-coupon3" type="text" value="BEYOUNG300" />
                                            <button className="copybtn3" onClick={() => copyToClipboard(coupon3Ref)}>COPY</button>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="circule"></div>
                                    </li>
                                </ul>
                                </div>
                            </div>

                            <div className="coupon-button">
                                <div className="container">
                                    <a href="/">Start Shopping</a>
                                </div>
                            </div>
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
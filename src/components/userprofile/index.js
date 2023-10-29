'use client'
import { useState } from 'react'
import './style.css'
import Image from 'next/image'

export default function UserProfile() {

    return (
        <>

            <div className='whole'>
            <div class="container">
                <div class="my-account profile">
                    <div class="myaccont-navigation">
                        
                        <div class="my-account-profile">
                            <p class="short-name">KS</p>
                            <p class="username">Khwahish Abad Siddiqui</p>
                            <span class="Beyoungster">#Beyoungster</span>
                        </div>
                        
                        <div class="myaccount-navigation">
                            <ul>
                                <li><a href="/MyAccount/Order"><span>Order</span></a></li>
                                {/* <li> <a href="/myaccount/address"><span>Address</span></a></li> */}
                                <li><a class="active" href="/MyAccount/Profile"><span>Profile</span></a></li>
                                <li> <a href="/MyAccount/Wishlist"><span>Wishlist</span></a></li>
                                <li><a href="/MyAccount/Coupons"><span>Coupons</span></a></li>
                                
                                {/* <li><a href="https://beyoungfolkspvtltd.freshdesk.com/support/tickets"><span>Tickets</span></a></li> */}
                            
                            </ul>
                            
                            
                        </div>
                    </div>
                    
                    
                    <div className="my-profile my-address-form profile-from">
                        <p className="short-name">KS</p>
                        <div className="form-control">
                            <div className="form-box">
                                <label>First Name <sub>*</sub></label>
                                <input type="text" placeholder="First Name" value="Khwahish Abad" />
                            </div>

                            <div className="form-box">
                                <label>Last Name <sub>*</sub></label>
                                <input type="text" placeholder="Last Name" value="Siddiqui" />
                            </div>

                            <div className="form-box in">
                                <label>Email ID <sub>*</sub></label>
                                <input type="email" disabled value="abadzeeshan002@gmail.com" />
                            </div>

                            <div className="form-box in">
                                <label>Birth Date <sub>*</sub></label>
                                <input type="date" value="0000-00-00" />
                            </div>

                            <div className="form-box" style={{ width: '100%' }}>
                                <label>Phone Number <sub>*</sub></label>
                                <input type="text" maxLength="10" placeholder="Phone Number" value="9121804096" />
                            </div>

                            <div className="form-box in">
                                <label>Address <sub>*</sub></label>
                                <input type="text" value="Malikana, Bhadohi" />
                            </div>

                            
                        </div>

                        <div className="gender-tab-box">
                            <small>Gender <sub>*</sub></small>
                            <div className="in-box">
                                <label>
                                    <input type="radio" name="radio-group" id="test1" value="male" /><span>Male</span>
                                </label>

                                <label>
                                    <input type="radio" id="test2" name="radio-group" value="female" /><span>Female</span>
                                </label>

                                <label>
                                    <input type="radio" id="test3" name="radio-group" value="other" /><span>Other</span>
                                </label>
                            </div>
                        </div>

                        

                        <button className="form-change-btn">SAVE CHANGES</button>
                    </div>

                </div>
            </div>

            </div>
        </>
    )

}
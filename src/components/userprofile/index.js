'use client'
import { useState, useEffect } from 'react'
import './style.css'
import Image from 'next/image'

export default function UserProfile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        // Perform localStorage action
        const serializedObject = localStorage.getItem('profile');
        const parsedProfile = JSON.parse(serializedObject);

        if (parsedProfile) {
            setProfile(parsedProfile);
            
        }
    }, []);

    console.log(profile);

    return (
        <>

            <div className='whole'>
            {profile ? (
                <div class="container">
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
                                    <li><a class="active" href="/MyAccount/Profile"><span>Profile</span></a></li>
                                    <li> <a href="/MyAccount/Wishlist"><span>Wishlist</span></a></li>
                                    <li><a href="/MyAccount/Coupons"><span>Coupons</span></a></li>
                                    
                                    {/* <li><a href="https://beyoungfolkspvtltd.freshdesk.com/support/tickets"><span>Tickets</span></a></li> */}
                                
                                </ul>
                                
                                
                            </div>
                        </div>
                        
                        
                        <div className="my-profile my-address-form profile-from">
                            {/* <p className="short-name">KS</p> */}
                            <div className="form-control">
                                <div className="form-box in">
                                    <label>Name <sub>*</sub></label>
                                    <input type="text" placeholder="Name" value={profile.name} />
                                </div>

                                {/* <div className="form-box">
                                    <label>Last Name <sub>*</sub></label>
                                    <input type="text" placeholder="Last Name" value="Siddiqui" />
                                </div> */}

                                <div className="form-box in">
                                    <label>Email ID <sub>*</sub></label>
                                    <input type="email" disabled value={profile.email} />
                                </div>

                                {/* <div className="form-box in">
                                    <label>Birth Date <sub>*</sub></label>
                                    <input type="date" value="1997-12-16" />
                                </div> */}

                                <div className="form-box" style={{ width: '100%' }}>
                                    <label>Phone Number <sub>*</sub></label>
                                    <input type="text" maxLength="10" placeholder="Phone Number" value="+91 9876543210" />
                                </div>

                                <div className="form-box in">
                                    <label>Address <sub>*</sub></label>
                                    <input type="text" value="New Delhi, India " />
                                </div>

                                
                            </div>

                            {/* <div className="gender-tab-box">
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
                            </div> */}

                            

                            {/* <button className="form-change-btn">SAVE CHANGES</button> */}
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
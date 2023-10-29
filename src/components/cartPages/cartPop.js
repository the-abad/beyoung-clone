'use client'
import { useState } from 'react'
import './popStyle.css'
import Image from 'next/image'

export default function CartPop(props) {

	const navigateToHome = () => {
		window.location.href = '/'; 
	};

    


	return (
        <> 
            <div className='LogIn-popUp' style={{ display: props.showModal ? 'block' : 'none' }}>
            {/* display: props.showModal ? 'block' : 'none' */}
            <div className="ReactModal__Overlay ReactModal__Overlay--after-open" style={{ position: 'fixed', inset: '0px', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 999 }}>
                <div className="ReactModal__Content ReactModal__Content--after-open login-form-box" tabIndex="-1" role="dialog" aria-modal="true" style={{ top: '0%', overflowY: 'auto', maxHeight: 'calc(100vh - 50px)', outline: 'none' }}>
                    <div className="social-login-title guest-close">
                        <button onClick={navigateToHome}  title="Close (Esc)" type="button" className="mfp-close" style={{ fontSize: '18px', cursor:'pointer' }}>
                            X
                        </button>
                    </div>

                    <div className="login-customers-box">
                        <div className="left">
                            <div className="login-intro">
                                <img src="/assets/image/login-and-signup-image.jpg" alt="Login and Signup" />
                            </div>

                            <div className="welcome-header" style={{textAlign:'center'}}>
                                Order Placed Successfully! <span className="welcome-header-small"></span>
                                <span className="offer-text">Thank you for shopping with us!</span>
                            </div>
                            

                            <a href='/' className="create-account" style={{ display: 'block', textAlign: 'center', marginBottom: '30px', cursor:'pointer'}}>
                            Continue Shopping
                            </a>

                        </div>
                    </div>






                </div>
            </div>

            </div>

            

            
            
        
        
        
        </>

    )

}
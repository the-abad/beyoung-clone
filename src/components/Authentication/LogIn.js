'use client'
import { useState } from 'react'
import './style.css'
import Image from 'next/image'
import axios from "axios";

export default function LogIn(props) {

	console.log(props)
    const ModalClose = () => {
        props.setShowModal(false);
        props.setShowModal2(true);

    }

    const ModalClose3 = () => {
        props.setShowModal2(false);
        props.setShowModal(false);

    }
    const [form, setForm] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const onChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setForm({...form, [name]:value});
    }
    // const submitForm = async (e) => {
    //     e.preventDefault();
    
    //     console.log(form);

    //     const apiUrl = 'https://academics.newtonschool.co/api/v1/user/login';
    
    //     const body = {...form, appType: 'ecommerce'}
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'projectID': 's412etnzxy4q',
    //     };
    
    //     try {
    //         const response = await axios.post(apiUrl, body, { headers: headers });
    //         console.log(response);
    //         if (response?.data?.status === 'success') {
    //           const token = response?.data?.token;
    //           localStorage.setItem('token', token);
    //           const profile = response?.data?.data;
    //           localStorage.setItem('profile', JSON.stringify(profile));
    //           console.log(profile);
    //           props.setShowModal(false);
    //         //   setIsSigned(true);
    //         }
    //       } catch (error) {
    //         console.error("Error fetching data: ", error);
    //       }

    // }
    const submitForm = async (e) => {
        e.preventDefault();
    
        console.log(form);
    
        const apiUrl = 'https://academics.newtonschool.co/api/v1/user/login';
    
        const body = { ...form, appType: 'ecommerce' };
        const headers = {
            'Content-Type': 'application/json',
            'projectID': 's412etnzxy4q',
        };
    
        try {
            const response = await axios.post(apiUrl, body, { headers: headers });
            console.log(response);
            if (response?.data?.status === 'success') {
                const token = response?.data?.token;
                localStorage.setItem('token', token);
                const profile = response?.data?.data;
                localStorage.setItem('profile', JSON.stringify(profile));
                console.log(profile);
                props.setShowModal(false);
    
                // Refresh the page
                window.location.reload();
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    
	return (
        <> 
            <div className='LogIn-popUp' style={{ display: props.showModal ? 'block' : 'none' }}>
            <div className="ReactModal__Overlay ReactModal__Overlay--after-open" style={{ position: 'fixed', inset: '0px', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 999 }}>
                <div className="ReactModal__Content ReactModal__Content--after-open login-form-box" tabIndex="-1" role="dialog" aria-modal="true" style={{ top: '0%', overflowY: 'auto', maxHeight: 'calc(100vh - 50px)', outline: 'none' }}>
                    <div className="social-login-title guest-close">
                        <button onClick={ModalClose3}  title="Close (Esc)" type="button" className="mfp-close" style={{ fontSize: '18px' , cursor:'pointer'}}>
                            X
                        </button>
                    </div>

                    <div className="login-customers-box">
                        <div className="left">
                            <div className="login-intro">
                                <img src="/assets/image/login-and-signup-image.jpg" alt="Login and Signup" />
                            </div>

                            <div className="welcome-header">
                                Login <span className="welcome-header-small"></span>
                                <span className="offer-text">Get Exciting Offers & Track Order</span>
                            </div>
                            <form method="POST">
                                <div className="form-in">
                                    <input type="email" onChange={onChange} name='email' placeholder='Enter your email *' className="" autoComplete="off"   />   
                                    <input type="password" onChange={onChange} name='password' placeholder='Enter your password *' className="" autoComplete="off" minLength="8"  style={{'margin-top':'10px'}}/>                           

                                </div>

                                <div className="login-forget-password-button">
                                    <button onClick={submitForm} style={{ width: '100%', cursor:'pointer' }}>LogIn</button>
                                </div>
                            </form>

                            <a onClick={ModalClose} className="create-account" style={{ display: 'block', textAlign: 'center', marginBottom: '30px' }}>
                                New to Beyoung? Sign Up
                            </a>

                        </div>
                    </div>






                </div>
            </div>

            </div>

            

            
            
        
        
        
        </>

    )

}
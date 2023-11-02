import { useState, useEffect } from 'react';
import React, { useRef } from 'react';
import './bodyStyle.css';
import Image from 'next/image';
import axios from 'axios';

export default function CartBuy() {
    const [lastCartItem, setLastCartItem] = useState(null);

    // const fetchCartData = () => {
    //     const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart';

    //     if (typeof window !== 'undefined') {
    //         const token = localStorage.getItem('token');
    //         const headers = {
    //             'Content-Type': 'application/json',
    //             'projectID': 's412etnzxy4q',
    //             'Authorization': `Bearer ${token}`,
    //         };

    //         axios
    //             .get(apiUrl, { headers: headers })
    //             .then((response) => {
    //                 const cartItems = response?.data?.data.items;

    //                 if (cartItems.length > 0) {
    //                     // Extract the last item from the cart items
    //                     const lastItem = cartItems[cartItems.length - 1];
    //                     setLastCartItem(lastItem);
    //                 } else {
    //                     // If the cart is empty, set last item to null
    //                     setLastCartItem(null);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error fetching data: ", error);
    //             });
    //     }
    // };


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

    const removeCart = async (productId) => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart/' + productId;

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'projectID': 's412etnzxy4q', // Replace with your actual Project ID
            };

            try {
                const response = await axios.delete(apiUrl, { headers: headers });
                console.log(response);
                // After removing the item, fetch cart data again
                fetchCartData();
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    };

    const calculateTotalPrice = () => {
        if (lastCartItem) {
            return lastCartItem.product.price;
        }
        return 0;
    };

    return (
        <>
            <div className='cartdesktop'>
                <section className="container checkout-container-maincart">
                    <div className="checkoutsteps">
                        <div className='cartbanner'>
                            <img src='/assets/image/cartbanner.png' />
                            <hr></hr>
                        </div>
                        {lastCartItem && (
                            <div className="product-main-box">
                                <div className='special'>
                                    <div className="product-left-box" key={lastCartItem._id}>
                                        <div className="cartdetails" id="cart_0">
                                            <div className="cartdetail">
                                                <figure>
                                                    <a href={`/products/${lastCartItem.product._id}`}>
                                                        <img src={lastCartItem.product.displayImage} alt="product img" />
                                                    </a>
                                                </figure>
                                                <article className="productdetail">
                                                    <span className="cartpname" style={{ marginBottom: '0px' }}>
                                                        {lastCartItem.product.name}
                                                    </span>
                                                    <div className="price-detail">
                                                        <strong>₹{lastCartItem.product.price}</strong>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="product-remove">
                                                <div className="left">
                                                    <a onClick={() => removeCart(lastCartItem.product._id)} className="remove-btn">
                                                        Remove
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right part */}
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
                                        <a href='/Cart/CheckOutBuy/' className="checkout-btn">
                                            checkout securely
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <div className="container" style={{ background: 'rgb(248, 248, 248)' }}>
                    <div className="also-product">
                        <div className="cards-images">
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
    );
}

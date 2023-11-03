import { useState, useEffect } from 'react';
import './style.css';
import Image from 'next/image';
import axios from 'axios';

export default function MyWishlist() {
    const [profile, setProfile] = useState(null);
    const [singleWishlist, setSingleWishlist] = useState();

    useEffect(() => {
        // Perform localStorage action
        const serializedObject = localStorage.getItem('profile');
        const parsedProfile = JSON.parse(serializedObject);

        if (parsedProfile) {
            setProfile(parsedProfile);
        }
    }, []);

    const fetchWishlistData = () => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';

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
                    setSingleWishlist(response?.data?.data);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        }
    };

    useEffect(() => {
        fetchWishlistData();
    }, []);

    const removeWishlist = async (productId) => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist/' + productId;

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                "projectID": 's412etnzxy4q', // Replace with your actual Project ID
            };

            try {
                const response = await axios.delete(apiUrl, { headers: headers });
                console.log(response);
                fetchWishlistData();
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
    };

    const addToCart = async (productId) => {

        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/cart/'+productId;
        const token = localStorage.getItem('token');

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'projectID': 's412etnzxy4q', 
        };

        const body = {
            "quantity": "1",

        };

        try {
            const response = await axios.patch(apiUrl, body, { headers: headers });
            console.log(response);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }

    }

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
                                        <li><a href="/MyAccount/Profile"><span>Profile</span></a></li>
                                        <li><a class="active" href="/MyAccount/Wishlist"><span>Wishlist</span></a></li>
                                        <li><a href="/MyAccount/Coupons"><span>Coupons</span></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="wishlist-product">
                                {singleWishlist?.items?.map((item) => (
                                    <div className="products-box" key={item.products._id}>
                                        <a href={`/products/${item.products._id}`}>
                                            <img src={item.products.displayImage} style={{ "width": '100%' }} />
                                            <h2 className="product-cat-name-mobile">
                                                {item.products.name}
                                            </h2>
                                            <div className="price">
                                                <strong> ₹{item.products.price} </strong>
                                            </div>
                                        </a>
                                        <div className="heart-icon" onClick={() => removeWishlist(item.products._id)}>
                                            <a> x</a>
                                        </div>
                                        <a onClick={() => {addToCart(item.products._id); removeWishlist(item.products._id)}} className="back-btn">
                                            <img src="/assets/image/bag.png" alt="Add to Cart" />
                                            <span>Add to cart</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>Loading profile...</div>
                )}
            </div>
        </>
    );
}

'use client'
import { useState, useEffect } from 'react'
import './style.css'
import Image from 'next/image'
import axios from 'axios';


export default function MyWishlist() {

    const serializedObject = localStorage.getItem('profile');
	const profile = JSON.parse(serializedObject);

    const [singleWishlist, setSingleWishlist] = useState();

    const fetchWishlistData = () => {
    const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist';
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'projectID': 's412etnzxy4q',
      'Authorization': `Bearer ${token}`,
    };

    axios.get(apiUrl, { headers: headers })
      .then((response) => {
        setSingleWishlist(response?.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    };
    useEffect(() => {
        fetchWishlistData();
    }, []);
    console.log(singleWishlist);



    const removeWhishlist = async (productId) => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/wishlist/'+productId;
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

    return (
        <>
            <div className='whole'>
                <div class="container1">
                    <div class="my-account profile">
                        <div class="myaccont-navigation">
                            
                            <div class="my-account-profile">
                                <p class="short-name">ZS</p>
                                <p class="username">{profile.name}</p>
                                <span class="Beyoungster">#Beyoungster</span>
                            </div>
                            
                            <div class="myaccount-navigation">
                                <ul>
                                    <li><a href="/MyAccount/Order"><span>Order</span></a></li>
                                    {/* <li> <a href="/myaccount/address"><span>Address</span></a></li> */}
                                    <li><a href="/MyAccount/Profile"><span>Profile</span></a></li>
                                    <li> <a class="active" href="/MyAccount/Wishlist"><span>Wishlist</span></a></li>
                                    <li><a href="/MyAccount/Coupons"><span>Coupons</span></a></li>
                                    
                                    {/* <li><a href="https://beyoungfolkspvtltd.freshdesk.com/support/tickets"><span>Tickets</span></a></li> */}
                                
                                </ul>
                                
                                
                            </div>
                        </div>

                        

                        <div className="wishlist-product">
                        {singleWishlist?.items?.map((item) => (
                            <div className="products-box">
                                <a href={`/products/${item.products._id}`}>
                                    <img src={item.products.displayImage} style={{"width":'100%'}}/>
                                    <h2 className="product-cat-name-mobile">
                                    {item.products.name}
                                    </h2>
                                    <div className="price">
                                        <strong> ₹{item.products.price} </strong>
                                    </div>
                                </a>

                                <div className="heart-icon" onClick={() => removeWhishlist(item.products._id)}>
                                    <a> x</a>
                                </div>

                                <a className="back-btn">
                                    <img src="/assets/image/bag.png" alt="Add to Cart" />                                    
                                    <span>Add to cart</span>
                                </a>

                            </div>
                        ))}

                            {/* <div className="products-box">
                                <a href="">
                                    <img src="/assets/image/tshirt.jpg" style={{"width":'100%' }}/>
                                    <h2 className="product-cat-name-mobile">
                                    Rust Orange Panelled Polo T-shirt
                                    </h2>
                                    <span className="cartpname">Playful Polos</span>
                                    <div className="price">
                                        <strong> ₹699 </strong>
                                    </div>
                                </a>

                                <div className="heart-icon">
                                    <a> x</a>
                                </div>

                                <a className="back-btn">
                                    <img src="/assets/image/bag.png" alt="Add to Cart" />                                    
                                    <span>Add to cart</span>
                                </a>

                            </div> */}

                            

                        </div>





                    


                    </div>
                </div>
            </div>


        </>
    )

}
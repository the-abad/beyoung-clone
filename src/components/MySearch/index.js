'use client'
import { useState, useEffect} from 'react'
import React, { useRef } from 'react';
import './style.css'
import Image from 'next/image'
import axios from 'axios';

export default function MySearch() {
    const keywordSearch = window.location.href.split('/').pop();
    const [searchProduct, setSearchProduct] = useState([]);
    console.log(keywordSearch,searchProduct);

    useEffect(() => {
        const apiUrl = 'https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=700';
        const headers = {
          'Content-Type': 'application/json',
          'projectId': 's412etnzxy4q',
        };
      
        const searchKeyword = window.location.href.split('/').pop(); // The search keyword
      
        axios.get(apiUrl, {
          headers: headers,
        })
          .then((response) => {
            const filteredProducts = response?.data?.data.filter((product) => {
              // Define the fields you want to search in
              const searchFields = ['name', 'brand', 'category'];
      
              // Check if the keyword exists in any of the search fields
              return searchFields.some((field) => {
                if (product[field] && product[field].toLowerCase().includes(searchKeyword.toLowerCase())) {
                  return true;
                }
                return false;
              });
            });
      
            setSearchProduct(filteredProducts);
          })
          .catch((error) => {
            console.error("Error fetching data: ", error);
          });
      }, []);
      

   

    return (
        <>
            <div class="productViewBox">
                <section class="container checkout-container-maincart">
                    <div class="checkoutsteps">

                        <section class="ProductList_searchInfo__gaYKm">
                            <p>Search Results</p>
                            <p>{searchProduct.length} Products found</p>
                        </section>
                        <div style={{width:'100%'}} >
                            {console.log(searchProduct)}
                        {searchProduct.map((item) => (
                            <div key={item._id} class="product-main-box">            
                                <div class="product-left-box">
                                    <div class="cartdetails" id="cart_0">
                                        <div class="cartdetail">
                                            <figure>
                                                <a href={`/products/${item._id}`}><img src={item.displayImage} alt="product img" /></a>
                                                
                                            </figure>
                                            
                                            
                                        </div>
                                        
                                        
                                    </div>

                                </div>
                                                        {/*right part*/}
                                
                                <div className="product-right-box">
                                

                                    <div className="product-details-info">
                                        <div className="p-heart-icon">
                                            <h1>{item.name}</h1>
                                            {/* <div className="heart-icon" style={{ cursor: 'pointer' }}>
                                            
                                            <svg
                                                style={{ margin: '9px 0px 0px 9px' }}
                                                viewBox="0 0 24 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="add-to-wishlist"
                                                height="18"
                                                width="18"
                                            >
                                                <path
                                                d="M11.0661 2.81728L11.6026 3.45246L12.1391 2.81728C13.2867 1.45859 15.0479 0.600098 16.8697 0.600098C20.0815 0.600098 22.6051 3.13599 22.6051 6.38807C22.6051 8.38789 21.72 10.2564 20.0229 12.3496C18.3175 14.4529 15.8645 16.6977 12.8407 19.4622L12.826 19.4756L12.8249 19.4766L11.6008 20.6001L10.3798 19.4879L10.3783 19.4866L10.3336 19.4457C10.3336 19.4457 10.3336 19.4457 10.3336 19.4457C7.31862 16.6834 4.87347 14.4409 3.17365 12.3404C1.4821 10.25 0.600098 8.38442 0.600098 6.38807C0.600098 3.13599 3.12361 0.600098 6.33544 0.600098C8.15729 0.600098 9.91845 1.45859 11.0661 2.81728Z"
                                                stroke="#000000"
                                                stroke-width="1"
                                                ></path>
                                            </svg>
                                            </div> */}
                                        </div>

                                        <span className="beyoung-original-text">{item.brand}</span>

                                        <div className="p-price-text">
                                            <strong>
                                            <b> ₹ </b>{item.price}
                                            </strong>
                                            
                                        </div>

                                        <span className="discounted-text">Inclusive of All Taxes + Free Shipping</span>

                                        <div className="user-product-rating" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                            <div className="star-rating" style={{ marginRight: '15px', marginTop: '15px' }}>
                                            {/* Star rating icons */}
                                            {[1, 2, 3, 4, 5].map((index) => (
                                                <svg key={index} width="18px" height="18px" viewBox="0 -1 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <g id="star" transform="translate(-2 -3)">
                                                    <path id="secondary" fill="#FFC800" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z"></path>
                                                    <path id="primary" d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z" fill="none" stroke="#FFC800" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path>
                                                </g>
                                                </svg>
                                            ))}
                                            </div>
                                            <p className="rating-user" style={{ marginTop: '15px' }}>
                                            <span className="prating">4.0</span>
                                            <span className="puser" style={{ fontSize: '12px', letterSpacing: '0.02em', color: '#0009' }}>({item.ratings} Ratings & Reviews)</span>
                                            </p>
                                        </div>
                                        
                                    </div>

                                </div>   
                            </div>
                         ))}
                        </div>
                    </div>

                </section>
            </div>

                       
        </>
    )

};


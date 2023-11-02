'use client'
import { useState, useEffect } from 'react'
import './style.css'
import Image from 'next/image'
import LogIn from '../Authentication/LogIn';
import SignUp from '../Authentication/SignUp';


export default function Navbar() {

	const [profile, setProfile] = useState(null);
	const [tok, setTok] = useState(null);

	const handleWishlistClick = () => {
		if (tok) {
			// If the user is logged in, navigate to the wishlist page
			window.location.href = '/MyAccount/Wishlist';
		  } else {
			// If the user is not logged in, show the login popup
			setShowModal(true);
		  }
	};

	const handleCartClick = () => {
		if (tok) {
			// If the user is logged in, navigate to the wishlist page
			window.location.href = '/Cart/OpenCart/';
		  } else {
			// If the user is not logged in, show the login popup
			setShowModal(true);
		  }
	};

	const [showModal, setShowModal] = useState(false);
	const change = () =>{
		if(showModal){
			setShowModal(false);
		}else{
			setShowModal(true)
		}
	}
	const [showModal2, setShowModal2] = useState(false);
	const change2 = () =>{
		if(showModal2){
			setShowModal2(false);
		}else{
			setShowModal2(true)
		}
	}

	const [searchModal, setSearchModal] = useState(false);
	const viewSearch = () => {
		if(searchModal){
			setSearchModal(false);
		}else{
			setSearchModal(true)
		}
	}
	const [searchkey, setSearchkey] = useState('');
	const searchKeyword = (e) =>{
		setSearchkey(e.target.value);
	}

	const navigateToSearchResult = () => {
		window.location.href = '/SearchResult/'+searchkey;
	  };

	  useEffect(() => {
		const serializedObject = localStorage.getItem('profile');
		console.log("Debug 1::::::"+serializedObject);
		setTok(localStorage.getItem('token'))
		console.log("Debug 2::::::::"+localStorage.getItem('token'));
		if (serializedObject) {
		  const parsedProfile = JSON.parse(serializedObject);
		  setProfile(parsedProfile);
		}
	  }, []);
	

	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
	const handleScroll = () => {
	if (window.scrollY >= 60) {
		setIsSticky(true);
	} else {
		setIsSticky(false);
	}
	};

	window.addEventListener('scroll', handleScroll);

	return () => {
	window.removeEventListener('scroll', handleScroll);
	};
	}, []);

	const handleLogout = () =>{
		localStorage.removeItem('token');
		window.location.href = '/';
	}



	// useEffect(() => {
	// const handleScroll = () => {
	// if (window.scrollY >= 60) {
	// 	setIsSticky(true);
	// } else {
	// 	setIsSticky(false);
	// }
	// };

	// window.addEventListener('scroll', handleScroll);

	// return () => {
	// window.removeEventListener('scroll', handleScroll);
	// };
	// }, []);
	// console.log(isSticky);


	return (
		
		<>
			
			<div class="offer-top">					
				<span>
					Free Shipping on All Orders |
				</span>
					Get Extra ₹100 OFF on Spent of ₹999 Use Code:
				<span>BEYOUNG100</span>
			</div>

			

			<section class="header-top">
				<div class="container">	
					<div class="left">
						<a href="/Update/">
							<svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15">
								<g transform="translate(0.0)">
									<path d="M90.333,0a5,5,0,0,0-4.4,7.376l4.126,7.463a.313.313,0,0,0,.547,0l4.128-7.465A5,5,0,0,0,90.333,0Zm0,7.5a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,90.333,7.5Z" transform="translate(-85.333)" fill="#fff"></path>
								</g>
							</svg>Track Order
						</a>
					</div>
					{tok ? (
								<div className="right">
										<div className="my-account-dropdown">
												<a id="myAccountBtn" className="active btn dropbtn" href="#">
														My Account
												</a>
												<div className="dropdown-content">
														<div className="profile-name">
																<p className="header-user-name">Hello, {profile.name}</p>
																{/* <span className="header-user-number">+91 9121804096</span> */}
														</div>
														<a href="/MyAccount/Profile">
																<span>Profile</span> <img src="/assets/image/chevron-right.png" />
														</a>
														<a href="/MyAccount/Order">
																<span>Order</span><img src="/assets/image/chevron-right.png" />
														</a>
														<a href="/MyAccount/Wishlist">
																<span>Wishlist</span> <img src="/assets/image/chevron-right.png" />
														</a>
												</div>
										</div>
										<a id="logoutBtn" className="btn logout" onClick={handleLogout}>
												LOGOUT
										</a>
								</div>
						) : (
								<div className="right">
										<a onClick={change} id="loginBtn" className="active btn login">
												LOG IN
										</a>
										<a onClick={change2} id="registerBtn" className="btn signup">
												SIGNUP
										</a>
										<LogIn
												showModal={showModal}
												setShowModal={setShowModal}
												showModal2={showModal2}
												setShowModal2={setShowModal2}
										/>
										<SignUp
												showModal={showModal}
												setShowModal={setShowModal}
												showModal2={showModal2}
												setShowModal2={setShowModal2}
										/>
								</div>
				)}					
				</div>
			</section>

			<div class={`header ${isSticky ? 'fixed-nav' : ''}`}>
				<div class="container">

					<div class="left">
						<figure class="log1"><a href="/">
							<svg width="150px" height="40px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 887.38 109.91">
								<defs>
									<style>{`.cls-1,.cls-2,.cls-3{fill:#010101;}.cls-2,.cls-3{stroke:#010101;strokeWidth:0.25px;}.cls-2{stroke-miterlimit:10;}.cls-3{stroke-linecap:round;stroke-linejoin:round;}`}
									</style>
								</defs>

								<title>logo</title>

								<path class="cls-1" d="M129.14,97.73a90.42,90.42,0,0,1,16.1,1.32,38.39,38.39,0,0,1,12.47,4.34,21.56,21.56,0,0,1,8,8,24.61,24.61,0,0,1,2.85,12.35A20.5,20.5,0,0,1,164.37,137q-4.25,5.28-12.55,8.67,11.43,2.79,17.05,9.78a26,26,0,0,1,5.63,16.83A25.31,25.31,0,0,1,170.86,186a28.57,28.57,0,0,1-9.78,9.48,47.11,47.11,0,0,1-14,5.45,74.23,74.23,0,0,1-16.19,1.76H71v-105Zm-3.47,42.49q7.28,0,12-2.94t4.68-9.56a10,10,0,0,0-5.72-9.7,19.26,19.26,0,0,0-6-1.84,46.89,46.89,0,0,0-7-.52H98.15v24.56Zm1.56,44.55a42.55,42.55,0,0,0,7.62-.66,20.63,20.63,0,0,0,6.41-2.21,12,12,0,0,0,4.41-4.19,12.58,12.58,0,0,0,1.65-6.76q0-8.08-5.37-11.54T127.75,156H98.15v28.82Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-1" d="M285.3,97.73v19.4H220v22.5h59.91v17.94H220V183.3h66.66v19.41H192.85v-105Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-1" d="M291.71,97.73h30.47l28.91,41.46,28.74-41.46h30.3l-45.88,64.69v40.29H337.07V161.83Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-1" d="M419.31,128.83a51.27,51.27,0,0,1,11.94-17.58,55.17,55.17,0,0,1,19.13-11.76,78.93,78.93,0,0,1,51.16,0,55.38,55.38,0,0,1,19.05,11.76,51.13,51.13,0,0,1,11.94,17.58,56.48,56.48,0,0,1,4.16,21.83,54.64,54.64,0,0,1-4.16,21.39,50,50,0,0,1-11.94,17.28,55.7,55.7,0,0,1-19.05,11.54,80.18,80.18,0,0,1-51.16,0,55.5,55.5,0,0,1-19.13-11.54,50.09,50.09,0,0,1-11.94-17.28,54.64,54.64,0,0,1-4.16-21.39A56.48,56.48,0,0,1,419.31,128.83Zm24.84,34.69a32.22,32.22,0,0,0,5.8,11.25,28.48,28.48,0,0,0,10.39,8,41.83,41.83,0,0,0,31.16,0,28.56,28.56,0,0,0,10.39-8,32.22,32.22,0,0,0,5.8-11.25,45.83,45.83,0,0,0,1.82-12.86,49.27,49.27,0,0,0-1.82-13.38,32.77,32.77,0,0,0-5.8-11.54,28.29,28.29,0,0,0-10.39-8.09,41.83,41.83,0,0,0-31.16,0A28.21,28.21,0,0,0,450,125.74a32.77,32.77,0,0,0-5.8,11.54,49.27,49.27,0,0,0-1.82,13.38A45.83,45.83,0,0,0,444.15,163.52Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-1" d="M646.11,194.7q-14,10.37-38.78,10.36-25.11,0-38.87-10.29T554.69,163V97.73h27.19V163a40.32,40.32,0,0,0,.86,8.38,15.79,15.79,0,0,0,3.64,7.28,19.86,19.86,0,0,0,7.7,5.15q4.93,2,13.25,2,14.53,0,20.08-5.51T633,163V97.73h27.18V163Q660.13,184.33,646.11,194.7Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-1" d="M705.49,97.73l51.6,70.43h.34V97.73h25.45v105H755.7l-51.42-70.28h-.35v70.28H678.48v-105Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-1" d="M880,201.9a52.57,52.57,0,0,1-17.84,3.16,73.17,73.17,0,0,1-25.54-4.19,55.5,55.5,0,0,1-19.13-11.54,50.09,50.09,0,0,1-11.94-17.28,54.82,54.82,0,0,1-4.16-21.39,56.66,56.66,0,0,1,4.16-21.83,51.27,51.27,0,0,1,11.94-17.58,55.17,55.17,0,0,1,19.13-11.76,72.24,72.24,0,0,1,25.54-4.26,69.78,69.78,0,0,1,18.44,2.42,56.3,56.3,0,0,1,16.1,7.13,41.7,41.7,0,0,1,11.86,11.62,35.14,35.14,0,0,1,5.72,15.88h-26A21.9,21.9,0,0,0,879,119.05q-6.93-4.41-16.8-4.41a36.38,36.38,0,0,0-15.58,3,28.29,28.29,0,0,0-10.39,8.09,32.94,32.94,0,0,0-5.8,11.54,49.26,49.26,0,0,0-1.81,13.38,45.82,45.82,0,0,0,1.81,12.86,32.39,32.39,0,0,0,5.8,11.25,28.56,28.56,0,0,0,10.39,8,36.38,36.38,0,0,0,15.58,3q13.51,0,20.86-5.81t8.58-16.83H864.23V146h51.94v56.76H898.86l-2.77-11.91A40.35,40.35,0,0,1,880,201.9Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-2" d="M944.66,177.89a13.57,13.57,0,1,0,13.56,13.56A13.57,13.57,0,0,0,944.66,177.89Zm0,24.91A11.35,11.35,0,1,1,956,191.45,11.35,11.35,0,0,1,944.66,202.8Z" transform="translate(-70.96 -95.23)"></path>

								<path class="cls-3" d="M946.77,192.34a5,5,0,0,0,2.74-1.1,3.59,3.59,0,0,0,1.11-2.92,3.75,3.75,0,0,0-1.36-3.24,6.77,6.77,0,0,0-4-1h-5.58v14.73h2.42v-6.3h2.27l3.81,6.3h2.74Zm-2-1.88h-2.7v-4.31H945c.36,0,.73,0,1.11,0a3.32,3.32,0,0,1,1,.27,2,2,0,0,1,.76.6,1.74,1.74,0,0,1,.31,1.07,2.36,2.36,0,0,1-.29,1.27,2.07,2.07,0,0,1-.75.69,2.57,2.57,0,0,1-1.08.3C945.66,190.44,945.23,190.46,944.78,190.46Z" transform="translate(-70.96 -95.23)"></path>
							</svg>	
						</a></figure>

						<div>
							<ul class="menu">
    							<li class="menu-top">
      							<a href="/#MEN" class="menu-title" >Men</a>
								{/* onmouseover="showSubMenu(this)" onmouseout="hideSubMenu(this)" */}

								</li>

								<li class="menu-top">
							      <a href="/#WOMEN" class="menu-title">WOMEN</a>

								</li>

								<li class="menu-top">
							      <a href="/#TRENDING" class="menu-title">TRENDING</a>
							    </li>

								<li class="menu-top">
							      <a href="/#BEST SELLER" class="menu-title">BEST SELLER</a>

								</li>


							</ul>
						</div>
					</div>

					<div class="right">

						<a onClick={viewSearch} class="search-bar" style={{ cursor: 'pointer' }}>
							<svg version="1.1" width="17" height="17" x="0" y="0" viewBox="0 0 16 16">
								<g><path fill="#000000" d="M15.7 14.3l-4.2-4.2c-0.2-0.2-0.5-0.3-0.8-0.3 0.8-1 1.3-2.4 1.3-3.8 0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6c1.4 0 2.8-0.5 3.8-1.4 0 0.3 0 0.6 0.3 0.8l4.2 4.2c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.3 0.4-0.9 0-1.3zM6 10.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" data-original="#444444">	
								</path></g>
							</svg>
						</a>

						

						<div class="search-toggle display" style={{ display: searchModal ? 'block' : 'none' }}>
							<input type="text" placeholder="Search entire store here..." onChange={searchKeyword} />
							<button onClick={navigateToSearchResult} style={{cursor:'pointer'}}>Search</button>
						</div>

						<a onClick={handleWishlistClick}  aria-label="wishlist" class="heart-icon">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 437.775 437.774">
								<g><path d="M316.722,29.761c66.852,0,121.053,54.202,121.053,121.041c0,110.478-218.893,257.212-218.893,257.212S0,266.569,0,150.801 C0,67.584,54.202,29.761,121.041,29.761c40.262,0,75.827,19.745,97.841,49.976C240.899,49.506,276.47,29.761,316.722,29.761z">				
								</path></g>

								<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
							</svg>
						</a>
						

						
						

						

						<a onClick={handleCartClick} class="add-cart-icon" >
						{/* style="margin-right:5px" */}
							<svg height="17" viewBox="0 -31 512.00033 512" width="17" xmlns="http://www.w3.org/2000/svg">
								<path d="m166 300.003906h271.003906c6.710938 0 12.597656-4.4375 14.414063-10.882812l60.003906-210.003906c1.289063-4.527344.40625-9.390626-2.433594-13.152344-2.84375-3.75-7.265625-5.964844-11.984375-5.964844h-365.632812l-10.722656-48.25c-1.523438-6.871094-7.617188-11.75-14.648438-11.75h-91c-8.289062 0-15 6.710938-15 15 0 8.292969 6.710938 15 15 15h78.960938l54.167968 243.75c-15.9375 6.929688-27.128906 22.792969-27.128906 41.253906 0 24.8125 20.1875 45 45 45h271.003906c8.292969 0 15-6.707031 15-15 0-8.289062-6.707031-15-15-15h-271.003906c-8.261719 0-15-6.722656-15-15s6.738281-15 15-15zm0 0"></path>

								<path d="m151 405.003906c0 24.816406 20.1875 45 45.003906 45 24.8125 0 45-20.183594 45-45 0-24.8125-20.1875-45-45-45-24.816406 0-45.003906 20.1875-45.003906 45zm0 0"></path>

								<path d="m362.003906 405.003906c0 24.816406 20.1875 45 45 45 24.816406 0 45-20.183594 45-45 0-24.8125-20.183594-45-45-45-24.8125 0-45 20.1875-45 45zm0 0"></path>
							</svg>
							{/* <span class="position">0</span> */}
						</a>

						{/* <div class="show-added-msg" id="add-to-note">Product Added to your cart.</div> */}

					</div>


				</div>
			</div>


		</>

			


		
	
		



  	)

}
  




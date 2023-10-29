'use client'
import { useState } from 'react'
import './style.css'
import Image from 'next/image'

export default function Footer() {

    const [toggleDown, setToggleDown] = useState(false);
	const change = () =>{
		if(toggleDown){
			setToggleDown(false);
		}else{
			setToggleDown(true)
		}
	}

	const [toggleDown2, setToggleDown2] = useState(false);
	const change2 = () =>{
		if(toggleDown2){
			setToggleDown2(false);
		}else{
			setToggleDown2(true)
		}
	}

  return (
	<>
	




	<footer>
		<div class="container">

			<div class="footer-main-sec">
				<div class="">
					<p class="footer-heading">Need help</p>
					<div class="footer-link">
						<a href=""> Contact Us</a>
						<a href=""> Track Order</a>
						<a href="">Returns &amp; Refunds</a>
						<a href=""> FAQ</a>
						<a href="">Career </a>
					</div>
		      	</div>

				<div class="">
					<p class="footer-heading">COMPANY</p>
					<div class="footer-link">
						<a href=""> About Us</a>
						<a href=""> Beyoung Blog</a>
						<a href=""> Beyoungistan</a>
						<a href=""> Collaboration</a>
						<a href=""> Media</a>
					</div>
		      	</div>

				<div class="">
					<p class="footer-heading">MORE INFO</p>
						<div class="footer-link">
						<a href="">Term and Conditions </a>
						<a href=""> Privacy Policy</a>
						<a href=""> Shipping Policy</a>
						<a href="">Sitemap </a>
					</div>
				</div>

				<div class="">
		        	<p class="footer-heading">LOCATION</p>
					<div class="footer-link">
						<a href="mailto:support@beyoung.in">support@beyoung.in </a>
						<span>Eklingpura Chouraha, Ahmedabad Main Road</span>
						<span>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</span>
		        	</div>
					<p class="footer-heading-down">DOWNLOAD THE APP</p>
					{/* style="margin-top:20px;margin-bottom: 20px;" */}
					<div class="footer-aap-links">
		        		<a href="https://play.google.com/store/apps/details?id=com.beyoungapp&amp;referrer=utm_source%3Dwebsite%26utm_medium%3Dfooter%26anid%3Dadmob">
		          			<img class="lazyload1"   alt="beyoung android app" src="/assets/image/Play-Store-footer.png" />
							  {/* style="width: 180px;height: auto;" */}
		       			</a>
						<a href="https://apple.co/405UjCU">
							<img class="lazyload1"    alt="beyoung android app" src="/assets/image/App-Store-footer.png" />
							{/* style="width: 180px;height: auto;" */}
						</a>
		        	</div>
				
				
				</div>






			</div>

			<div class="footer-content-section">
				
				<div class="footer-content-section-main">
					<section class="choose-heading f-toggle">
						<p>WHY CHOOSE US?</p>
						<svg onClick={change} width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="#f8eb27"></path>
						</svg>
					</section>
					<section class="op-toggle" style={{ display: toggleDown ? 'block' : 'none' }}>
						<div class="home-content">
							
							<div class="sub-content">
								<h1>Online Shopping Site</h1>
								<h2>India's Best Online Shopping Site for Fashion and Lifestyle</h2>
								<p>
									Started in 2018, Beyoung is the Best Site for online shopping in India when it comes to a vast collection of
									men's and women's fashion. The latest trends and styles are showcased here, yes at your favorite online
									fashion
									store. Well, if fashion is medicine, then Be Young is the chemist shop where you can do your online shopping
									for
									fashion with ease. Nothing to brag about, but we are the classic blend of 'Creativity' and 'Style'. Get The
									Young Out with Beyoung, our slogan says a lot about us. Our website is filled with the cool outfits that you
									always crave. Indeed, online shopping for women and men at Beyoung is hassle-free that in just a few clicks,
									one
									can purchase whatever he/she wants. A one-stop destination for all your shopping needs, Beyoung caters to
									each
									taste and need of every personality. The premium quality, affordable style, and trending graphics go into
									the
									making of our vast collection of men's and Women's Clothing. 
		            			</p>
								<p>
									Beyoung offers unlimited options for online shopping which makes it one of the best Indian sites for online
									shopping. We deal with the latest trends and different theme-based products at an affordable price range.
									While
									creating products, we keep the current youth trend in mind so that you will always find a glimpse of pop
									culture
									in our collection. Basically, when it comes to choosing the best online shopping websites where one can shop
									for
									top-notch products at a minimal price then Beyoung is the only name. Providing hassle-free and soothing
									online
									shopping in India to the consumer is our first priority. We provide free shipping and cash on delivery
									options.
									Not only that, when it comes to customer satisfaction &amp; experience, you don't need to fret about it
									anymore
									because Beyoung has got your back. The online shopping store is flooded with great offers and deals. The
									collection of premium and comfortable t shirts &amp; mobile covers that are available for 150+ models help
									you
									to speak your quirky vibe.

									
								</p>
							</div>

						</div>
					</section>
				</div>

				<div class="footer-content-section-main">
					<section class="choose-heading">
						<p>POPULAR CATEGORIES</p>
						<svg onClick={change2} width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5303 9.46967C18.8232 9.76256 18.8232 10.2374 18.5303 10.5303L12.5303 16.5303C12.2374 16.8232 11.7626 16.8232 11.4697 16.5303L5.46967 10.5303C5.17678 10.2374 5.17678 9.76256 5.46967 9.46967C5.76256 9.17678 6.23744 9.17678 6.53033 9.46967L12 14.9393L17.4697 9.46967C17.7626 9.17678 18.2374 9.17678 18.5303 9.46967Z" fill="#f8eb27"></path>
						</svg>
					</section>
					
					<section style={{ display: toggleDown2 ? 'block' : 'none' }}>
						<section class="footer-cat-links"> 
							<p class="heading-sitemap"><strong>Women's Clothing</strong></p>

							<p class="heading-p"><strong>Topwear:</strong> Women Shirts | Half Sleeve T-Shirts | Full Sleeve T-Shirts | Printed T-Shirts | Plain T-Shirts | Crop Tops | Plus Size T-Shirts | kurti   </p>

							<p class="heading-p"><strong>Theme Based T Shirts:</strong> Women's Travel T-shirts | Feminist T-shirts</p>

							<p class="heading-p"><strong>Winter Collection:</strong> Hoodies for Women | Sweatshirts for Women | Long Coats for Women  </p>
						</section>

						<section class="footer-cat-links"> 
							<p class="heading-sitemap"><strong>Customization</strong></p>
							<p class="heading-p"> Custom T Shirt</p>
						</section>

						<section class="footer-cat-links"> 
							<p class="heading-sitemap"><strong>Couple Wear</strong></p>
							<p class="heading-p">Couple Boxer | Couple T shirts</p>
						</section>

						<section class="footer-cat-links"> 
							<p class="heading-sitemap"><strong>Bottomwear: </strong></p>
							<p class="heading-p">Mens Boxer | Womens Boxer | Jeggings | Men Sweatpants | Mens Joggers  | Chino Pants | Mens Jeans | Mens Pyjamas </p>
						</section>
					</section>
				</div>

				
			</div>

			<div class="footer-bottom">
			
					<div class="sequre-payment">
						<p class="PN-1">100% SECURE PAYMENT</p>
						<img class="lazyload" src="/assets/image/Frame-payment-1.jpg" />
					</div>

					<div class="socila-links">
						<p class="PN-1" >LET'S BE FRIENDS</p>
						<div class="social-icon">

							<a href="https://www.instagram.com/beyoung.in_official/">
								<img class="lazyload footer-img loaded" alt="Online Shopping Site In India" title="Online Shopping Site In India" src="/assets/image/insta-add.jpg" />
							</a>
							<a href="https://www.linkedin.com/company/beyoung-in/">
								<img class="lazyload footer-img loaded" alt="Online Shopping Site In India" title="Online Shopping Site In India" src="/assets/image/link-add.jpg" />
							</a>
							<a href="https://www.facebook.com/beyoungfolks/">
								<img class="lazyload footer-img loaded" alt="Online Shopping Site In India" title="Online Shopping Site In India" src="/assets/image/fb-add.jpg" />
							</a>
							<a href="https://twitter.com/Beyoung_in/">
								<img class="lazyload footer-img loaded" alt="Online Shopping Site In India" title="Online Shopping Site In India" src="/assets/image/twt-add.jpg" />
							</a> 
							<a href="https://in.pinterest.com/BeyoungFolks/">
								<img class="lazyload footer-img loaded" alt="Online Shopping Site In India" title="Online Shopping Site In India" src="/assets/image/pin-add.jpg" />
							</a>
							<a href="https://www.youtube.com/c/beyoungfolks/">
								<img class="lazyload footer-img loaded" alt="Online Shopping Site In India" title="Online Shopping Site In India" src="/assets/image/yt-add.jpg" />
							</a>

						</div>
						
					</div>

			</div>




			<div class="copyright">
				<p>Copyright © 2023 Beyoung Folks Pvt Ltd. All rights reserved.</p>
			</div>

		</div>
	</footer>

	
	</>



  )
  
}



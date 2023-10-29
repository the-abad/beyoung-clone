import './style.css'

export default function FooterTop(){
 return(
 <>
    <div class="footer-top">
	     {/* style="margin-top:50px;background:#F1F1F1" */} 
		<img class="lazyload2 footer-img" src="/assets/image/footerdesktop-strip.jpg" alt="Online Shopping Site In India" title="Online Shopping Site In India" />
		<div class="footer-media" >
		 {/* style="border-top:.5px solid #000" */}
		</div>
		<a href="in-the-news.html">
			<img class="lazyload2 footer-img" src="/assets/image/pr-strip-banner.jpg" alt="Online Shopping Site In India" title="Online Shopping Site In India" />
			 {/* style="display:block" */}
		</a>
	</div>
 </>
 )
}
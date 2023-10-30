import CategoryTitle from "../others/categoryTitle";
import DiscountSlider from "../others/discountSlider";
import MenFilterProducts from "../others/menFilterProducts";
import WomenFilterProducts from "../others/womenFilterProducts";
import TrendingFilterProducts from "../others/trendingFilterProducts";

import FooterTop from "../others/footerTop";
import HeaderSlider from "../others/slider";
import BestSellerFilterProducts from "../others/bestSellerFilterProducts";


export default function Homepage(){
  
 return(
    <>
    <HeaderSlider/>
    <DiscountSlider/>
    <CategoryTitle  title="MEN" />
    <MenFilterProducts/>
    <CategoryTitle  title="WOMEN" />
    <WomenFilterProducts/>
    <CategoryTitle  title="TRENDING" />
    <TrendingFilterProducts/>
    <CategoryTitle  title="BEST SELLER" />
    <BestSellerFilterProducts/>
    <FooterTop/>
  </>
 )
}
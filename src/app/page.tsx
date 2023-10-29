import Image from 'next/image'

import Navbar from "@/components/Navbar/"
import Homepage from "@/components/home";
import Footer from "@/components/footer/";

export default function Home() {
  return (
    <>
    {/* <Header/> */}

    <Navbar/>
    <Homepage/>
    <Footer/>

    </>
  )
}



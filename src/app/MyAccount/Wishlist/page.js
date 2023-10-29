'use client'
import { useState } from 'react'
// import './style.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

import Footer from '@/components/footer'
import MyWishlist from '../../../components/myWishlist'

export default function Whislist() {

	


	return (
        <> 
        <Navbar/>
        <MyWishlist/>
        <Footer/>
        </>

    )

}
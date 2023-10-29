'use client'
import { useState } from 'react'
// import './style.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

import Footer from '@/components/footer'
import MyCoupons from '../../../components/myCoupons'

export default function Coupons() {

	


	return (
        <> 
        <Navbar/>
        <MyCoupons/>
        <Footer/>
        </>

    )

}
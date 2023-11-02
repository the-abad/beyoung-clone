'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import ProductView from '@/components/productView'

export default function SingleProduct() {

	


	return (
        <> 
        <Navbar/>
        {/* <h1 className='yo'>dxfffdfdfdf</h1> */}

        <ProductView/>
        <Footer/>
        </>

    )

}
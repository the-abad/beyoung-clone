'use client'
import { useState } from 'react'
// import './style.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import UserProfile from '@/components/userprofile'
import Footer from '@/components/footer'

export default function Profile() {

	


	return (
        <> 
        <Navbar/>
        <UserProfile/>  
        <Footer/>
        </>

    )

}
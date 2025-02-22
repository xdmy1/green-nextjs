"use client";
import React from 'react'
import Logo from '/public/Logo.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Popover } from '@headlessui/react'
const Nav = () => {
  return (
    <div className='sticky top-0 z-10 backdrop-blur'>
        <nav className='p-5 lg:px-32 2xl:px-96'>
            <ul className='flex justify-between items-center'>
                <div className='flex gap-1 lg:gap-2 items-center justify-center'>
                    <Image src={Logo} alt="logo" />
                    <p className='font-bold lg:text-l'>GreenBank</p>
                </div>
                <div className='md:hidden'>menu</div>
                <div className='md:gap-5 hidden md:flex lg:gap-10 lg:text-l lg:font-medium'>
                <li>Home</li>
                <li>About</li>
                <li>Talk to Us</li>
                </div>
                <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className='hidden md:flex border px-4 py-2 rounded-full border-green-300 text-green-300'>Contact</motion.button>
            </ul>
            
        </nav>
    </div>
  )
}

export default Nav

"use client";
import React from 'react'
import Image from 'next/image'
import cardImg from '/public/pefect-card.png'
import { motion } from "framer-motion"

const Design = () => {
  return (
    <section className='pb-32 px-5 lg:px-32 2xl:px-96'>
        <div className='flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:items-cente'>
        <div className='mt-10'>
                <motion.img 
                animate={{ translateY:[-20, 20] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                src={cardImg.src} alt="Card Hero" className='w-[300px] md:w-[400px]  lg:w-[500px]'/>
            </div>
            <div className="flex flex-col gap-2 items-center md:max-w-[500px] lg:items-end ">
                <h1 className='font-bold text-3xl text-center lg:text-end lg:text-5xl'>Find the Perfect Credit Card for You</h1>
                <p className='text-center text-xl lg:text-end text-white/85'>You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</p>
                <motion.button 
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                className='mt-4 px-4 py-2 bg-green-600 text-white rounded-full'>Get Started</motion.button>
                
            </div>
            
        </div>
    </section>
  )
}

export default Design

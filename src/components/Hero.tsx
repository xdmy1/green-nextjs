"use client";
import React from 'react'
import Image from 'next/image'
import cardImg from '/public/card.png'
import usersImg from '/public/users.png'
import { motion } from "motion/react"
import float1 from '/public/hero-float1.png'
import float2 from '/public/hero-float2.png'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"


const Hero = () => {
  return (
    <section className='py-32 px-5 lg:px-32 2xl:px-96 overflow-x-hidden'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between relative'>
            <motion.img
            initial={{ x: "-100%" }}
            animate={{ x: "calc(-100% + 100%)" }}
             src={float1.src} alt="Float 1" className='hidden md:block absolute -top-28 -left-20 w-[150px] h-[150px] z-10'/>
            <motion.img
            initial={{ x: "100%" }}
            animate={{ x: "calc(100% - 100%)" }}
             src={float2.src} alt="Float 1" className='hidden md:block absolute top-12 -right-20 w-[150px] h-[150px] z-10'/>
            <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "calc(-100% + 100%)" }}
            className="flex flex-col gap-2 items-center  md:max-w-[500px] lg:items-start ">
                <h1 className='font-bold text-3xl text-center lg:text-start lg:text-5xl'>Discover the 
               <motion.span 
               className='bg-[linear-gradient(to_right,#1B4D3A,#3C7C54,#5BAF7B,#78D399,#A3F1B7,#1B4D3A,#3C7C54,#5BAF7B,#78D399,#A3F1B7,#1B4D3A,#3C7C54,#5BAF7B,#78D399,#A3F1B7)] bg-clip-text text-transparent [background-size:300%]'
               animate={{
                backgroundPositionX: '-100%'
               }}
               transition={{
                repeat: Infinity,
                ease: 'linear',
                repeatType: 'loop',
                duration: 1,
            
               }}
               > Perfect</motion.span> Credit Card for You</h1>
                <p className='text-center text-xl lg:text-start text-white/85'>Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.</p>
                
                <TooltipProvider>
    <Tooltip>
        <TooltipTrigger>
            <motion.div 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                className='mt-4 px-4 py-2 bg-green-600 text-white rounded-full font-semibold cursor-pointer'>
                Get Started
            </motion.div>
        </TooltipTrigger>
        <TooltipContent>
            <p>made by damiqn</p>
        </TooltipContent>
    </Tooltip>
</TooltipProvider>
                


                <div className='flex gap-4 items-center '>   
                    <Image src={usersImg} alt="Users Hero" className='h-[38.4px] w-[96px]'/>
                    <div className='max-w-[150px] mt-4 flex flex-col justify-center'>
                        <p className='font-bold '>10.2k+</p>
                        <p className='text-sm text-white/80' >Active users around the world</p>
                    </div>
                </div>
            </motion.div>
            <div className='mt-10'>
                <motion.img 
                 src={cardImg.src} 
                 alt="Card Hero" 
                 className='w-[300px] md:w-[400px]  lg:w-[500px]'
                 animate={{ translateY:[-30, 30] }}
                 transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                 

                 />
            </div>
        </div>
    </section>
  )
}

export default Hero

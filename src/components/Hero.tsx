import React from 'react'
import Image from 'next/image'
import cardImg from '/public/card.png'
import usersImg from '/public/users.png'

const Hero = () => {
  return (
    <section className='py-32 px-5 lg:px-32 2xl:px-96'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between '>
            <div className="flex flex-col gap-2 items-center  md:max-w-[500px] lg:items-start ">
                <h1 className='font-bold text-3xl text-center lg:text-start lg:text-5xl'>Discover the Perfect Credit Card for You</h1>
                <p className='text-center text-xl lg:text-start text-white/85'>Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.</p>
                <button className='mt-4 px-4 py-2 bg-green-600 text-white rounded-full'>Get Started</button>
                <div className='flex gap-4 items-center '>   
                    <Image src={usersImg} alt="Users Hero" className='h-[38.4px] w-[96px]'/>
                    <div className='max-w-[150px] mt-4 flex flex-col justify-center'>
                        <p className='font-bold '>10.2k+</p>
                        <p className='text-sm text-white/80' >Active users around the world</p>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <Image src={cardImg} alt="Card Hero" className='w-[300px] md:w-[400px]  lg:w-[500px]'/>
            </div>
        </div>
    </section>
  )
}

export default Hero

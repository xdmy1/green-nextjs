import React from 'react'
import Image from 'next/image'
import logo from '/public/Logo.png'

const Footer = () => {
  return (
    <footer className='py-12 px-5 lg:px-32 2xl:px-96 bg-white/5 backdrop-blur'>
        <div className='flex gap-6 flex-col items-center'>
            <div className='flex flex-col items-center gap-1'>
            <Image src={logo} alt="Logo"/>
            <p className='font-bold text-2xl'>GreenBank</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
            <p className='text-sm'>Coded by Damian, ig:_damiqn</p>
            <p className='text-xs'>&copy; All rights reserved. </p>
            
            </div>
        </div>
    </footer>
  )
}

export default Footer

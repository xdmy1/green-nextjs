import React from 'react'
import Image from 'next/image'
import AppStore from '/public/App_Store.png'
import GooglePlay from '/public/Google_Play.png'
import telefon from '/public/telefon.png'

const Cta = () => {
  return (
    <div className=' px-5 lg:px-32 2xl:px-96 flex flex-col gap-10 items-center lg:flex-row lg:justify-between'>
      <div className='flex flex-col items-center lg:items-start'>
        <h1 className='font-bold text-center text-3xl lg:text-start'>Easy way to manage your finances</h1>
        <p className='text-white/80 text-sm text-center lg:text-start'>App that supports iOS and Android</p>
        <div className='flex gap-4 mt-4'>
            <Image src={AppStore} alt="App Store" className='hover:cursor-pointer'/>
            <Image src={GooglePlay} alt="Google Play" className='hover:cursor-pointer'/>
        </div>
      </div>
      <div>
        <Image src={telefon} alt="Telefon" className='w-auto'/>
      </div>
    </div>
  )
}

export default Cta

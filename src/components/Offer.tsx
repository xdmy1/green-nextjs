import React from 'react'
import Security from '/public/security.png'
import Investing from '/public/investing.png'
import Method from '/public/method.png'
import Image from 'next/image'
const Offer = () => {
  return (
    <section className='mt-32 px-5 lg:px-32 2xl:px-96'>
     <div className='flex flex-col gap-16'>
        <div>
            <h1 className='text-center font-bold text-4xl'>What do we offer?</h1>
        </div>
        <div className='max-w-[400px] flex flex-col gap-10 md:flex-row md:max-w-full lg:flex lg:justify-between'>
            <div className='flex bg-white/5  lg:bg-transparent p-4 rounded-3xl flex-col gap-2 items-center lg:items-start justify-between lg:flex-row lg:gap-3'>
                <Image src={Security} alt="Security" className='w-16'/>
                <div className='flex flex-col gap-1'>
                <h1 className='text-center font-semibold text-2xl lg:text-xl lg:text-start'>Security</h1>
                <p className='text-center lg:text-start max-w-[350px]'>Our platform is secured with the latest technology to ensure yours.</p>
                </div>
            </div>
            
            <div className='flex bg-white/5  lg:bg-transparent p-4 rounded-3xl flex-col gap-2 items-center lg:items-start justify-between lg:flex-row lg:gap-3'>
                <Image src={Investing} alt="Investing" />
                <div className='flex flex-col gap-1'>
                <h1 className='text-center font-semibold text-2xl lg:text-xl lg:text-start'>Investing</h1>
                <p className='text-center lg:text-start max-w-[350px]'>Invest in your future with our platform and watch your money.</p>
                </div>
               
            </div>
            
            <div className='flex bg-white/5  lg:bg-transparent p-4 rounded-3xl flex-col gap-2 items-center lg:items-start justify-between lg:flex-row lg:gap-3'>
                <Image src={Method} alt="Method" />
                <div className='flex flex-col gap-1'>
                <h1 className='text-center font-semibold text-2xl lg:text-xl lg:text-start'>Easy Method</h1>
                <p className='text-center lg:text-start max-w-[350px]'>Our platform is easy to use and navigate. You can start investing.</p>
                </div>
                
            </div>
        </div>
     </div>
    </section>
  )
}

export default Offer

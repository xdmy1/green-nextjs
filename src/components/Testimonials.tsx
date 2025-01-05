import React from 'react'
import user1 from '/public/testimonial-user1.png'
import user2 from '/public/testimonial-user2.png'
import user3 from '/public/testimonial-user3.png'
import Image from 'next/image'


const Testimonials = () => {
  return (
    <section className='pb-32 px-5 lg:px-32 2xl:px-96'>
        <div className='flex flex-col gap-6 lg:flex-row lg:justify-between'>
            <div className='p-8 flex flex-col gap-4 bg-white/5 rounded-xl lg:gap-6'>
                <p>"Great session! Dani was super helpful. She 
                    shared some practical advice on how can 
                    lorem ip we go about refining our service offerings."</p>
                <div className='flex gap-2 items-center'>
                    <Image src={user1} alt="User 1" className='w-8'/>
                    <div>
                        <p className='font-bold text-xs'>Hadid Khan</p>
                        <p className='text-xs'>UI/UX Designer</p>
                    </div>
                </div>
            </div>
            <div className='p-8 flex flex-col gap-4 bg-white/5 rounded-xl lg:gap-6'>
                <p>"It's is both attractive and highly adaptable. It's exactly what 
                    I've been looking forefinitely wo lorem ipsum dolorth the investment."</p>
                <div className='flex gap-2 items-center'>
                    <Image src={user2} alt="User 2" className='w-8'/>
                    <div>
                        <p className='font-bold text-xs'>Wade Warren</p>
                        <p className='text-xs'>Web Developer</p>
                    </div>
                </div>
            </div>
            <div className='p-8 flex flex-col gap-4 bg-white/5 rounded-xl lg:gap-6'>
                <p>"I am really satisfied with it. I'm good to go. It really saves me 
                    time and effort. It's is exactly what our business has been lacking. "</p>
                <div className='flex gap-2 items-center'>
                    <Image src={user3} alt="User 3" className='w-8'/>
                    <div>
                        <p className='font-bold text-xs'>Tauber</p>
                        <p className='text-xs'>Invata la CEITI</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Testimonials

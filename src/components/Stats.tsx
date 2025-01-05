import React from 'react'

const Stats = () => {
  return (
    <section className='px-5 lg:px-32 2xl:px-96'>
        <div className='bg-white/5 rounded-3xl backdrop-blur p-20 flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-col items-center gap-1'>
                <p className='font-bold text-6xl'>16y</p>
                <p className='text-green-600 font-medium'>Experience</p>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <p className='font-bold text-6xl'>250+</p>
              <p className='text-green-600 font-medium'>Partners</p>
                
            </div>
            <div className='flex flex-col items-center gap-1'>
              <p className='font-bold text-6xl'>18+</p>
              <p className='text-green-600 font-medium'>Years</p>
                
            </div>
            <div className='flex flex-col items-center gap-1'>
              <p className='font-bold text-6xl'>10.2k+</p>
              <p className='text-green-600 font-medium'>Clients</p>
                
            </div>
        </div>
    </section>
  )
}

export default Stats

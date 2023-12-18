import Image from 'next/image'
import React from 'react'

export const LireBlog = ({ image }) => {
  return (
    <article className='rounded-[16px] pt-[20rem] px-8 overflow-hidden flex justify-end flex-col isolate relative'>
       <Image src={image} alt='' width={500} height={500} className='w-72 h-72 absolute inset-0 object-cover'/>
        <div className='bg-gradient-to-r from-[#111827]  via-[#111827] to-[#111827] absolute -z-10 inset-0'></div>
       <div>
         <h3 className='text-[#000] font-[600] leading-6 text-[1.125rem] '>Boost your conversion rate</h3>
      </div>
    </article>
  )
}

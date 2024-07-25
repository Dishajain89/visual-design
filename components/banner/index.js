import Image from 'next/image'
import React from 'react'

function Banner(props) {
  return (
    <header className='flex justify-center gap-16 py-11 px-6'>
      <div className='w-1/2'>
        <h6 className='font-bold text-lg'>{props.subTitle} </h6>
        <h2 className='text-6xl font-bold py-4'>{props.title}</h2>
        <p className='pt-4 text-xl'>{props.description} </p>
        <p className='pb-4 text-xl'>{props.learnMore} </p>
        <button className='mt-8 py-4 px-8 bg-slate-950 text-white font-semibold'>Contact</button>
      </div>
      <div className=''>
        <Image src={props.rightImage} width="500" height="200" alt='banner-img' />
      </div>
    </header>
  )
}

export default Banner
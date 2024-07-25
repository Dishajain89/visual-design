"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Footer() {
  const [submit , setSubmit] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
     setSubmit(false)
    },1000)
  });
  return (
    <footer className='pt-10 pb-20 flex'>
     <div className='w-1/2 px-8'>
      <h4 className='font-bold text-xl py-4'>Lets work together</h4>
      <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
      <div className='flex gap-4 mt-8'>
        <Image src="/img/discord.png" width="30" height="40" alt='social' />
        <Image src="/img/facebook.png" width="30" height="40" alt='social' />
        <Image src="/img/dribbble.png" width="30" height="40" alt='social' />
        <Image src="/img/instagram.png" width="30" height="40" alt='social' />
        <Image src="/img/behance.png" width="30" height="40" alt='social' />
      </div>
     </div>

     <div className='w-1/2 px-12 gap-4'>
      <form  className='flex flex-col'>
      <input className='bg-gray-100 text-black p-3 my-3 placeholder:text-black' type='name' placeholder='Name'/>
      <input className='bg-gray-100 text-black p-3 my-3 placeholder:text-black'  type='email' placeholder='Email'/>
      </form>
      <button onClick={()=>setSubmit(true)} className='mt-8 py-4 px-8 bg-slate-950 text-white font-semibold w-32'>Submit</button>
      {submit &&  <div className='border-2 border-black w-48 text-center p-2 mt-2 bg-green-400'>
        <h4 className='font-semibold'>Submit Sucessfuly</h4>
      </div> }
     
     </div>
    </footer>
  )
}

export default Footer
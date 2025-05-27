import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-slate-400 flex justify-center'>
        <div className='w-full h-[60vh] bg-[#151414] text-white flex flex-col p-4'>
            <h1 className='text-4xl mb-4'>Blog with the best</h1>
            <p className='mb-4'>More bloggers and independent creators choose WordPress than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
            <Button />
        </div>
    </div>
  )
}

export default Hero
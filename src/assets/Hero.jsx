import React from 'react'
import Button from './Button'
import MainVideo from '../Media/LetsBlog_MainVideo.mp4'
import Image1 from '../Media/Image1.jpg'
import Accordian from './Accordian'
import Image2 from '../Media/Image2.jpg'

const Hero = () => {
  return (
    <section>
      <div className='w-full bg-white justify-center'>
        <div className='w-full h-3/4 bg-[#151414] text-white flex flex-col p-4'>
            <h1 className='text-4xl mb-4'>Blog with the best</h1>
            <p className='mb-4'>More bloggers and independent creators choose LetsBlog than any other blogging tool. Tap into intuitive, flexible tools that put writers, bloggers, and creators first.</p>
            <Button />
            <video src={MainVideo} typeof='video/mp4' autoPlay loop muted className='rounded-2xl m-5 border-blue-400 border-8'></video>
        </div>
        <div className='w-full flex flex-col p-4'>
          <h1 className='text-3xl mb-4'>Simple, meet flexible.</h1>
          <p className='mb-4'>Whatever you’re publishing. Whoever your audience is. LetsBlog.com makes it simple to get started. And easy to expand your site as your audience grows.</p>
          <Button />
        </div>
        <div className='w-full flex items-center justify-center'>
          <img src={Image1} alt="Photographer" className='rounded-2xl m-5 w-[80%]'/>
        </div>
        <div className="p-4 mb-6">
          <Accordian/>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img src={Image2} alt="Weng Cheung" className='rounded-2xl m-5 w-[80%]'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import Button from './Button'
import MainVideo from '../Media/LetsBlog_MainVideo.mp4'
import Image1 from '../Media/Image1.jpg'
import Accordian from './Accordian'
import Image2 from '../Media/Image2.jpg'
import HPB from './HPB'

const Hero = () => {
  return (
    <section>
      <div className='w-full bg-white justify-center'>
        <div className='w-full h-3/4 bg-[#151414] text-white flex flex-col p-12'>
            <HPB/>
            <video src={MainVideo} typeof='video/mp4' autoPlay loop muted className='rounded-2xl m-5 border-blue-400 border-8'></video>
        </div>
        <div className='w-full flex flex-col p-12'>
          <HPB/>
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
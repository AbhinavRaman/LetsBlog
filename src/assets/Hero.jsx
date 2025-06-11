import MainVideo from '../Media/LetsBlog_MainVideo.mp4'
import Image1 from '../Media/Image1.jpg'
import Accordian from './Accordian'
import Image2 from '../Media/Image2.jpg'
import HPB from './HPB'

const Hero = () => {
  return (
    <section>
      
      <div className='w-full bg-[#151414] justify-center md:flex md:flex-col md:items-center'>
        <div className='w-full md:w-[80%] h-3/4 text-white flex flex-col p-12'>
            <HPB/>
            <video src={MainVideo} typeof='video/mp4' autoPlay loop muted className='rounded-2xl m-5 border-blue-400 border-8'></video>
        </div>
      </div>

      <div className='w-full bg-white justify-center md:flex md:flex-col md:items-center'>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center md:space-x-12 w-full md:px-16 lg:px-24 mt-8 md:mt-16">
          <div className="p-4 md:p-0 md:w-1/2 lg:max-w-lg">
            <Accordian />
          </div>

          <div className="flex justify-center md:w-1/2">
            <img
              src={Image1}
              alt="Photographer"
              className="rounded-2xl w-[80%] md:w-full md:max-w-md mx-auto"
            />
          </div>
        </div>

        <div className='w-full flex items-center justify-center md:w-[80%]'>
          <img src={Image2} alt="Weng Cheung" className='rounded-2xl m-5 w-[80%]'/>
        </div>
      </div>

    </section>
  )
}

export default Hero
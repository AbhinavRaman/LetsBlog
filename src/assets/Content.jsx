import Button from './Button'
import Image3 from '../Media/Image3.jpg'
import Accordian from './Accordian'
import HPB from './HPB'

const Content = () => {
  return (
    <section className='bg-[#101517] text-white'>
        <HPB />
        <div className='w-full flex items-center justify-center'>
          <img src={Image3} alt="Photographer" className='rounded-2xl m-5 w-[80%]'/>
        </div>
        <div className="p-4">
          <Accordian/>
        </div>
    </section>
    
  )
}

export default Content
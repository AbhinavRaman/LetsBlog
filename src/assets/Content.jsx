import Image3 from '../Media/Image3.jpg'
import Accordian from './Accordian'
import HP from './HP'
import Button from './Button'

const Content = () => {
  return (
    <section className='bg-[#101517] text-white p-12'>
      <div className='md:flex md:items-center'>
        <div>
          <HP />
          <Button/>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img src={Image3} alt="Shoes" className='rounded-2xl m-5 w-[80%]'/>
        </div>
      </div>
        <div className="p-4">
          <Accordian/>
        </div>
    </section>
    
  )
}

export default Content
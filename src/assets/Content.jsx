import Button from './Button'
import Image3 from '../Media/Image3.jpg'
import Accordian from './Accordian'

const Content = () => {
  return (
    <section className='bg-[#101517] text-white'>
        <div className='w-full flex flex-col p-4'>
          <h1 className='text-3xl mb-4'>You do you.</h1>
          <p className='mb-4'>You’ve got more on your plate than running a blog. WordPress.com meets you where you are.</p>
          <Button />
        </div>
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
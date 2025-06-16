import HP from './HP'
import IHP from './IHP'
import Image from '../Media/Image4.png'
import Slider from './Slider'
import Image1 from '../Media/Image5.jpg'
import Accordian from './Accordian'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Button from './Button'

const Content2 = () => {
  return (
    <section className='p-12'>
        <div>
            <HP />
            <Button />
            <IHP />
            <IHP />
            <IHP />
            <IHP />
            <img src={Image} alt="Article Image" />
            <Slider />
            <HP/>
            <img src={Image1} alt="ScooterMan Image" />
            <Accordian />
        </div>
    </section>
  )
}

export default Content2
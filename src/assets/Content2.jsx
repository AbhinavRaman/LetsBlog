import HP from './HP'
import IHP from './IHP'
import Image from '../Media/Image4.png'
import Slider from './Slider'
import ScooterManImg from '../Media/Image5.jpg'
import Accordian from './Accordian'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Button from './Button'

import audienceIcon from '../Media/Icon2.png'
import socialIcon from '../Media/Icon3.png'
import paymentIcon from '../Media/Icon4.png'
import { useNavigate } from "react-router-dom";

const faqItems = [
  {
    question: "Blog Beautifully",
    answer: "Customize your blog's look and feel in a couple of clicks with beautifully designed themes. Bring your writing to life with magical drag-and-drop layouts. Or put your fingerprint on every font, color, and element on the page.",
  },
  {
    question: "Edit Easily",
    answer: "From simple and clean to glossy magazine – whatever your publishing style, the intuitive block editor adapts to you. Drag, drop, and easily swap out your menu, punch in a pull quote, or make your post pop with a beautiful gallery. Just like that.",
  },
  {
    question: "Share anything, simply",
    answer: "From video to audio, stories to GIFs, bring it all together—right from where you write. And with plenty of storage for every type of media, your content's secure, easy to reuse anywhere on your blog, and owned by you alone."
  }
];

const Content2 = () => {
  return (
    <section className='p-12 bg-white'>
      <img src={Image} alt="Article Image" />
    </section>
  )
}

export default Content2
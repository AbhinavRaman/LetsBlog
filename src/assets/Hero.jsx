import MainVideo from '../Media/LetsBlog_MainVideo.mp4'
import Image1 from '../Media/Image1.jpg'
import Accordian from './Accordian'
import Image2 from '../Media/Image2.jpg'
import HP from './HP'
import Button from './Button'
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

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section>
      
      <div className='w-full bg-[#151414] justify-center md:flex md:flex-col md:items-center'>
        <div className='w-full md:w-[80%] h-3/4 text-white flex flex-col p-12'>
            <HP textColor='text-black'/>
            <Button 
              bgColor='bg-white'
              textColor='text-black'
              onClick={() => navigate("/editor")}
            />
            <video src={MainVideo} typeof='video/mp4' autoPlay loop muted className='rounded-2xl m-5 border-blue-400 border-8'></video>
        </div>
      </div>

      <div className='w-full bg-white justify-center md:flex md:flex-col md:items-center'>
        <div className='w-full md:w-[80%] h-3/4 flex flex-col p-10'>
          <HP
            title="Simple, meet flexible."
            subtitle="Whatever you're publishing. Whoever your audience is. LetsBlog.com makes it simple to get started. And easy to expand your site as your audience grows."
            textColor="text-black"
          />
          <Button
            bgColor='bg-[#151414]'
            textColor='text-white'
          />
        </div>
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center md:space-x-12 w-full md:px-16 lg:px-24 mt-8 md:mt-16 md:mb-16">
          <div className="p-4 md:p-0 md:w-1/2 lg:max-w-lg">
            <Accordian
              items={faqItems}
              borderColor="border-blue-200"
              hoverBg="hover:bg-blue-50"
              questionClass="font-semibold text-xl text-blue-800"
              answerClass="px-6 pb-4 text-gray-600"
            />
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
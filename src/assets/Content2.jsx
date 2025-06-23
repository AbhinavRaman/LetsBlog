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
    answer: "Customize your blog’s look and feel in a couple of clicks with beautifully designed themes. Bring your writing to life with magical drag-and-drop layouts. Or put your fingerprint on every font, color, and element on the page.",
  },
  {
    question: "Edit Easily",
    answer: "From simple and clean to glossy magazine – whatever your publishing style, the intuitive block editor adapts to you. Drag, drop, and easily swap out your menu, punch in a pull quote, or make your post pop with a beautiful gallery. Just like that.",
  },
  {
    question: "Share anything, simply",
    answer: "From video to audio, stories to GIFs, bring it all together—right from where you write. And with plenty of storage for every type of media, your content’s secure, easy to reuse anywhere on your blog, and owned by you alone."
  }
];

const Content2 = () => {
  const navigate = useNavigate();

  return (
    <section className='p-12'>
        <div>
            <HP 
              title='See and be seen.'
              subtitle="You made it. Now it's time to get it in front of people. With baked in SEO tools, bustling
              community, one-click social links, and a bunch of easy ways to get paid, you're all set."
            />
            <Button
              bgColor='bg-[#151414]'
              textColor='text-white'
              onClick={() => navigate("/editor")}
            />

            <div className='md:flex'>
              <div>
                <IHP/>
                <IHP
                  iconImg={audienceIcon}
                  title='Find your audience'
                  subtitle="Say hello to a huge community of bloggers, creators, and avid readers, every time you publish. LetsBlog.com's built-in Reader means millions of people can easily find, follow, and share your blog."
                />
              </div>

              <div>
                <IHP
                  iconImg={socialIcon}
                  title='Take it to social'
                  subtitle='Put the word out on social media with no extra work. Set up automatic social updates once. Then leave it to WordPress.com to update Facebook, Tumblr, and LinkedIn every time you hit publish.'
                />

                <IHP
                  iconImg={paymentIcon}
                  title='Get paid for what you made'
                  subtitle='Let your audience support your hard work with built-in monetization tools. From shipping out merch to selling downloadable content, taking donations to offering subscriptions and memberships. Everything you need to collect payments is baked right in.'
                />
              </div>
              

            </div>
            <img src={Image} alt="Article Image" />
            <Slider />
            <div className='md:flex md:items-center'>
              <HP 
                title='You are in control.'
                subtitle='With LetsBlog.com, your content belongs to you alone. Count on us to keep
                your site strong, safe, and lightning fast, so you will never lose a site visitor.'
              />
              <img src={ScooterManImg} alt="ScooterMan Image" className='md:w-1/2'/>
            </div>
            <Accordian 
              items={faqItems}
              borderColor="border-blue-200"
              hoverBg="hover:bg-blue-50"
              questionClass="font-semibold text-xl text-blue-800"
              answerClass="px-6 pb-4 text-gray-600"
            />
        </div>
    </section>
  )
}

export default Content2
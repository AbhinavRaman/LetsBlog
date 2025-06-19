import HP from './HP'
import IHP from './IHP'
import Image from '../Media/Image4.png'
import Slider from './Slider'
import Image1 from '../Media/Image5.jpg'
import Accordian from './Accordian'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";  
import Button from './Button'

import audienceIcon from '../Media/Icon2.png'

const Content2 = () => {
  return (
    <section className='p-12'>
        <div>
            <HP 
              title='See and be seen.'
              subtitle="You made it. Now it's time to get it in front of people. With baked in SEO tools, bustling
              community, one-click social links, and a bunch of easy ways to get paid, you're all set."
            />
            <Button />
            <div className='md:flex'>
              <IHP/>
              <IHP
                iconSrc={audienceIcon}
                title='Find your audience'
                subtitle="Say hello to a huge community of bloggers, creators, and avid readers, every time you publish. LetsBlog.com's built-in Reader means millions of people can easily find, follow, and share your blog."
              />
              <IHP
                title='Take it to social'
                subtitle='Put the word out on social media with no extra work. Set up automatic social updates once. Then leave it to WordPress.com to update Facebook, Tumblr, and LinkedIn every time you hit publish.'
              />
              <IHP
                title='Get paid for what you made'
                subtitle='Let your audience support your hard work with built-in monetization tools. From shipping out merch to selling downloadable content, taking donations to offering subscriptions and memberships. Everything you need to collect payments is baked right in.'
              />
            </div>
            <img src={Image} alt="Article Image" />
            <Slider />
            <div className='md:flex md:items-center'>
              <HP 
                title='You are in control.'
                subtitle='With LetsBlog.com, your content belongs to you alone. Count on us to keep
                your site strong, safe, and lightning fast, so you will never lose a site visitor.'
              />
              <img src={Image1} alt="ScooterMan Image" className='md:w-1/2'/>
            </div>
            <Accordian />
        </div>
    </section>
  )
}

export default Content2
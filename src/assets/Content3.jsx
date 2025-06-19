import IHP from './IHP'

const Content3 = () => {
  return (
    <section className="w-full flex flex-col p-12">
        <div>
            <div className="w-full h-3/4 bg-transparent flex flex-col mb-4">
                <h1 className="text-4xl mb-4">Everything you need in one place.</h1>
                <p className="mb-4">Your LetsBlog.com comes with all the most popular blogging tools -- and the some.</p>
            </div>
            <div>
                <h1 className="text-3xl mb-4">Stats & Insights</h1>
                <div className='md:flex'>
                    <IHP
                        title='Jetpack Stats'
                        subtitle='Monitor your site traffic and engagement from the moment you hit publish.'
                    />
                    <IHP
                        title='Google Analytics'
                        subtitle='Access in-depth data on how and why people come to your site without writing a single line of code.'
                    />
                </div>
            </div>
            <div>
                <h1 className="text-3xl mb-4">Design & Editing Tools</h1>
                <div className='md:flex'>
                    <IHP
                        title='Beautiful Themes'
                        subtitle='Kickstart your site by selecting from hundreds of pre-made, professionally-designed, customizable templates.'
                    />
                    <IHP
                        title='Block Editor'
                        subtitle='Use intuitive drag-and-drop tools to easily arrange, rearrange, and organize your content and media.'
                    />
                    <IHP
                        title='Advanced Design Tools'
                        subtitle='Customize your blog’s design with extended color schemes, typography, borders, and control over website CSS.'
                    />
                    <IHP
                        title='Pre-Built Block Patterns'
                        subtitle='Create great-looking layouts simply by inserting elegant pre-built block patterns into your pages and posts.'
                    />
                    <IHP
                        title='Upload Any Type of Media'
                        subtitle='Create designer-worthy photo galleries, embed audio, video, documents, and more—with storage space to spare.'
                    />
                </div>
            </div>
            <div>
                <h1 className="text-3xl mb-4">Marketing</h1>
                <div className='md:flex'>
                    <IHP
                        title='SEO Tools'
                        subtitle='Get found faster with powerful built-in SEO tools, and access to premium plugins including Yoast and Rank Math.'
                    />
                    <IHP
                        title='Social Media Tools'
                        subtitle='Automatically send new posts to Facebook, Tumblr, and LinkedIn and create shortlinks, social icons, and open graph tags.'
                    />
                    <IHP
                        title='Form Block'
                        subtitle='Easily insert a contact, appointment, event registration, or feedback form to your site.'
                    />
                    <IHP
                        title='LetsBlog.com Newletter'
                        subtitle='Automatically send your new posts out as an email newsletter.'
                    />
                    <IHP
                        title='Reader'
                        subtitle='Connect with other likeminded bloggers—who might just be your next biggest fans, through our community hub.'
                    />
                    <IHP
                        title='Custom Domain Name'
                        subtitle='Get a personalized online address that’s easy to remember and easy to share—enjoy your first year free when you choose a paid annual plan.'
                    />
                </div>
                
            </div>
            <div>
                <h1 className="text-3xl mb-4">Monetization Tools</h1>
                <div className='md:flex'>
                    <IHP
                        title='Collect Payments'
                        subtitle='Accept payments for just about anything—from goods and services to memberships and donations.'
                    />
                    <IHP
                        title='Ads'
                        subtitle='Earn ad revenue by connecting your site with the biggest ad publishers, including Google AdSense, and more.'
                    />
                    <IHP
                        title='Paid Content Block'
                        subtitle='Create additional, premium content exclusive to your paying subscribers.'
                    />
                    <IHP
                        title='Paid Newsletters'
                        subtitle='Email premium content to paying subscribers.'
                    />
                </div>
            </div>
            <div>
                <h1 className="text-3xl mb-4">Site Management</h1>
                <div className='md:flex'>
                    <IHP
                        title='Post by Email'
                        subtitle='Publish blog posts on-the-go with the quick send of an email.'
                    />
                    <IHP
                        title='Post Scheduling'
                        subtitle='Schedule your post in advance'
                    />
                    <IHP
                        title='Spam Protection with Akismet'
                        subtitle='Prevent unwanted comments to ensure that your site remains professional and trustworthy.'
                    />
                    <IHP
                        title='Jetpack Backups and Restores'
                        subtitle='Easily restore or download a backup of your site from a specific moment in time.'
                    />
                    <IHP
                        title='Related Posts'
                        subtitle='Provide automated content recommendations to visitors based on what they’ve already read.'
                    />
                    <IHP
                        title='Jetpack Search'
                        subtitle='Deliver high quality, relevant search results to your most engaged visitors.'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Content3
import HP from "./HP"
import Button from "./Button"

const FooterBanner = () => {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[90%] rounded-3xl bg-blue-500 text-white p-4 flex flex-col items-center justify-center">
        <HP
          title="Join the millions of creators publishing with LetsBlog.com"
          subtitle="Build your blog—and your audience—with the same tool that powers almost half the web. Built on lightning-fast, seriously secure, hassle-free hosting. That’s LetsBlog.com."
          textColor="text-black"
          className="bg-transparent p-0 rounded-none shadow-none"
        />
        <Button className="mt-4" bgColor="bg-white" textColor="text-black" />
      </div>
    </section>
    
  )
}

export default FooterBanner
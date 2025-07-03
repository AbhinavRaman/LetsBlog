import HP from "./HP"
import Button from "./Button"

const FooterBanner = () => {
  return (
    <section>
      <div className="w-full bg-blue-500 text-white p-4">
        <HP
          title="Join the millions of creators publishing with LetsBlog.com"
          subtitle="Build your blog—and your audience—with the same tool that powers almost half the web. Built on lightning-fast, seriously secure, hassle-free hosting. That’s LetsBlog.com."
          textColor="text-black"
        />
        <Button />
      </div>
    </section>
  )
}

export default FooterBanner
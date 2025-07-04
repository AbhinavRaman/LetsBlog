import HP from "./HP"
import Button from "./Button"
import { useNavigate } from "react-router-dom";

const FooterBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full flex items-center justify-center">
      <div className="w-[90%] rounded-3xl bg-blue-500 text-white p-4 flex flex-col items-center justify-center">
        <HP
          title="Join the millions of creators publishing with LetsBlog.com"
          subtitle="Build your blog—and your audience—with the same tool that powers almost half the web. Built on lightning-fast, seriously secure, hassle-free hosting. That’s LetsBlog.com."
          textColor="text-black"
          className="bg-transparent p-0 rounded-none shadow-none"
        />
        <Button
          bgColor='bg-white'
          textColor='text-black'
          onClick={() => navigate("/editor")}
        />
      </div>
    </section>
    
  )
}

export default FooterBanner
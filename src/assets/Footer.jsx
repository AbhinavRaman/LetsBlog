import Accordian from "./Accordian"


const Footer = () => {
  return (
    <section>
        <div className=" bg-black text-white p-10">
            <h1 className="text-4xl">LetsBlog.com</h1>
            <Accordian />
            <select name="language" id="language" className="p-4 mt-4 rounded-2xl bg-transparent">
                <option value="hindi" className="text-black">Hindi</option>
                <option value="english" className="text-black">English</option>
                <option value="spanish" className="text-black">Spanish</option>
                <option value="japanese" className="text-black">Japanese</option>
            </select>
        </div>
    </section>
  )
}

export default Footer
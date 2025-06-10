import logo from '../Media/LetsBlogNB.png'
import Dropdown from './Dropdown'

const NavBar = () => {
  return (
    <div className="w-full h-20 bg-[#151414] text-white flex justify-around items-center">
      <div className='bg-[#151414] text-white flex items-center'>
        <img src={logo} alt="logo" className='h-20'/>
        <h1 className="logo text-2xl text-left font-mono font-semibold">LetsBlog.com</h1>
      </div>
      <div className='flex w-1/3 gap-3'>
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <button className='p-2 border rounded'>Get Started</button>
      <button className="text-2xl p-2 font-mono md:hidden">🟰</button>
    </div>
  )
}

export default NavBar
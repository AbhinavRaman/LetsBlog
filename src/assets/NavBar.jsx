import { useState } from 'react';
import logo from '../Media/LetsBlogNB.png';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#151414] text-white font-sans shadow-md">
      <div className="flex justify-between items-center h-20 px-6 md:px-16">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 md:h-16 rounded-xl shadow-md bg-white p-1" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">LetssBlog.com</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <button 
            className="p-2 px-6 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition cursor-pointer shadow-md"
            onClick={() => navigate('/login')}
          >Get Started</button>
          <button
            className="p-2 px-6 rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-100 border border-blue-700 transition cursor-pointer shadow-md"
            onClick={() => navigate('/register')}
          >Create Account</button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="text-3xl md:hidden hover:text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden bg-[#151414]">
          <button 
            className="p-2 border rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition shadow-md"
            onClick={() => navigate('/login')}
          >Get Started</button>
          <button
            className="p-2 border rounded-full bg-white text-blue-700 font-semibold hover:bg-blue-100 border-blue-700 transition shadow-md"
            onClick={() => navigate('/register')}
          >Create Account</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

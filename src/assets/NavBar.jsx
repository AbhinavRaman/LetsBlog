import { useState } from 'react';
import logo from '../Media/LetsBlogNB.png';
<<<<<<< HEAD:src/assets/NavBar.jsx
import Dropdown from './Dropdown';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> b574a2a (removed all the unimportant and unused components and done better styling):src/components/NavBar.jsx

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#151414] text-white font-sans shadow-md">
      <div className="flex justify-between items-center h-20 px-6 md:px-16">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 md:h-16 rounded-xl shadow-md bg-white p-1" />
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">LetsBlog.com</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
<<<<<<< HEAD:src/assets/NavBar.jsx
          <Dropdown 
            placeholder="Products"
            options={[
              { label: "LetsBlog Hosting", value: "hosting" },
              { label: "LetsBlog for Agencies", value: "agencies" },
              { label: "Become an Affiliate", value: "affiliate" },
              { label: "Domain Names", value: "domain-names" },
              { label: "AI Website Builder", value: "ai" },
              { label: "Create a Blog", value: "create-blog" },
              { label: "Newsletter", value: "newsletter" },
              { label: "Professional Email", value: "email" },
              { label: "Website Design Services", value: "design" },
              { label: "Commerce", value: "commerce" },
            ]}
          />
          <Dropdown 
            placeholder='Features'
            options={[
              {label: "Overview", value: "overview"},
              {label: "LetsBlog Themes", value: "themes"},
              {label: "LetsBlog Plugins", value: "plugins"},
              {label: "LetsBlog Patterns", value: "patterns"},
            ]}
          />
          <Dropdown
            placeholder='Resources'
            options={[
              {label: "LetsBlog.com Support", value: "support"},
              {label: "LetsBlog News", value: "news"},
              {label: "Website Building Tips", value: "tips"},
              {label: "Business Name Generator", value: "business name genrator"},
              {label: "Blog Search", value: "search"}
            ]}
          />
          <button className="p-2 rounded hover:bg-white hover:text-black transition cursor-pointer">Get Started</button>
=======
          <button 
            className="p-2 px-6 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition cursor-pointer shadow-md"
            onClick={() => navigate('/login')}
          >Get Started</button>
>>>>>>> b574a2a (removed all the unimportant and unused components and done better styling):src/components/NavBar.jsx
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
<<<<<<< HEAD:src/assets/NavBar.jsx
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          <Dropdown 
            placeholder="Products"
            options={[
              { label: "LetsBlog Hosting", value: "hosting" },
              { label: "LetsBlog for Agencies", value: "agencies" },
              { label: "Become an Affiliate", value: "affiliate" },
              { label: "Domain Names", value: "domain-names" },
              { label: "AI Website Builder", value: "ai" },
              { label: "Create a Blog", value: "create-blog" },
              { label: "Newsletter", value: "newsletter" },
              { label: "Professional Email", value: "email" },
              { label: "Website Design Services", value: "design" },
              { label: "Commerce", value: "commerce" },
            ]}
          />
          <Dropdown 
            placeholder='Features'
            options={[
              {label: "Overview", value: "overview"},
              {label: "LetsBlog Themes", value: "themes"},
              {label: "LetsBlog Plugins", value: "plugins"},
              {label: "LetsBlog Patterns", value: "patterns"},
            ]}
          />
          <Dropdown
            placeholder='Resources'
            options={[
              {label: "LetsBlog.com Support", value: "support"},
              {label: "LetsBlog News", value: "news"},
              {label: "Website Building Tips", value: "tips"},
              {label: "Business Name Generator", value: "business name genrator"},
              {label: "Blog Search", value: "search"}
            ]}
          />
          <button className="p-2 border rounded hover:bg-white hover:text-black transition">Get Started</button>
=======
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden bg-[#151414]">
          <button 
            className="p-2 border rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition shadow-md"
            onClick={() => navigate('/login')}
          >Get Started</button>
>>>>>>> b574a2a (removed all the unimportant and unused components and done better styling):src/components/NavBar.jsx
        </div>
      )}
    </nav>
  );
};

export default NavBar;

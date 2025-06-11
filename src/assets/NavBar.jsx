import { useState } from 'react';
import logo from '../Media/LetsBlogNB.png';
import Dropdown from './Dropdown';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#151414] text-white">
      <div className="flex justify-between items-center h-20 px-4 md:px-10">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-12 md:h-16" />
          <h1 className="text-xl md:text-2xl font-mono font-semibold">LetsBlog.com</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
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
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-4 pb-4 md:hidden">
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <button className="p-2 border rounded hover:bg-white hover:text-black transition">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

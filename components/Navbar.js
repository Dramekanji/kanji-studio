import { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleShadow = () => {};
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center p-8 bg-black text-white fixed w-full z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-lg uppercase tracking-widest focus:outline-none"
        >
          Menu
        </button>
        <span className="text-sm">Kanji Studio © 2024</span>
        <Link
          className="text-lg uppercase tracking-widest focus:outline-none"
          href="#contact"
        >
          Contact
        </Link>
      </div>

      <div
        className={`fixed top-20 left-0 h-full bg-white text-black z-40 overflow-auto transform ${
          menuOpen ? "translate-x-0 w-1/2" : "-translate-x-full w-1/2"
        } transition-transform duration-300 ease-in-out`}
      >
        <button onClick={() => setMenuOpen(false)} className="p-4 pl-8">
          <MdClose size={45} />
        </button>
        <div className="flex flex-col">
          <Link className="p-4 pl-10 hover:bg-gray-800" href="#home">
            Home
          </Link>
          <Link className="p-4 pl-10 hover:bg-gray-800" href="#about">
            About
          </Link>
          <Link className="p-4 pl-10 hover:bg-gray-800" href="#services">
            Services
          </Link>
          <Link className="p-4 pl-10 hover:bg-gray-800" href="#works">
            Works
          </Link>
          <Link className="p-4 pl-10 mt-auto hover:bg-gray-800" href="#contact">
            Contact
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30 duration-500 ease-in"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;

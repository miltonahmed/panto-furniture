import { useEffect, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import { NavMenu } from "./NavMenu";

const Header = () => {
  const [isMenuOpen ,setMenuIsOpen] = useState('false')
  const [isScrolled ,setScrolled] = useState('false')
  const toggleMenu =()=>{
    setMenuIsOpen(prevState => !prevState)
  }

//  whn scroll apply bg color to navbar
 useEffect(() =>{
  const handleScroll =()=>{
    if(window.scrollY > 50 ){
      setScrolled(true)
    }
    else{
      setScrolled(false)
    }
  }
  window.addEventListener('scroll', handleScroll);
  return()=>{
    window.addEventListener('scroll', handleScroll);
  }
 },[])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow-md' : "bg-transparent text-white"}`}
    >
      <nav className="max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* logo  */}
        <Link
          to="/"
          className=" text-2xl md:text-3xl font-extrabold capitalize"
        >
          Panto
        </Link>
        {/* Hamburger menu for mobile */}
        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer">
          {isMenuOpen ? null : <FaBarsStaggered />}
        </div>
        {/* Desktop Menu link  */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        {/* Responsive mobile Menu  */}
        <div
          className={`fixed top-0 left-0 w-full md:hidden h-screen bg-black opacity-80 flex flex-col items-center justify-center space-y-7 text-white transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="cursor-pointer" onClick={toggleMenu}>
            <RxCross2 className="text-2xl" />
          </div>
          <NavMenu toggleMenu={toggleMenu} />
        </div>

        {/*Shopping cart  */}
        <div className="hidden md:block cursor-pointer relative">
          <FaShoppingBag className="text-2xl" />
          <sup className="absolute top-1 -right-3 bg-secondary w-5 h-5 text-white text-sm rounded-full flex items-center justify-center">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
}

export default Header
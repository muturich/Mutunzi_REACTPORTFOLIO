import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Myphoto from '../assets/myphoto.jpeg'


const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b2957] text-gray-300'>
      <div>
<img src={Myphoto} alt="my photoImage" style={{width: '80px'}}/>
      </div>
      {/*menu bar*/}
            <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
      
        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars />: <FaTimes />}
        </div>
        {/*Mobile Menu*/}
        <ul className={!nav ? 'hidden':'absolute top-0 left w-full h-screen bg-[#0b2957] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
        </ul>
        {/*Social icon*/}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar

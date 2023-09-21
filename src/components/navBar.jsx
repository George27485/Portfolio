import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0c1f3d] text-gray-300 border-2  border-black shandow-5xl z-10'>
        <div>
            <img src={Logo} alt='logo img' style={{width: '75px'}}/>
        </div>
        {/*menu*/} 
            <ul className='hidden md:flex text-xl '>
                <li className='hover:text-purple-600'><Link to='home' smooth={true} duration={500}> Home</Link></li>
                <li className='hover:text-purple-600'><Link to='about' smooth={true} duration={500}>About</Link></li>
                <li className='hover:text-purple-600'><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='hover:text-purple-600'><Link to='projects' smooth={true} duration={500}>Projects</Link> </li>
                <li className='hover:text-purple-600'><Link to='contact' smooth={true} duration={500}>Contact</Link><Link to='' smooth={true} duration={500}></Link> </li>
            </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : ' fixed top-0 left-0 w-full h-screen bg-[#0c1f3d] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl hover:text-purple-600'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link> </li>
                <li className='py-6 text-4xl hover:text-purple-600'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link> </li>
                <li className='py-6 text-4xl hover:text-purple-600'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link> </li>
                <li className='py-6 text-4xl hover:text-purple-600'><Link onClick={handleClick} to='projects' smooth={true} duration={500}>Projects</Link> </li>
                <li className='py-6 text-4xl hover:text-purple-600'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link> </li>
            </ul>
        {/*social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[0px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href='https://www.linkedin.com/in/george-m-alvarez/'>
                       Linkedin<FaLinkedin size={30}/>
                    
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[0px] duration-300 bg-green-500'>
                    <a to='contact' className='flex justify-between items-center w-full text-gray-300 '>
                        Mail<HiOutlineMail size={30}/>
                    
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[0px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href='/'>
                        Resume<BsFillPersonLinesFill size={30}/>
                    
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-115px] hover:ml-[0px] duration-300 bg-black'>
                    <a className='flex justify-between items-center w-full text-gray-300 ' href='https://github.com/George27485'>
                        Github<FaGithub size={30}/>
                    
                    </a>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default NavBar
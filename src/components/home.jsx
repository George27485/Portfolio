import React from 'react'
import{HiArrowNarrowRight} from 'react-icons/hi'
import BackGround from '../assets/BG.png'
import { Link } from 'react-scroll';
const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${BackGround})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div name='home' style={backgroundImageStyle} className='w-fill h-screen  '>


        {/*container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-300'>Hi, I'm </p>
        <h1 className='text-purple-600 text-4xl sm:text-5xl fon-bold '>George</h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-gray-300'>I'm a fullstack developer</h2>
        <p className='text-gray-300 py-4 max-w-[700px]'>I'm a fullstack developer specializing in building interactive websites with seamless user experiences</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600'><Link to='about' smooth={true} duration={500}>View Work</Link> 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span>
            
            
            </button>
        </div>
        </div>

    </div>
  )
}

export default Home
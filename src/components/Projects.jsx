import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';
import FubarGaming from '../assets/fubarGaming.png';
import Catacombs from '../assets/Catacombs.png';
import QRCode from '../assets/QRCode.png';
import OUAT from '../assets/ouat1.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-screen bg-[#0c1f3d] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center  w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-purple-600  text-gray-300'>Projects</p>
          
        </div>
        <div className='max-w-xl mx-auto'>
          <Carousel infiniteLoop autoPlay interval={5000} showThumbs={false}>
            <div className='shadow-md shadow-[#040c16]'>
              <img className='w-20 mx-auto' src={FubarGaming} alt='project 1' />
              <h3 className='my-4'>Fubar Gaming</h3>
              <p> Fubar Gaming is a user-friendly game review website that empowers gamers to create and share their own reviews while providing ratings for their favorite games.</p>
            </div>
            <div className='shadow-md shadow-[#040c16]'>
              <img className='w-20 mx-auto' src={Catacombs} alt='project 2' />
              <h3 className='my-4'>Zelda Remake</h3>
              <p> Zelda inspired remake using Kaboomjs game library.</p>
            </div>
            <div className='shadow-md shadow-[#040c16]'>
              <img className='w-20 mx-auto' src={QRCode} alt='project 3' />
              <h3 className='my-4'>QR code Generator</h3>
              <p> TBD is a user-friendly game review website that empowers gamers to create and share their own reviews while providing ratings for their favorite games.</p>
            </div>
            <div className='shadow-md shadow-[#040c16]'>
              <img className='w-20 mx-auto' src={OUAT} alt='project 4' />
              <h3 className='my-4'>Once Upon A Time</h3>
              <p> TBD is a user-friendly game review website that empowers gamers to create and share their own reviews while providing ratings for their favorite games.</p>
            </div>

          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;

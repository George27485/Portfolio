import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import FubarGaming from '../assets/fubarGaming.png';
import Catacombs from '../assets/Catacombs.png';
import QRCode from '../assets/QRCode.png';
import OUAT from '../assets/ouat1.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full bg-[#0c1f3d] text-gray-300 p-4'>
      <div className='max-w-xl mx-auto'>
        <p className='text-4xl font-bold inline border-b-4 border-purple-600 text-gray-300'>Projects</p>
        <Carousel infiniteLoop autoPlay interval={5000} showThumbs={false} className='shadow-md shadow-[#040c16]'>
          <div>
            <img className='w-full' src={FubarGaming} alt='project 1' />
            <h3 className='my-4'>Fubar Gaming</h3>
            <p>Fubar Gaming is a user-friendly game review website that empowers gamers to create and share their own reviews while providing ratings for their favorite games.</p>
          </div>
          <div>
            <img className='w-full' src={Catacombs} alt='project 2' />
            <h3 className='my-4'>Zelda Remake</h3>
            <p>Zelda inspired remake using Kaboomjs game library.</p>
          </div>
          <div>
            <img className='w-full' src={QRCode} alt='project 3' />
            <h3 className='my-4'>QR code Generator</h3>
            <p>Simple QR code generator.</p>
          </div>
          <div>
            <img className='w-full' src={OUAT} alt='project 4' />
            <h3 className='my-4'>Once Upon A Time</h3>
            <p>Top-down 2D role-playing game set in a vibrant fantasy world, where players embark on quests, battle foes, and explore an intricately designed landscape. (work in progress)</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;

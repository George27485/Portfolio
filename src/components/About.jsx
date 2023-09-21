import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0c1f3d] text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='  pb-8 pl-4'>
                    <p className='  justify-center text-4xl font-bold inline border-b-4 border-purple-600 '>About</p>
                
            </div>
            <div></div>
            </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                    <p> Hey, I'm George, nice to meet you. Please look around.</p>
                    </div>
                    <div>
                    <p>Hello! I'm a passionate full-stack developer with a relentless curiosity for crafting innovative digital solutions. My journey in the world of coding began with a fascination for turning lines of code into functional and user-friendly applications. With a solid foundation in both front-end and back-end technologies, I'm equipped to create seamless and dynamic web experiences. I thrive on challenges and am constantly exploring new technologies to stay at the forefront of web development.Let's collaborate and turn your ideas into reality!</p>  
                    </div>
                    </div>
                </div>
            </div>

        

    
    
  )
}

export default About
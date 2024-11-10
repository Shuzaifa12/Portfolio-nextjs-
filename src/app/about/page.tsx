import React from 'react';
import Image from 'next/image';
import image1 from './image1.png';
import Link from 'next/link';

const About = () => {
  return (
    <>
    <div className='py-3 px-12'>
      <div className='block sm:flex sm:justify-between my-8'>
        <div className='flex justify-center bg-[#1d1d1d53] rounded-full'>
            <Image src={image1} alt='loading' height={200} width={400}></Image>
        </div>
        <div className='text-center my-6 sm:w-[60%] sm:p-2 '>
        <p className='sm:text-justify lg:text-2xl'>Enthusiastic and detail-oriented developer with a knowledge of Web Development technologies including HTML, CSS, Typescript, Next.js, and tailwind CSS. I am eager to apply my skills in creating a user-friendly interfaces and engaging web applications. I have strong problem-solving abilities and a passion for learning new technologies. Moreover, I have experienced in collaborating on team projects and committed to continuous improvements through hand-on experience and feedback. Seeking an entry-level position to contribute to innovative projects and grow as part of dynamic development team.</p>
        </div>
      </div>

    </div>
    </>
  )
}

export default About;
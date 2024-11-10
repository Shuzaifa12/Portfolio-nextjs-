import React from 'react';
import Image from 'next/image';
import Image_slider from '../socialicons/pic1.png';
import Fb_clone from '../socialicons/pic2.png';
import Dynamic_resume from '../socialicons/pic3.png';
import Practice_web from '../socialicons/pic4.png';
import Vercel_clone from '../socialicons/pic5.png';
import Website from '../socialicons/pic6.png';

const Projects = () => {
  return (
    <>
    <div className='mt-8 px-12 py-3 justify-center sm:justify-between sm:flex sm:gap-3'>
        <div className='bg-[#1d1d1d53] shadow-md shadow-gray-300 rounded-lg hover:scale-105 duration-200 transition-all w-fit p-3 my-3 mx-auto'>
            <Image src={Image_slider} alt='Image_slider' width={350} height={300} className='h-60'></Image>
            <h1 className='text-gray-300 font-bold text-center text-2xl mt-3 bg-[#FA6E00] rounded-md'>Image Slider</h1>
        </div>
        <div className='bg-[#1d1d1d53] shadow-md shadow-gray-300 rounded-lg hover:scale-105 duration-200 transition-all w-fit p-3 my-3 mx-auto'>
            <Image src={Fb_clone} alt='Image_slider' width={350} height={300} className='h-60'></Image>
            <h1 className='text-gray-300 font-bold text-center text-2xl mt-3 bg-[#FA6E00] rounded-md'>Facebook Clone Page</h1>
        </div>
        <div className='bg-[#1d1d1d53] shadow-md shadow-gray-300 rounded-lg hover:scale-105 duration-200 transition-all w-fit p-3 my-3 mx-auto'>
            <Image src={Dynamic_resume} alt='Image_slider' width={350} height={300} className='h-60'></Image>
            <h1 className='text-gray-300 font-bold text-center text-2xl mt-3 bg-[#FA6E00] rounded-md'>Dynamic Resume</h1>
        </div>
    </div>

    <div className='px-12 py-3 justify-center sm:justify-between sm:flex sm:gap-3'>
        <div className='bg-[#1d1d1d53] shadow-md shadow-gray-300 rounded-lg hover:scale-105 duration-200 transition-all w-fit p-3 my-3 mx-auto'>
            <Image src={Practice_web} alt='Image_slider' width={350} height={300} className='h-60'></Image>
            <h1 className='text-gray-300 font-bold text-center text-2xl mt-3 bg-[#FA6E00] rounded-md'>Practice Webiste 1</h1>
        </div>
        <div className='bg-[#1d1d1d53] shadow-md shadow-gray-300 rounded-lg hover:scale-105 duration-200 transition-all w-fit p-3 my-3 mx-auto'>
            <Image src={Vercel_clone} alt='Image_slider' width={350} height={300} className='h-60'></Image>
            <h1 className='text-gray-300 font-bold text-center text-2xl mt-3 bg-[#FA6E00] rounded-md'>Vercel Clone Page</h1>
        </div>
        <div className='bg-[#1d1d1d53] shadow-md shadow-gray-300 rounded-lg hover:scale-105 duration-200 transition-all w-fit p-3 my-3 mx-auto'>
            <Image src={Website} alt='Image_slider' width={350} height={300} className='h-60'></Image>
            <h1 className='text-gray-300 font-bold text-center text-2xl mt-3 bg-[#FA6E00] rounded-md'>Practice Website 2</h1>
        </div>
    </div>
    </>
  )
}

export default Projects
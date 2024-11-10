"use client"
import React from 'react';
import {Circle} from 'rc-progress';

const Skills = () => {
  return (
    <>
    <div className='py-3 px-12 my-8 block w-fit mx-auto md:w-full md:flex md:justify-between'>
        <div className='w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={85}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className="w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            85%
          </div>
         <h1 className='my-2 text-center text-gray-300 font-bold p-2 text-lg'>HTML 5</h1>
        </div>


        <div className='w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={85}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className="w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            85%
          </div>
         <h1 className=' my-2 text-center text-gray-300 font-bold p-2 text-lg'>CSS 3</h1>
        </div>


        <div className='w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={75}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className=" w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            75%
          </div>
         <h1 className='my-2 text-center text-gray-300 font-bold p-2 text-lg'>Typescript</h1>
        </div>


        <div className=' w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={80}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className=" w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            80%
          </div>
         <h1 className='my-2 text-center text-gray-300 font-bold p-2 text-lg'>Tailwind CSS</h1>
        </div>
    </div>

    <div className='py-3 px-12 my-8 block w-fit mx-auto md:w-full md:flex md:justify-around'>
        <div className='w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={30}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className=" w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            30%
          </div>
         <h1 className=' my-2 text-center text-gray-300 font-bold p-2 text-lg'>Next js</h1>
        </div>


        <div className='w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={90}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className=" w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            90%
          </div>
         <h1 className='my-2 text-center text-gray-300 font-bold p-2 text-lg'>Responsive Designs</h1>
        </div>

        <div className=' w-48 relative my-4'>
          {/* Circle with progress */}
          <Circle
            percent={68}
            strokeWidth={6}
            trailWidth={6}
            trailColor="rgb(209,213,219)"
            strokeColor="#FA6E00"
            className='w-28 h-28 mx-auto my-4'
          />
          {/* Label inside the circle */}
          <div className="w-fit h-fit absolute inset-0 flex mx-auto mt-12 md:mt-14 text-lg font-bold text-gray-300">
            68%
          </div>
         <h1 className=' my-2 text-center text-gray-300 font-bold p-2 text-lg'>BootStrap</h1>
        </div>
    </div>
    </>
  )
}

export default Skills
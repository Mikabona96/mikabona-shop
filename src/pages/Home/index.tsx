import React from 'react'
import { Link } from "react-router-dom";
import welcomeIMG from '../../assets/welcome.png';
export const Home = () => {
  return (
    <div className="text-3xl font-bold underline h-screen">
      <div className='flex justify-center h-[100%]'>
        <div className='mt-20 relative'>
          <img
            src={welcomeIMG}
            alt="welcome"
            className='-z-1'
            width={1200}
            height={650}
          />
          <div className='absolute top-[30%] right-[50%] translate-x-[50%] text-white text-center'>
            <h1 className='text-5xl'>This is Mika Shop</h1>
            <p className='text-2xl mt-3'>Mika shop has 100+ brands</p>
          </div>
          <div className='absolute top-[50%] right-[50%] translate-x-[50%] text-white flex justify-between w-[40%]'>
            <div className='text-sm px-[2rem] py-[0.2rem] text-center leading-10 bg-white text-black ease-in duration-300 rounded-sm hover:cursor-pointer'>
              <Link to={`/women`}>
                SHOP WOMEN
              </Link>
            </div>
            <div className='text-sm px-[2rem] py-[0.2rem] text-center leading-10 bg-white text-black ease-in duration-300 rounded-sm hover:cursor-pointer'>
              <Link to={`/men`}>
                SHOP MEN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom';
import sneakersIMG from '../../assets/sneakers.jpg';
import hatsIMG from '../../assets/hats.jpg';
import jeansIMG from '../../assets/jeans.jpg';
import tshirtsIMG from '../../assets/tshirts.jpg';
import bagsIMG from '../../assets/bags.jpg';
import { useLocation } from 'react-router-dom';

export const Shop = () => {
    const location = useLocation();
    
  return (
    <div className=''>
        <div className='grid grid-cols-3 overflow-hidden'>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img
                        src={sneakersIMG}
                        alt="welcome"
                        className='-z-1 transition'
                    />
                </div>
                <div className='absolute right-[50%] translate-y-[-50%] translate-x-[50%] top-[50%] border-4 text-black bg-white px-6 py-3 rounded-sm text-3xl font-black'>
                    <Link to={`${location.pathname}/sneakers`}>
                        SHOP SNEAKERS
                    </Link>
                </div>
            </div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img
                        src={hatsIMG}
                        alt="welcome"
                        className='-z-1 transition'
                    />
                </div>
                <div className='absolute right-[50%] translate-y-[-50%] translate-x-[50%] top-[50%] border-4 text-black bg-white px-6 py-3 rounded-sm text-3xl font-black'>
                    <Link to={`${location.pathname}/hats`}>
                        SHOP HATS
                    </Link>
                </div>
            </div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img
                        src={jeansIMG}
                        alt="welcome"
                        className='-z-1 transition'
                    />
                </div>
                <div className='absolute right-[50%] translate-y-[-50%] translate-x-[50%] top-[50%] border-4 text-black bg-white px-6 py-3 rounded-sm text-3xl font-black'>
                    <Link to={`${location.pathname}/jeans`}>
                        SHOP JEANS
                    </Link>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 overflow-hidden'>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img
                        src={tshirtsIMG}
                        alt="welcome"
                        className='-z-1 transition'
                    />
                </div>
                <div className='absolute right-[50%] translate-y-[-50%] translate-x-[50%] top-[50%] border-4 text-black bg-white px-6 py-3 rounded-sm text-3xl font-black'>
                    <Link to={`${location.pathname}/tshirts`}>
                        SHOP T-SHIRTS
                    </Link>
                </div>
            </div>
            <div className='relative'>
                <div className='overflow-hidden'>
                    <img
                        src={bagsIMG}
                        alt="welcome"
                        className='-z-1 transition'
                    />
                </div>
                <div className='absolute right-[50%] translate-y-[-50%] translate-x-[50%] top-[50%] border-4 text-black bg-white px-6 py-3 rounded-sm text-3xl font-black'>
                    <Link to={`${location.pathname}/bags`}>
                        SHOP BAGS
                    </Link>
                </div>
            </div>
        </div>
      </div>
  )
}

import React, { useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useFetchHats } from '../../hooks/useFetchHats';
import { Sneaker as SneakerType } from '../../types';

export const Hat = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[3];
    const [hat, setHat] = useState<SneakerType | null>(null)
    
    const {hats} = useFetchHats();

    useLayoutEffect(() => {
        hats.filter((hat: SneakerType) => {
            if (hat.id === path) {
                setHat(hat)
                return hat
            }
            return false
        })
    },[path, hats])

  return (
    <div className='mt-6'>
        <div className='flex'>
            <div className='flex flex-wrap w-[50%]'>
                {hat?.images.map((img, i) => {
                    return <img key={i} width="400" src={img} alt={hat.brand} />
                })}
            </div>
            <div className='flex flex-col w-[50%] pr-[20%]'>
                <div className='justify-end self-end'>
                    <div className='justify-end self-end'>
                        <h1 className='text-6xl'>{hat?.brand}</h1>
                        <h2 className='text-3xl mt-6'>{hat?.model}</h2>
                    </div>
                    <div className='mt-8 self-end'>
                        <div>
                            Colors:
                            {
                                hat?.colors.map((color, i) => {
                                    return <span key={i} className="border-2 px-2 py-1 mx-1">{color}</span>
                                })
                            }
                        </div>

                        <div className='mt-6 flex'>
                            Sizes:
                            {
                                hat?.sizes.map((size, i) => {
                                    return <span key={i} className="border-2 px-2 py-1 mx-1">{size}</span>
                                })
                            }
                        </div>
                    </div>
                    <h2 className='mt-6 text-3xl'>Price: {hat?.price}$</h2>
                    <div className='border-2 border-black text-black text-center mt-12 text-3xl px-4 py-2 cursor-pointer hover:bg-black hover:text-white  transition'>Add to cart</div>
                    
                </div>
            </div>
        </div>
        <div className='mt-[7%] flex justify-center flex-col mb-20'>
            <h1 className='text-center text-2xl'>{hat?.model}</h1>
            <div className='w-[50%] text-justify self-center mt-6'>
                <p className='text-lg'>{hat?.description}</p>
            </div>
            <div className='flex self-center w-[50%] px-5 justify-center flex-col mt-4'>
                <h2 className='text-2xl'>Specifications:</h2>
                <ul className='mt-6 list-disc'>
                    {hat?.specifications && hat?.specifications.map((spec, i) => {
                        return <li key={i}>{spec}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

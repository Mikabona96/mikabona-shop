import React from 'react'
import { useFetchHats } from '../../hooks/useFetchHats'
import MediaCard from './card'
import { Sneaker } from '../../types'
const Hats = () => {
  const {hats} = useFetchHats()

  return (
    <div className='flex justify-evenly mx-4 mb-[13rem] h-screen flex-wrap'>
      {
        hats?.map((hat: Sneaker) => {
          return (
            <MediaCard key={hat.id} {...hat} />
          )
        })
      }
    </div>
  )
}

export default Hats
import React from 'react'
import { useFetchSneakers } from '../../hooks/useFetchSneakers'
import MediaCard from './card'
import { Sneaker } from '../../types'
const Sneakers = () => {
  const {sneakers} = useFetchSneakers()

  return (
    <div className='flex justify-evenly mx-4 mb-[13rem] h-screen flex-wrap'>
      {
        sneakers.map((sneaker: Sneaker) => {
          return (
            <MediaCard key={sneaker.id} {...sneaker} />
          )
        })
      }
    </div>
  )
}

export default Sneakers
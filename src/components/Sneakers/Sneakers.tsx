import React from 'react'
import { useFetchSneakers } from '../../hooks/useFetchSneakers'
import MediaCard from './card'
import { Sneaker } from '../../types'
const Sneakers = () => {
  const {sneakers} = useFetchSneakers()

  return (
    <div className='flex justify-evenly mb-10 mt-10 h-screen flex-wrap'>
      {
        sneakers && sneakers.map((sneaker: Sneaker) => (
          <div key={sneaker.id} className="h-20" >
            <MediaCard 
              {...sneaker}
            />
          </div>
        ))
      }
    </div>
  )
}

export default Sneakers
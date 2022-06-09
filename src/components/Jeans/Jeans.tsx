import React from 'react'
import { useFetchJeans } from '../../hooks/useFetchJeans'
import MediaCard from './card'
import { Sneaker } from '../../types'

const Jeans = () => {
  const {jeans} = useFetchJeans()

  return (
    <div className='flex justify-evenly mx-4 mb-[13rem] h-screen flex-wrap'>
      {
        jeans?.map((jean: Sneaker) => {
          return (
            <MediaCard key={jean.id} {...jean} />
          )
        })
      }
    </div>
  )
}

export default Jeans
import React from 'react'
import { useLocation } from 'react-router-dom';
import Hats from '../Hats/Hats';
import Jeans from '../Jeans/Jeans';
import Sneakers from '../Sneakers/Sneakers';

export const Category = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];


    switch (path) {
        case 'sneakers':
            return <Sneakers />
        case 'hats':
            return <Hats />
        case 'jeans':
            return <Jeans />
    }

  return (
    <div>Category</div>
  )
}

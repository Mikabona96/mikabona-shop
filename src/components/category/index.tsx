import React from 'react'
import { useLocation } from 'react-router-dom';
import Sneakers from '../Sneakers/Sneakers';

export const Category = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];


    switch (path) {
        case 'sneakers':
            return <Sneakers />
        case 'hats':
            return <Sneakers />
    }

  return (
    <div>Category</div>
  )
}

import React from 'react'
import { useLocation } from 'react-router-dom';
import { Sneaker } from '../Sneakers/Sneaker';

export const Item = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];


    switch (path) {
        case 'sneakers':
            return <Sneaker />
        case 'hats':
            return <Sneaker />
    }

  return (
    <div>Item</div>
  )
}

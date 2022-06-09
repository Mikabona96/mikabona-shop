import React from 'react'
import { useLocation } from 'react-router-dom';
import { Hat } from '../Hats/Hat';
import { Jean } from '../Jeans/Jean';
import { Sneaker } from '../Sneakers/Sneaker';

export const Item = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];


    switch (path) {
        case 'sneakers':
            return <Sneaker />
        case 'hats':
            return <Hat />
        case 'jeans':
            return <Jean />
    }

  return (
    <div>Item</div>
  )
}

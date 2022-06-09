import * as React from 'react';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

type PropTypes = {
    brand: string
    model: string
    sizes: string[]
    images: string[]
    id: string
    price: string
}

const MediaCard: React.FC<PropTypes> = (props) => {
  const {brand, model, images, price} = props;
  const navigate = useNavigate();
  const location = useLocation()

  return (
    <div className='relative h-[35rem] mt-4'
    onClick={() => {
      navigate(`${location.pathname}/${props.id}`)
    }}>
      <div className='w-[20rem]'>
        <img src={images[0]} alt="" />
      </div>
      <div className='absolute bottom-3 w-[100%]'>
        <h3 className='text-lg'>{brand}</h3>
        <h2 className="mt-2">{model}</h2>
        
        <div className='flex justify-between w-[100%] mt-2'>
          <h1 className='text-2xl'>{price}$</h1>
          <div className='border-2 border-black px-2 pb-1 cursor-pointer hover:bg-black hover:text-white'>Add to Cart</div>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
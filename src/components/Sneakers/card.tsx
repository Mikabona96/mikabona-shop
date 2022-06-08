import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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
  const {brand, model, sizes, images} = props;
  const navigate = useNavigate();
  const location = useLocation()
  
  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => {
      navigate(`${location.pathname}/${props.id}`)
    }}>
      <CardMedia
        component="img"
        height="140"
        image={images[0]}
        alt="sneaker"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brand} {model}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='flex cursor-pointer'>
          {sizes.map((size, i) => (
            <span key={i} className="border-2 px-2 py-1 mx-1">{size}</span>
          ))}
        </Typography>
      </CardContent>
      <CardActions>
        price: {props?.price}$
        add to cart
      </CardActions>
    </Card>
  );
}

export default MediaCard;
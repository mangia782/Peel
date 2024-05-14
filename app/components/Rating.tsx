import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

// const labels: { [index: string]: string } = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value: number) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

interface RatingProps {
    ratingValue: number;
    size: string;
}

const StarRating: React.FC<RatingProps> = ({
    ratingValue,
    size,
}) => {

  if(size==="small"){
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="half-rating-read"
          value={ratingValue}
          precision={0.5}
          // getLabelText={getLabelText}
          readOnly
          size="small"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
    );
  }

  else if(size==="medium"){
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="half-rating-read"
          value={ratingValue}
          precision={0.5}
          // getLabelText={getLabelText}
          readOnly
          size="medium"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
    );  
  }
  else{
    return (
      <Box
        sx={{
          width: 200,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Rating
          name="half-rating-read"
          value={ratingValue}
          precision={0.5}
          // getLabelText={getLabelText}
          readOnly
          size="large"
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>
    );  
  }

}


export default StarRating;
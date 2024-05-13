import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarRatingInput from '../components/StarRatingInput';

const labels: { [index: string]: string } = {
  0.5: 'Disgusting',
  1: 'Disgusting+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Delicious',
  5: 'Delicious+',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function StarRatingDisplay() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hlaf-rating-read"
        size="large"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        readOnly
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}
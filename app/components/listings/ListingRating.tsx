/*
import React, { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState<number>(0);

  const handleClick = (starValue: number) => {
    setRating(starValue);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            onClick={() => handleClick(starValue)}
            style={{ cursor: 'pointer', color: starValue <= rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        );
      })}
      <p>You rated this {rating} star(s).</p>
    </div>
  );
};

export default StarRating;

*/
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbLemon, TbApple, TbBuildingStore } from 'react-icons/tb';
import {
  GiGrapes, 
  GiPineapple,
  GiStrawberry,
  GiPeach,
  GiWatermelon,
} from 'react-icons/gi';
import { SiAdafruit } from "react-icons/si";

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Apples',
    icon: TbApple ,
    description: 'Red, Green, Crunchy, etc...',
  },
  {
    label: 'Citrus',
    icon: TbLemon,
    description: 'Oranges, Grapefruits, Lemons, etc...',
  },
  {
    label: 'Grapes',
    icon: GiGrapes,
    description: 'Green, Red, Seedless, etc...'
  },
  {
    label: 'Tropical',
    icon: GiPineapple,
    description: 'Mangoes, Pineapples, Coconuts, Passion Fruit, etc...'
  },
  {
    label: 'Berries',
    icon: GiStrawberry ,
    description: 'Strawberries, Blueberries, Raspberries, etc...'
  },
  {
    label: 'Stone Fruits',
    icon: GiPeach ,
    description: 'Peaches, Apricots, Plums, etc...'
  },
  {
    label: 'Melons',
    icon: GiWatermelon ,
    description: 'Watermelons, Cantaloupe, Honeydew, etc...'
  },
  {
    label: 'Exotic',
    icon: SiAdafruit ,
    description: 'Starfruit, Dragonfruit, Lychee, Cherimoya, etc...'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;
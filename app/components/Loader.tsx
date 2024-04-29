'use client';

import Image from "next/image";
import peelLogoGIF from '/images/LoadingPeelLogo.gif';


const Loader = () => {
  return ( 
    <div
    className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <Image
        src="/images/LoadingPeelLogo.gif"
        height="300" 
        width="300" 
        alt="Loading . . ." 
      />
    </div>
   );
}
 
export default Loader;
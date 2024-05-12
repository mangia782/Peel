'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="/images/PeelLogo.png" 
      height="150"
      width="150"
      alt="Logo" 
    />
   );
}
 
export default Logo;

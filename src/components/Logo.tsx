import { motion } from 'framer-motion';
import Image from 'next/image';
import logoSrc from '../../public/logo.svg';
import { introLogoVariant } from '../helpers/variants';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div
      variants={introLogoVariant}
      initial='initial'
      animate='animate'
      className={`relative select-none w-[180px] h-[60px] md:w-[240px] md:h-[80px] ${className}`}
    >
      <Image
        src={logoSrc}
        className='h-full w-[140px] sm:h-64 '
        layout='fill'
        alt='Logo'
      />
    </motion.div>
  );
};

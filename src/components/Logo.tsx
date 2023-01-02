import { motion } from 'framer-motion';
// import Image from 'next/image';
// import logoSrc from '../../public/logo.svg';
import { introLogoVariant } from '../helpers/variants';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <motion.div
      variants={introLogoVariant}
      initial='initial'
      animate='animate'
      // className={`relative select-none w-[180px] h-[60px] md:w-[240px] md:h-[80px] ${className}`}
    >
      <div className='text-white text-3xl font-medium leading-3 tracking-widest'>
        <span className='text-primary'>{'{'}</span>dorta
        <span className='text-primary'>.</span>dev
        <span className='text-primary'>{'}'}</span>
      </div>
    </motion.div>
  );
};

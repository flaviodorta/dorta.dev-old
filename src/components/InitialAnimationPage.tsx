import { motion } from 'framer-motion';
import { initialAnimationPageVariants } from '../helpers/variants';

export const InitialAnimationPage = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={initialAnimationPageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      className='flex flex-col justify-between h-full w-full'
    >
      {children}
    </motion.div>
  );
};

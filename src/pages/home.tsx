import { Navbar } from '../components/Navbar';
import { Content } from '../components/Home/Content';
import { Footer } from '../components/Home/Footer';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { transitionAtom } from '../recoil/atoms';
import { useRecoilState } from 'recoil';
import { TransitionPageToPageLayout } from '../components/Transition';

export const transitionPageVariants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      delay: 3,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
  },
};

export default function HomePage() {
  const [{ shouldTransition, transitionToPage }, setShouldTransitionPage] =
    useRecoilState(transitionAtom);

  console.log(shouldTransition, ' ', transitionToPage);
  return (
    <TransitionPageToPageLayout>
      <motion.div
        variants={transitionPageVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        className='flex flex-col justify-between h-full w-full'
      >
        <Navbar />

        <Content />

        <Footer />
      </motion.div>
    </TransitionPageToPageLayout>
  );
}

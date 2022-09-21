import { AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { Intro } from '../components/Intro';
import { TransitionBackground } from '../components/Transition';
import { transitionAtom } from '../recoil/atoms';

export default function IntroPage() {
  const [shouldTransitionPage, setShouldTransitionPage] =
    useRecoilState(transitionAtom);

  const onExitTransitionComplete = () =>
    setShouldTransitionPage({
      shouldTransition: true,
      transitionToPage: 'HomePage',
    });

  return (
    <>
      <Intro />
    </>
  );
}

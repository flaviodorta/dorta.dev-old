import { motion, AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';
import useSound from 'use-sound';
import { cursorVariantAtom } from '../recoil/atoms';
import {
  backgroundVariants,
  linkNameVariants,
  menuItemVariants,
} from '../helpers/variants';
import { cancelableDelay } from '../helpers/functions';

interface MenuItemProps {
  isMenuOpen: boolean;
  custom: { idx: number; length: number };
  linkName: string;
}

const MenuItem = ({ isMenuOpen, custom, linkName }: MenuItemProps) => {
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);
  const [hoverMenuOptionSoundPlay] = useSound('/sounds/hover-menu-option.wav');

  // const [
  //   setCursorToMenuOptionHoveringDelay,
  //   clearCursorToMenuOptionHoveringDelay,
  // ] = cancelableDelay(() => {
  //   setCursorVariant('homeMenuOptionHovering');
  //   clearCursorToMenuOptionHoveringDelay();
  // }, 150);

  const onMouseEnterMenuOption = () => {
    hoverMenuOptionSoundPlay();
    setCursorVariant('homeMenuOption');
    // setCursorToMenuOptionHoveringDelay();
  };

  const onMouseLeaveMenuOption = () => {
    // clearCursorToMenuOptionHoveringDelay();
    setCursorVariant('default');
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.li
          className='sidebar--list-item'
          variants={menuItemVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          custom={custom}
          layout
        >
          <div className='text-4xl md:text-5xl font-anton group'>
            <motion.h1
              layout
              variants={linkNameVariants}
              whileHover={isMenuOpen ? 'hovered' : ''}
              className='font-anton select-none uppercase tracking-[2px] group-hover:text-primary transition-colors duration-200'
              onMouseEnter={onMouseEnterMenuOption}
              onMouseLeave={onMouseLeaveMenuOption}
            >
              <span className='hidden -left-5 absolute delay-500 group-hover:inline-block group-hover:text-primary transition-all duration-500'>
                &#123;
              </span>
              {linkName}
              <span className='hidden -right-[7px] absolute delay-500 group-hover:inline-block group-hover:text-primary transition-all duration-300'>
                &#125;
              </span>
              <span className='text-primary group-hover:opacity-0'>.</span>
            </motion.h1>
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

interface NavigationProps {
  isMenuOpen: boolean;
}

const Navigation = ({ isMenuOpen }: NavigationProps) => {
  const linksName = ['Works', 'Services', 'About', 'Contact'];

  return (
    <ul className='sidebar--list'>
      {linksName.map((linkName, i, arr) => (
        <MenuItem
          key={i}
          custom={{ idx: i, length: arr.length }}
          isMenuOpen={isMenuOpen}
          linkName={linkName}
        />
      ))}
    </ul>
  );
};

interface SidebarProps {
  isMenuOpen: boolean;
}

export const Sidebar = ({ isMenuOpen }: SidebarProps) => {
  const [variant, setVariant] = useRecoilState(cursorVariantAtom);
  return (
    <nav className='sidebar' onMouseEnter={() => setVariant('default')}>
      <motion.div
        className='sidebar--background'
        variants={backgroundVariants}
        initial={false}
        animate={isMenuOpen ? 'open' : 'close'}
      />
      <Navigation isMenuOpen={isMenuOpen} />
    </nav>
  );
};
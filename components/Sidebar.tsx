import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { cursorVariantAtom } from '../recoil/atoms';

const menuItemVariants: Variants = {
  visible: ({ idx }) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0,
        delay: 0.4 + idx * 0.1,
        duration: 1,
      },
    };
  },
  hidden: ({ idx, length }) => {
    return {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0,
        delay: (length - idx) * 0.05,
        duration: 0.8,
      },
    };
  },
};

const linkNameVariants: Variants = {
  hovered: {
    x: 10,
    transition: {
      type: 'tween',
      duration: 0.18,
      delay: 0,
      ease: 'linear',
    },
  },
};

interface MenuItemProps {
  isMenuOpen: boolean;
  custom: { idx: number; length: number };
  linkName: string;
}

const MenuItem = ({ isMenuOpen, custom, linkName }: MenuItemProps) => {
  const [_, setCursorVariant] = useRecoilState(cursorVariantAtom);

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
              variants={linkNameVariants}
              whileHover={isMenuOpen ? 'hovered' : ''}
              layout
              className='font-anton uppercase tracking-[2px] group-hover:text-primary transition-colors duration-200'
              onMouseEnter={() => setCursorVariant('homeMenuOption')}
              onMouseLeave={() => setCursorVariant('default')}
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

const backgroundVariants: Variants = {
  open: {
    clipPath: 'circle(1000px at 384px 0px)',
    background: '#121212',
    transition: {
      duration: 1.8,
      type: 'spring',
      bounce: 0,
    },
  },
  close: {
    clipPath: 'circle(0px at 384px 0px)',
    background: '#121212',
    transition: {
      duration: 1.6,
      delay: 0.8,
      type: 'spring',
      bounce: 0,
    },
  },
};

interface SidebarProps {
  isMenuOpen: boolean;
}

const Sidebar = ({ isMenuOpen }: SidebarProps) => {
  return (
    <nav className='sidebar'>
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

export default Sidebar;

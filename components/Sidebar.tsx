import { motion, AnimatePresence, Variants, useCycle } from 'framer-motion';

const menuItemVariants: Variants = {
  visible: ({ idx, length }) => {
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
        delay: (length - idx) * 0.1,
        duration: 0.8,
      },
    };
  },
};

interface MenuItemProps {
  isMenuOpen: boolean;
  custom: { idx: number; length: number };
  linkName: string;
}

const MenuItem = ({ isMenuOpen, custom, linkName }: MenuItemProps) => {
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
        >
          {linkName}
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
      delay: 0.5,
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

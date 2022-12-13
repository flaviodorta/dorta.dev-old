import React, { createContext, useContext } from 'react';
import useSound from 'use-sound';
import { PlayFunction } from 'use-sound/dist/types';

interface ISounds {
  onAnimationExitTransitionSound: PlayFunction | null;
  hoverMenuOptionSoundPlay: PlayFunction | null;
  clickMenuOptionSoundPlay: PlayFunction | null;
  openMenuSoundPlay: PlayFunction | null;
  hoverCloseMenuIconSoundPlay: PlayFunction | null;
  hoverOpenMenuIconSoundPlay: PlayFunction | null;
  soundIconSoundPlay: PlayFunction | null;
  soundOnPlay: PlayFunction | null;
  soundOffPlay: PlayFunction | null;
  openSocialIconsSoundPlay: PlayFunction | null;
  hoverSocialIconsIconSoundPlay: PlayFunction | null;
  hoverSocialIconSoundPlay: PlayFunction | null;
  clickSocialIconSoundPlay: PlayFunction | null;
  backgroundSoundPlay: PlayFunction | null;
}

const initialValue: ISounds = {
  onAnimationExitTransitionSound: null,
  hoverMenuOptionSoundPlay: null,
  clickMenuOptionSoundPlay: null,
  openMenuSoundPlay: null,
  hoverCloseMenuIconSoundPlay: null,
  hoverOpenMenuIconSoundPlay: null,
  soundIconSoundPlay: null,
  soundOnPlay: null,
  soundOffPlay: null,
  openSocialIconsSoundPlay: null,
  hoverSocialIconsIconSoundPlay: null,
  hoverSocialIconSoundPlay: null,
  clickSocialIconSoundPlay: null,
  backgroundSoundPlay: null,
};

const SoundsContext = createContext<ISounds>(initialValue);

export const useSoundsContext = () => useContext(SoundsContext);

export function SoundsProvider({ children }: { children: React.ReactNode }) {
  const [onAnimationExitTransitionSound] = useSound(
    '/sounds/page-transition-exit.mp3',
    {
      volume: 0.1,
    }
  );
  const [hoverMenuOptionSoundPlay] = useSound('/sounds/hover-menu-option.wav', {
    volume: 0.1,
  });
  const [clickMenuOptionSoundPlay] = useSound('/sounds/click-menu-option.wav', {
    volume: 0.1,
  });
  const [openMenuSoundPlay] = useSound('/sounds/open-menu.wav', {
    volume: 0.1,
  });
  const [hoverCloseMenuIconSoundPlay] = useSound(
    '/sounds/hover-close-menu-icon.wav',
    {
      volume: 0.1,
    }
  );
  const [hoverOpenMenuIconSoundPlay] = useSound(
    '/sounds/hover-open-menu-icon.wav',
    {
      volume: 0.1,
    }
  );
  const [soundIconSoundPlay] = useSound('/sounds/hover-sound-icon.wav', {
    volume: 0.1,
  });
  const [soundOnPlay] = useSound('/sounds/turn-sound-on.wav', {
    volume: 0.1,
  });
  const [soundOffPlay] = useSound('/sounds/turn-sound-off.wav', {
    volume: 0.1,
  });
  const [openSocialIconsSoundPlay] = useSound('/sounds/open-social-icons.wav', {
    volume: 0.1,
  });
  const [hoverSocialIconsIconSoundPlay] = useSound(
    '/sounds/hover-social-icons-icon.wav',
    {
      volume: 0.1,
    }
  );
  const [hoverSocialIconSoundPlay] = useSound('/sounds/hover-social-icon.wav', {
    volume: 0.1,
  });
  const [clickSocialIconSoundPlay] = useSound('/sounds/click-social-icon.wav', {
    volume: 0.1,
  });

  const [backgroundSoundPlay] = useSound('/sounds/click-social-icon.wav', {
    volume: 0.1,
  });

  const sounds: ISounds = {
    onAnimationExitTransitionSound,
    hoverMenuOptionSoundPlay,
    clickMenuOptionSoundPlay,
    openMenuSoundPlay,
    hoverCloseMenuIconSoundPlay,
    hoverOpenMenuIconSoundPlay,
    soundIconSoundPlay,
    soundOnPlay,
    soundOffPlay,
    openSocialIconsSoundPlay,
    hoverSocialIconsIconSoundPlay,
    hoverSocialIconSoundPlay,
    clickSocialIconSoundPlay,
    backgroundSoundPlay,
  };

  return (
    <SoundsContext.Provider value={sounds}>{children}</SoundsContext.Provider>
  );
}

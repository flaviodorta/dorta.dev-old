import { TypewriterProps, useTypewriter } from '../../hooks/useTypewrite';
import { Cursor } from './Cursor';

interface ComponentProps extends TypewriterProps {
  cursor?: boolean;
  cursorStyle?: string;
}

export const Typewriter = ({
  texts = [],
  typeSpeed = 70,
  deleteSpeed = 150,
  delaySpeed = 2000,
  cursorStyle = '|',
  cursor = true,
}: ComponentProps) => {
  const text = useTypewriter({
    texts,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  });

  return (
    <>
      <span>{text}</span>
      {cursor && <Cursor cursorStyle={cursorStyle} />}
    </>
  );
};

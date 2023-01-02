import { Html, Head, Main, NextScript } from 'next/document';
import { useRecoilState } from 'recoil';
import { useSoundsContext } from '../context/SoundsContext';
import { shouldStartBackgroundSoundAtom } from '../recoil/atoms';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@300;400;500;600;700;800;900&family=Share+Tech+Mono&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import { Layout } from '../components/Layout';
import { isMobile } from 'react-device-detect';

import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  console.log(isMobile);
  return (
    <RecoilRoot>
      <Layout>
        <Head>
          <title>dorta.dev, creative developer.</title>
          <meta name='description' content='Generated by create next app' />
        </Head>

        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
import { InitialAnimationPage } from '../components/InitialAnimationPage';
import { Navbar } from '../components/Navbar';
import { Content } from '../components/Home/Content';
import { Footer } from '../components/Home/Footer';

export default function HomePage() {
  return (
    <InitialAnimationPage>
      <Navbar />

      <Content />

      <Footer />
    </InitialAnimationPage>
  );
}

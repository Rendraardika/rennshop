import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import QuickSteps from './components/QuickSteps';
import CaraSewa from './components/CaraSewa';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <QuickSteps />
        <CaraSewa />
      </main>
      <Footer />
    </>
  );
}

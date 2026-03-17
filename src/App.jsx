import Hero from './components/Hero';
import Guestbook from './components/Guestbook';
import LocalGuide from './components/LocalGuide';
import Accommodation from './components/Accommodation';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Guestbook />
      <LocalGuide />
      <Accommodation />
      <Booking />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

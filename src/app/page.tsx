import Advisory from "./components/Advisory";
import DigitalPlayback from "./components/DigitalPlayback";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LegacyCTA from "./components/LegacyCTA";
import Navbar from "./components/Navbar";
import Philosophy from "./components/Philosophy";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";


export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Profile />
      <Portfolio />
      <Advisory/>
      <Philosophy />
      <DigitalPlayback />
      <LegacyCTA/>
      <Footer />
    </main>
  );
}

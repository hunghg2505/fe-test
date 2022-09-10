import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SectionAbout from './components/SectionAbout/SectionAbout';
import SectionCta from './components/SectionCta/SectionCta';
import SectionFeatures from './components/SectionFeatures/SectionFeatures';
import SectionHero from './components/SectionHero/SectionHero';
import SectionTestimonials from './components/SectionTestimonials/SectionTestimonials';

function App() {
  return (
    <div className='App'>
      <Header />
      <SectionHero />
      <SectionAbout />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionCta />
      <Footer />
    </div>
  );
}

export default App;

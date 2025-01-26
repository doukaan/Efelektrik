import './App.css';
import HeroSection from './Components/HeroSection';
import ServicesSection from './Components/ServicesSection';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactSection from './Components/ContactSection';
import AboutSection from './Components/AboutSection';

function App() {
  return (
    <div>
    <div>
<Header />
    </div>
    <div id='Hero'>
      <HeroSection id="Hero" />
    </div>
   
    <div id='Services' className=''>
      <ServicesSection />
    </div>
    <div id='About'>
      <AboutSection/>
    </div>
    <div id='Contact'>
      <ContactSection/>
    </div>
    <div>
      
    <Footer />
    </div>

    </div>
    
      
      
  
  
  );
}

export default App;

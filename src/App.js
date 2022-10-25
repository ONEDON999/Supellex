import './App.css';
import AboutUs from './components/AboutUs';
import ClientsAndMembers from './components/ClientsAndMember';
import Footer from './components/Footer';
import GridSection from './components/GridSection';
import HeroSection from './components/HeroSection';
import Hot from './components/Hot';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <ClientsAndMembers/>
      <Hot/>
      <GridSection/>
      <Products />
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default App;

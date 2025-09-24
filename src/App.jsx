import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Speech from './components/Speech'
import PoweringFuture from './components/PoweringFuture'
import SaterliteLauch from './components/SaterliteLauch'
import MoonWatch from './components/MoonWatch'
import GlobalImpact from './components/GlobalImpact'
import Team from './components/Team'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sponsors />
      <Speech />
      <PoweringFuture />
      <SaterliteLauch />
      <MoonWatch />
      <GlobalImpact />
      <Team />
      
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App
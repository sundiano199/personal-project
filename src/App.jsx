import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './components/Hero'
import Sponsors from './components/Sponsors'
import Speech from './Components/Speech'
import PoweringFuture from './Components/PoweringFuture'
import SaterliteLauch from './Components/SaterliteLauch'
import MoonWatch from './Components/MoonWatch'
import GlobalImpact from './Components/GlobalImpact'
import Team from './Components/Team'
import Newsletter from './components/Newsletter'
import Footer from './Components/Footer'

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
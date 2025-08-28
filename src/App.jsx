import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Collection from './components/Collection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Services />
      <Collection />
      <Footer />
    </>
  )
}

export default App
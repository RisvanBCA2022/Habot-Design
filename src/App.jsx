import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Frame1 from './components/Frame1'
import CallToAction from './components/CallToAction'
import FeatureSection from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header />
     <Hero />
     <Frame1 />
     <CallToAction />
     <FeatureSection />
     <Footer />
    </>
  )
}

export default App

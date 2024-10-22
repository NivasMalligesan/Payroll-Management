import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/features/Features'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-white'>
      <Hero/>
      <Features/>
    </main>
  )
}

export default App
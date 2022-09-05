import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Banner } from './components/Banner'
import { Header } from './components/Header'
import './css/base/normalize.css'
import './css/base/reset.css'
import './css/base/global.css'
import './css/utils/variables.css'
import { TopTravels } from './components/TopTravels'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <TopTravels />
    </>
  )
}

export default App

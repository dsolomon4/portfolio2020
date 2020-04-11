import React from 'react';

import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Banner from './components/Banner/Banner'
import Portfolio from './components/Portfolio/Portfolio'

import './App.css'

const App = () => (
   <div>
        <Header/>
        <Banner/>
        <About/>
        <Portfolio/>
        <Contact/>
        {/* <Footer/> */}
   </div>

);

export default App;
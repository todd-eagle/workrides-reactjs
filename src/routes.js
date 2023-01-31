import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Landing from './components/Pages/LandingPage/LandingPage'
import Services from './components/Pages/Services/Services'
import About from './components/Pages/OurStory/OurStory'
import Contact from './components/Pages/Contact/Contact'
import Donate from './components/Pages/Donate/Donate'
import PageNotFound from './components/Pages/PageNotFound'

export default (
    <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
)
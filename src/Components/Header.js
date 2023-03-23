import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Home'
import Campuses from './Campuses'
import People from './People'
import Sponsors from './Sponsors'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Fellowships from './Fellowships'
import UCR from './UCR'
import CSU from './CSU'
import RCC from './RCC'
import Moreno from './Moreno'
import Norco from './Norco'
import SBValley from './SBValley'
import FAA1 from './FAA1.js'
import FAA2 from './FAA2.js'
import JPL1 from './JPL1.js'
import JPL2 from './JPL2.js'
import UCR1 from './UCR1.js'
import UCR2 from './UCR2.js'
import UCR3 from './UCR3.js'
import ESRI from './ESRI.js'
import Rivco from './Rivco.js'
import WROCG from './WROCG.js'
import Monet from './Monet.js'
import FAAPoster from '/Users/shreya_godishala/Desktop/my-react-app/src/Files/Final Presentation FAA.pptx'

export default class Header extends Component {
  render() {
    return (
      <BrowserRouter>
 
        <header className="d-flex flex-wrap justify-content-center py-3  bg-primary text-light">
          <div class="">
       
          </div>
          <div class="p-2">
            <ul className="nav nav-pills ">
            <li className="nav-item mx-3 ">
                <Link to="/" className="nav-link text-light  ">
                  <b>Data Science Career Pathways</b>
                </Link>
              </li>
              <li className="nav-item  ">
                <Link to="/" className="nav-link text-light  ">
                  <b> Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="People" className="nav-link text-light">
                  <b>People</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Campuses" className="nav-link text-light">
                  <b>Campuses</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Sponsors" className="nav-link text-light">
                  <b>Sponsors</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Projects" className="nav-link text-light">
                  <b>Projects</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Fellowships" className="nav-link text-light">
                  <b>Fellowships</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="Testimonials" className="nav-link text-light">
                  <b>Testimonials</b>
                </Link>
              </li>
            </ul>
          </div>
        </header>

        <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="People" element={<People />}></Route>
          <Route path="Campuses" element={<Campuses />}></Route>
          <Route path="/Campuses/UCR" element={<UCR />}></Route>
          <Route path="/Campuses/CSU" element={<CSU />}></Route>
          <Route path="/Campuses/RCC" element={<RCC />}></Route>
          <Route path="/Campuses/Moreno" element={<Moreno />}></Route>
          <Route path="/Campuses/Norco" element={<Norco />}></Route>
          <Route path="/Campuses/SBValley" element={<SBValley />}></Route>
          <Route path="Sponsors" element={<Sponsors />}></Route>
          <Route path="Projects" element={<Projects />}></Route>
          <Route path="Projects/FAA1" element={<FAA1 />}></Route>
          <Route path="Projects/FAA1/FAAPoster" element={<FAAPoster />}></Route>
          <Route path="Projects/FAA2" element={<FAA2 />}></Route>
          <Route path="Projects/JPL1" element={<JPL1 />}></Route>
          <Route path="Projects/JPL2" element={<JPL2 />}></Route>
          <Route path="Projects/UCR1" element={<UCR1 />}></Route>
          <Route path="Projects/UCR2" element={<UCR2 />}></Route>
          <Route path="Projects/UCR3" element={<UCR3 />}></Route>
          <Route path="Projects/ESRI" element={<ESRI />}></Route>
          <Route path="Projects/Rivco" element={<Rivco />}></Route>
          <Route path="Projects/WROCG" element={<WROCG />}></Route>
          <Route path="Projects/Monet" element={<Monet />}></Route>
          <Route path="Testimonials" element={<Testimonials />}></Route>
          <Route path="Fellowships" element={<Fellowships />}></Route>

        </Routes>


      </BrowserRouter>
    )
  }
}





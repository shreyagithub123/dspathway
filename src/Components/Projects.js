import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/FAA.jpeg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/JPL.jpeg'
import pic7 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCr.png'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import pic1 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/esri1.png'
import pic4 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/rivco.png'
import pic5 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/wrocg.png'
import pic6 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/monet.jpeg'
import pic9 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/proj.jpeg'
import FAA1 from './FAA1.js'
import FAA2 from './FAA2.js'
import JPL1 from './JPL1.js'
import JPL2 from './JPL2.js'
import UCR1 from './UCR1.js'
import UCR2 from './UCR2.js'
import UCR3 from './UCR2.js'
import ESRI from './ESRI.js'
import Rivco from './Rivco.js'
import WROCG from './WROCG.js'
import Monet from './Monet.js'
export default class Projects extends Component {
  render() {
    return (
      <div>
        <img src={pic9} width="1500" height="400"/>
        <div class="container py-3  my-3">
          <h3><b>Team Projects</b></h3><br />
          <div class="row">
            <div class="col-sm-3">
            <div class="border"> <img src={pic2} width="250" height="120" /> </div><br />
            </div>
            <div class="col-sm-9 justify-content-center text-left">

              <Link to="/Projects/FAA1">
                <h4>Federal Aviation Administration - Event Report Text Mining</h4>
              </Link><br />
              

            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-sm-3">
            <div class="border"> <img src={pic3} width="250" height="120" /></div> <br />
            </div>
            <div class="col-sm-9 justify-content-center text-left">
              <Link to="/Projects/JPL1">
                <h4>NASA JPL - CA Central Valley Land Subsidence Dashboard
                </h4>
              </Link><br />
              <Link to="/Projects/JPL2">
                <h4> NASA JPL - Subsidence Modeling </h4>
              </Link>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-3">
            <div class="border"> <img src={pic7} width="250" height="120" /></div> <br />
            </div>
            <div class="col-sm justify-content-center text-left">
              <Link to="/Projects/UCR1">
                <h4>Medical Knowledge Graph
                </h4>
              </Link>
              <Link to="/Projects/UCR2">
                <h4> Statistical Analysis of Social,Psychological Impact during COVID-19 </h4>
              </Link>
              <Link to="/Projects/UCR3">
                <h4> Anomaly Detection </h4>
              </Link>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-3">
            <div class="border"><img src={pic1} width="250" height="120" /> </div><br />
            </div>
            <div class="col-sm-9 justify-content-center text-left">
              <Link to="/Projects/ESRI">
                <h4>Case Study with GIS </h4>
              </Link>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-3">
            <div class="border"> <img src={pic6} width="250" height="120" /></div> <br />
            </div>
            <div class="col-sm-9 justify-content-center text-left">
              <Link to="/Projects/Monet">
                <h4>Monet Short Video Performance Score Prediction Algorithm</h4>
              </Link>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-sm-3">
            <div class="border"> <img src={pic4} width="250" height="120" /></div> <br />
            </div>
            <div class="col-sm-9 justify-content-center text-left">
              <Link to="/Projects/Rivco">
                <h4>GIS Mapping: Client Map and Resource Gaps</h4>
              </Link>
            </div>
          </div>
          <br />


          <div class="row">
            <div class="col-sm-3">
            <div class="border"> <img src={pic5} width="250" height="120" /> </div><br />
            </div>
            <div class="col-sm-9 justify-content-center text-left">
              <Link to="/Projects/WROCG">
                <h4>Analysis in the Riverside County</h4>
              </Link>
            </div>
          </div>
          <br />










        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import pic1 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/esri1.png'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/FAA.jpeg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/JPL.jpeg'
import pic4 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/rivco.png'
import pic5 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/wrocg.png'
import pic6 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/monet.jpeg'
import pic7 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCr.png'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/sponsor.jpeg'

import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

export default class Sponsors extends Component {
  render() {
    return (
      <div>
        <img src={pic} width="1450" height="400"/>
        <div class="container py-3  my-3">
        <h3><b>Sponsors and Partners</b></h3><br/>
        <div class="row">
              <div class="col-sm-3">
            <div class="border"> <img src={pic2} width="100%" height="200" /></div> <br/>
                <Link to="https://www.faa.gov/">
                 FAA
                </Link>
              </div>
              <div class="col-sm-3">
              <div class="border"> <img src={pic3} width="100%" height="200" /></div><br/>
                <Link to="https://www.jpl.nasa.gov/">
                  NASA JPL
                </Link>
              </div>
              <div class="col-sm-3">
              <div class="border"><img src={pic5} width="100%" height="200" /></div><br/>
                <Link to="https://www.wrcog.us/">
                  WROCG
                </Link>
              </div>
              <div class="col-sm-3">
              <div class="border"> <img src={pic1} width="100%" height="200" /></div> <br/>
                <Link to="https://www.esri.com/en-us/home">
                 ESRI
                </Link>
              </div><br/><br/><br/>
              
              </div>
              <br/><br/><br/>
              <div class="row">
            
              <div class="col-sm-3">
              <div class="border"> <img src={pic7} width="100%" height="200" /></div><br/>
                <Link to="https://www.ucr.edu/">
                  UCR
                </Link>
              </div>
              <div class="col-sm-3">
              <div class="border"> <img src={pic4} width="100%" height="200" /></div><br/>
                <Link to="https://rivco.org/">
                  County Of Riverside
                </Link>
              </div>
              <div class="col-sm-3">
              <div class="border"><img src={pic6} width="100%" height="200" /></div> <br/>
                <Link to="https://www.monetanalytics.com/#/">
                 Monet Analytics
                </Link>
              </div><br/><br/><br/>
              </div>
        </div>
      </div>
    )
  }
}

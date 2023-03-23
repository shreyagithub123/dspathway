import React, { Component } from 'react'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/Home_Pic.jpeg'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import UCR from './UCR'
import pic1 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCr.png'
import CSU from './CSU'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/CSU.png'
import RCC from './RCC'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/rccd.png'
import Moreno from './Moreno'
import pic4 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/moreno.png'
import Norco from './Norco'
import pic5 from '/Users/shreya_godishala/Desktop/my-react-app/src/norco.jpeg'
import SBValley from './SBValley'
import pic6 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/sbvc.png'

export default class  extends Component {
  render() {
    return (
      <div class="">
        <div class="container py-3  my-3 ">
          <br/>
          <h3><b>Participating Campuses</b></h3><br/>
          <div class="row">
              <div class="col-sm-4">
              <Link to="UCR"><div class="border"> <img src={pic1} width="100%" height="200" /></div>   </Link><br/><br/>
                <Link to="UCR">
                  UC Riverside
                </Link>
              </div>
              <div class="col-sm-4">
              <Link to="CSU"><div class="border"> <img src={pic2} width="100%" height="200" /></div></Link><br/><br/>
                <Link to="CSU">
                  CSU San Bernadino
                </Link>
              </div>
              <div class="col-sm-4">
              <Link to="RCC"><div class="border"> <img src={pic3} width="100%" height="200" /></div></Link><br/><br/>
                <Link to="RCC">
                  Riverside City College
                </Link>
              </div><br/><br/><br/>
              </div>
              <div class="row">
               
              <div class="col-sm-4">
              <Link to="Moreno"><div class="border"> <img src={pic4} width="100%" height="200" /> </div>  </Link><br/><br/>
                <Link to="Moreno">
                 Moreno Valley College
                </Link>
              </div>

              <div class="col-sm-4">
              <Link to="Norco"><div class="border"> <img src={pic5} width="100%" height="200" /> </div>  </Link><br/><br/>
                <Link to="Norco">
                 Norco College
                </Link>
              </div>

              <div class="col-sm-4">
              <Link to="SBValley"> <div class="border"><img src={pic6} width="100%" height="200" /> </div>  </Link><br/><br/>
                <Link to="SBValley">
                 San Bernadino Valley College
                </Link>
              </div>
               
            
              </div>
        
        </div>
      </div>
    )
  }
}

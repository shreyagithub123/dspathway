import React, { Component } from 'react'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/data-pic.jpeg'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Campuses from './Campuses'
import People from './People'
import Sponsors from './Sponsors'
import Projects from './Projects'
import Testimonials from './Testimonials'
import Fellowships from './Fellowships'
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
import pic7 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/ds.jpeg'
import pic8 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/sponsor-opp.png'
import pic9 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/team.jpeg'
export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={pic} width="1450" height="500" /><br /><br />
        <div class="container text-justify">
          <h3><b><center>Overview</center></b></h3>
          <div class="d-flex ">
            <p>The NSF Harnessing Data Revolution Data Science Corps grant , (HDR DSC Award #2123444, #2123271, #2123313) is collaborative program that will build pathways for data science connecting three main public higher education institutions in California (UC, CSU, and Community Colleges).

              The partnering institutions will create shared coursework, seamless pathways, and a summer fellowship program. The fellowship program will include community college, undergraduate and graduate students from all 6 institutions to work on real-world projects provided by industry. Program fellows will participate in professional training that will focus on resume building, ethics, and oral and written communication. The fellowship program will take place Summer 2022.</p></div>
        </div>
        <div class="container text-justify ">
          <h3><b><center>Opportunities</center></b></h3><br />
          <div class="row">
            <div class="col-sm">
              <Link to="Fellowships"><div class="border"> <img src={pic7} width="100%" height="200" /></div> </Link>
              <Link to="Fellowships">
                Data Science Fellowships
              </Link>
            </div>
            <div class="col-sm">
              <Link to="Projects"> <img src={pic9} width="100%" height="200" /> </Link>
              <Link to="Projects">
                Team Projects
              </Link>
            </div>
            <div class="col-sm">
              <Link to="Sponsors"><img src={pic8} width="100%" height="200" />  </Link>
              <Link to="Sponsors">
                Sponsors
              </Link>
            </div>
          </div><br />
          <div class="container text-justify">
            <h3><b><center>Partnering Campuses</center></b></h3><br />
            <div class="row">
              <div class="col-sm-4">
                <Link to="Campuses/UCR"> <div class="border"> <img src={pic1} width="100%" height="200" /> </div>  </Link>
                <Link to="Campuses/UCR">
                  UC Riverside
                </Link>
              </div>
              <div class="col-sm-4">
                <Link to="Campuses/CSU"><div class="border"> <img src={pic2} width="100%" height="200" /> </div>  </Link>
                <Link to="Campuses/CSU">
                  CSU San Bernadino
                </Link>
              </div>
              <div class="col-sm-4">
                <Link to="Campuses/RCC"><div class="border"> <img src={pic3} width="100%" height="200" /></div> </Link>
                <Link to="Campuses/RCC">
                  Riverside City College
                </Link>
              </div>
              
              </div>
              <div class="row">
                <div class="col-sm-4">
                  <Link to="Campuses/Moreno"> <div class="border"><img src={pic4} width="100%" height="200" /> </div> </Link>
                  <Link to="Campuses/Moreno">
                    Moreno Valley College
                  </Link>
                </div>
                <div class="col-sm-4">
                  <Link to="Campuses/Norco"><div class="border"> <img src={pic5} width="100%" height="200" /> </div> </Link>
                  <Link to="Campuses/Norco">
                    Norco College
                  </Link>
                </div>
                <div class="col-sm-4">
                  <Link to="Campuses/SBValley"> <div class="border"><img src={pic6} width="100%" height="200" /> </div> </Link>
                  <Link to="Campuses/SBValley">
                    San Bernadino Valley College
                  </Link>
                </div>
              </div>

            </div>
          </div>

       </div>
    )
  }
}

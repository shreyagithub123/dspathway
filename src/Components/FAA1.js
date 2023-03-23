import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/FAA.jpeg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/FAA1.jpg'
import poster from '/Users/shreya_godishala/Desktop/my-react-app/src/Files/Final Presentation FAA.pptx'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

export default class FAA1 extends Component {
  render() {
    return (
      <div>
        <img src={pic2} width="715" height="400" />
        <img src={pic3} width="715" height="400" />
        <div class="container text-justify">
          <br/>
        <div class="row">
          <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p> The FAA generates many thousands of event reports annually. These reports range in length from a few sentences to many paragraphs of detailed event analysis.  This project will focus on shorter event narratives. The FAA has developed a detailed Aerospace Hazard Classification System (AHCS) taxonomy, which categorizes several thousand different pieces of information including causal and contributing factors, phase of flight, occurrence categories, and event outcomes. The proposal would be to take a small number of AHCS elements, and develop algorithms to automatically classify whether a given event report contains an element. Note that this is somewhat different from document-classification in that one event report may contain several different AHCS elements.  For example, the sample narrative: “NXXXXX, CESSNA C500, FAILED TO FLY ASSIGNED COURSE CLEARANCE AND ENTERED 5,900 FOOT MVA AT 5,400 FEET CONFLICTING WITH ACXXXXX, E175, VCNTY TUCSON, AZ DD/DD TTTTM.  CLOSEST PROXIMITY TO TERRAIN UNKN.  CLOSEST PROXIMITY TO ACXXXXX 500 FEET VERTICAL, 2.73 MILES LATERAL.”  This narrative has several pieces of information to extract (in addition to the aircraft types, location, and separation distances) including failure to fly assigned clearance, aircraft flying below MVA, and conflicting with another aircraft. The FAA will supply pre-labeled event narratives that will serve as a training sample. The narratives have been redacted (personal and sensitive information removed) and so will be releasable to the UC Riverside team without restriction.
</p></div>
          <div class="col-sm-4 justify-content-center text-left">
            <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Aditi Behera</li><li>Saul Gonzalez</li><li>Bijal Mugatwala</li><li>Ethan Ortega</li></ul></p></div>
            <br/>  <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Mariam Salloum</li><li>Greg Won</li></ul></p></div><br/>
            {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><li><Link to="poster">FAAPoster</Link></li></div> */}
          </div>
        </div>
        <div class="w-100"></div>
        <div class="row-sm-8 justify-content-center text-left"><h4><b>About FAA</b></h4><p>The Federal Aviation Administration (FAA) is the largest transportation agency of the U.S. government and regulates all aspects of civil aviation in the country as well as over surrounding international waters.[3]: 12, 16  Its powers include air traffic control, certification of personnel and aircraft, setting standards for airports, and protection of U.S. assets during the launch or re-entry of commercial space vehicles. Powers over neighboring international waters were delegated to the FAA by authority of the International Civil Aviation Organization.</p></div>
     
          
        </div>
      </div>
    )
  }
}




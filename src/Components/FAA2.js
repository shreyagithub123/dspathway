import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/FAA.jpeg'

export default class FAA2 extends Component {
  render() {
    return (
      <div>      <img src={pic2} width="1500" height="400" />
      <div class="container text-justify">
        <br/>
      <div class="row">
        <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p> Detecting potential losses of aircraft separation in oceanic airspace. There are three general types of nonradar separation with respect to oceanic operations: vertical, longitudinal, and lateral. For this project, an FAA-NASA team would provide a team from UC Riverside with ADS-B aircraft track data collected from Pacific and North Atlantic airspace. The specific set of problems studied for this project would be determined after an initial meeting among FAA, NASA, and UC Riverside team members, but could cover one or more of the following areas: <br/>(1) Developing algorithms to identify possible loss-of-separation candidate events (for one or more of the types listed above).<br/> (2) Developing algorithms to determine the distribution of aircraft separation, by separation type, for a specific time-period, in a particular section of airspace.<br/> (3) Developing visualization tools to display specific tracks or combinations of tracks in a dashboard format (with a preference for Power BI).</p></div>
        <div class="col-sm-4 justify-content-center text-left">
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li></li><li></li><li></li><li></li></ul></p></div>
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Mariam Salloum</li><li>Greg Won</li></ul></p></div>
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div>
        </div>
      </div>
      <div class="w-100"></div>
      <div class="row-sm-8 justify-content-center text-left"><h4><b>About FAA</b></h4><p>The Federal Aviation Administration (FAA) is the largest transportation agency of the U.S. government and regulates all aspects of civil aviation in the country as well as over surrounding international waters.[3]: 12, 16  Its powers include air traffic control, certification of personnel and aircraft, setting standards for airports, and protection of U.S. assets during the launch or re-entry of commercial space vehicles. Powers over neighboring international waters were delegated to the FAA by authority of the International Civil Aviation Organization.

Created in August 1958, the FAA replaced the former Civil Aeronautics Administration (CAA) and later became an agency within the U.S. Department of Transportation.</p></div>
   
        
      </div></div>
    )
  }
}

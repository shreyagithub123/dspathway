import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/JPL1.jpg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/JPL.jpeg'

export default class JPL1 extends Component {
  render() {
    return (
      <div> <img src={pic3} width="715" height="400" /> <img src={pic2} width="715" height="400" />
        <div class="container text-justify">
          <br />
          <div class="row">
            <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>In recent years, there has been a significant increase in groundwater pumping in the Central Valley area. This area is known as an agricultural hub that now suffers from land subsidence due to the excess pumping of groundwater. NASA JPL has been tracking the land deformation from 2014 to 2019. We were given snapshots of data for every two weeks within the five year period. The data provided to us includes displacement, groundwater, and precipitation of the Central Valley region. With this data, our goal is to analyze the data and create animated heatmaps and graphs that show changes over time. We want to show the relationship between all the data gathered and clearly show the effect of groundwater pumping on land subsidence. All the maps, graphs, and animations will be added to a local website that will display the dashboard.</p></div>
            <div class="col-sm-4 justify-content-center text-left">
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Jason Corona</li><li>Liliana Darch</li><li>Haruki Miyazaki</li><li>Ishika Rakesh</li></ul></p></div> <br/>
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Kyongsik Yun</li><li>Mariam Salloum</li></ul></p></div> <br/>
              {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div> */}
            </div>
          </div>
          <div class="w-100"></div>
          <div class="row-sm-8 justify-content-center text-left"><h4><b>About NASA JPL</b></h4><p>Jet Propulsion Laboratory (JPL) is a federally funded research and development center in the City of La Cañada Flintridge, California, United States.[1] Founded in 1936 by Caltech researchers, the laboratory is now owned and sponsored by the National Aeronautics and Space Administration and administrated and managed by the California Institute of Technology.[2][3]

            The laboratory's primary function is the construction and operation of planetary robotic spacecraft, though it also conducts Earth-orbit and astronomy missions. It is also responsible for operating the NASA Deep Space Network.</p></div>


        </div></div>
    )
  }
}




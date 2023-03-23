import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/wrocg.png'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/WROCG.jpg'

export default class WROCG extends Component {
  render() {
    return (
      <div><img src={pic2} width="715" height="500"/><img src={pic3} width="715" height="500" />
        <div class="container text-justify">
          <br />
          <div class="row">
            <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>Traffic congestion has attracted increasing attention in the Riverside and San Bernardino county as we recover from the COVID-19 pandemic. Western Riverside Council of Governments (WRCOG https://www.wrcog.us/) plans to better understand traffic congestion in the region by studying a recent travel survey and road-side sensor data (with travel patterns between origins and destinations).  Focusing on the most prevalent trip routes, WRCOG seeks to answer questions such as: who's causing the congestion in a city? What are the most congested routes? etc. The goal of the project is to better understand the traffic pattern and plan for future road development.
              As we recover from the pandemic, traffic congestion has attracted the attention of the San Bernardino County. The Western Riverside Council of Governments hopes to better understand traffic congestion in the region by studying recent travel surveys and roadside sensor data provided by Streetlight Data (with travel patterns between origins and destinations).  Focusing on the most prevalent trip routes and WRCOG’s analysis in the Western Riverside region, we seek to answer questions such as: who's causing the congestion in Rialto, SB County, and California as a whole? What are the most congested routes? etc. The goal of the project is to better understand traffic patterns and plan for future road development.
              (WRCOG https://www.wrcog.us/)
            </p></div>
            <div class="col-sm-4 justify-content-center text-left">
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Eugene Baldondo</li><li>Eiko Fukushima</li><li>Vishal Menon</li><li>Sonal Shinde</li><li>Spencer Tong</li></ul></p></div><br />
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Younfei Hou</li><li> Wartanian Raffi</li><li>Sean Reseigh</li><li>Christopher Tzeng</li></ul></p></div><br />
              {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div> */}
            </div>
          </div>
          <div class="w-100"></div>
          <div class="row-sm-8 justify-content-center text-left"><h4><b>About WROCG</b></h4><p>The purpose of WRCOG is to unify Western Riverside County so that it can speak with a collective voice on important issues that affect its members.</p></div>


        </div></div>
    )
  }
}





import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/JPL.jpeg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/JPL2.jpg'

export default class JPL2 extends Component {
  render() {
    return (
      <div><img src={pic2} width="715" height="400" /><img src={pic3} width="715" height="400" /> 
        <div class="container text-justify">
          <br />
          <div class="row">
            <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>Majority of the water that is consumed by billions of people comes from groundwater. Due to excessive pumping of groundwater, land is sinking at a rapid rate (20 cm per year). Displacement is principally downward. California central valley is responsible for 17 billion of annual agricultural output producing 25 percent of nations food.Central valley’s land is at a risk of sinking due to pumping of groundwater

              It is very important to understand groundwater depletion is the key factor for the permanent subsidence in Central Valley. Some areas are increasingly subsiding even with new precipitation. These areas cannot  store new groundwater in that region after subsidence. By understanding subsidence patterns, we can predict these areas and prevent permanent subsidence.

              We have real-world datasets collected from NASA from 2015 to 2019.This dataset is integrated multimodal data that include INSAR, groundwater, rainfall, precipitation, and soil composition by interpolating data with same spatial and temporal resolution.

              Our goal is predicting subsidence using  machine learning models and multimodal data. We choose to explore and compare various forecasting models including RNNs, GRUs,LSTMs, Random Forest, and Arima. Along with this, the key factors such as groundwater and precipitation is implemented into our models to improve predictions. By exploring these models and using various predictors, we identify the best models and performance for this problem.


            </p></div>
            <div class="col-sm-4 justify-content-center text-left">
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Andrii Dovhaniuk</li><li>Shreya Godishala</li><li>Madhusudhan Tungamitta</li><li>Jay Upadhyay</li></ul></p></div><br/>
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Kyongsik Yun</li><li>Mariam Salloum</li></ul></p></div><br/>
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



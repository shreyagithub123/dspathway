import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/rivco.png'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/Rivco.jpg'


export default class Rivco extends Component {
  render() {
    return (
      <div>        <img src={pic2} width="715" height="400" /><img src={pic3} width="715" height="400" />
      <div class="container text-justify">
        <br/>
      <div class="row">
        <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>The Riverside County Office of Aging provides various services to people in need within the County of Riverside. The goal is to use demographic, geospatial, US census, and Healthy Places Index data to identify gaps in services in the county to their target recipients. Those being individuals 60 and over that are living under the poverty line. To do this, a data pipeline is made where the data is collected, cleaned, and processed into a data model. From the data model in Microsoft’s Power Bi, the data is represented through a Dashboard as a tool for analysis to visualize trends, distributions, ratios and maps. Displaying this information, serves as a tool to better understand clients, services and age groups in different cities in Riverside County.Use GIS mapping technology to in identify service gaps using internal and external data sources (e.g., census, cities demographics).</p></div>
        <div class="col-sm-4 justify-content-center text-left">
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Daniel Bickel II</li><li>Liberty Locsin</li><li>Takenori Tsuruga</li><li></li></ul></p></div><br/>
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Ha-Young Park</li><li>Anarosa Robledo</li><li>Roy Tonsiel</li><li>Renee Sanchez</li></ul></p></div><br/>
          {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div> */}
        </div>
      </div>
      <div class="w-100"></div>
      <div class="row-sm-8 justify-content-center text-left"><h4><b>About FAA</b></h4><p>Riverside is a city in and the county seat of Riverside County, California, United States, in the Inland Empire metropolitan area. It is named for its location beside the Santa Ana River.It is the most populous city in the Inland Empire and in Riverside County, and is about 50 miles (80 km) southeast of downtown Los Angeles. It is also part of the Greater Los Angeles area. Riverside is the 61st-most-populous city in the United States and 12th-most-populous city in California. As of the 2020 census, it had a population of 314,998</p></div>
   
        
      </div></div>
    )
  }
}


import React, { Component } from 'react'
import pic2 from  '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/esri1.png'
import pic3 from'/Users/shreya_godishala/Desktop/my-react-app/src/Assets/Esri-gp.jpg'

export default class ESRI extends Component {
  render() {
    return (
      <div> <div class="border"> <img src={pic2} width="715" height="500" /><img src={pic3} width="715" height="500" /></div>
      <div class="container text-justify">
        <br/>
      <div class="row">
        <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>This project consists of detecting HVAC systems within the Portland satellite images. Using ArcGIS Pro, we utilized the deep learning tool to train a model to detect HVAC systems from the images provided to us. Like any deep learning project, we initially started off by collecting samples. We manually identified and used the training samples to train the model. After roughly 2000 samples were collected, we exported the data as a deep learning package and used it to identify the HVACs in the remaining data provided to us. The accuracy of this model was 13.68%.</p></div>
        <div class="col-sm-4 justify-content-center text-left">
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Samantha Gonzalez Marquez</li><li>Neha Mathews</li><li>David Ryan</li><li>Nadia Saba</li></ul></p></div><br/>
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Peter Becker</li><li>Andrew Haglund</li><li> Canserina Kurnia</li><li> Vinay Viswambharan</li></ul></p></div><br/>
          {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div> */}
        </div>
      </div>
      <div class="w-100"></div>
      <div class="row-sm-8 justify-content-center text-left"><h4><b>About ESRI</b></h4><p>Esri Environmental Systems Research Institute) is an American multinational geographic information system (GIS) software company. It is best known for its ArcGIS products. With a 43% market share, Esri is the world's leading supplier of GIS software, web GIS and geodatabase management applications.The company is headquartered in Redlands, California.</p></div>
   
        
      </div></div>
    )
  }
}


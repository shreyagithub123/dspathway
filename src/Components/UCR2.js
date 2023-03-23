import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCr.png'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCR2.jpg'

export default class UCR2 extends Component {
  render() {
    return (
      <div><img src={pic2} width="715" height="400" /><img src={pic3} width="715" height="400" />
      <div class="container text-justify">
        <br />
        <div class="row">
          <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4> 
          <p>The data for this project was collected via computer or mobile device on Qualtrics or by a researcher who assisted participants in completing the survey over the phone during the early stages of the COVID-19 pandemic (June 12th, 2020 to July 17th, 2020). The survey resulted in two datasets. The first dataset consists of 462 participants with measurements that include intervention, age, age group (young, middle aged, older), education, sex, and growth mindset. The outcomes of interest are adjustment (measured as 1 or 0 where 1 indicates adapting to challenges of COVID-19 and 0 indicates not adapting), depression (scale of 1-10; higher values indicate higher levels of depression), and well-being (scale of 1-7; higher number indicates higher levels of well-being). The second dataset contains 402 participants with features including age, sex, income, race, emotional closeness (to people living in their household), learning behavior (time spent learning), and new skill tolerable (engaging in new skills amid social restrictions). The outcomes of interest were depression (scale of 1-100), well-being (scale of 1-7), and loneliness (scale of 20-140). The goal of this project is to address the following questions based on survey data: 1) How and to what extent people are staying socially connected despite physical distancing, and describe how different demographic groups (e.g. age, gender, income) are doing so, and 2) Evaluate how learning and adaptive behaviors and personal beliefs about age/abilities predict successful social connectivity, higher subjective well-being, and lower levels of isolation and loneliness during the pandemic.</p></div>
          <div class="col-sm-4 justify-content-center text-left">
            <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Bryan Gonzalez</li><li>Evan Magana</li><li>Anushka Pandya</li><li>Manyi Yao</li></ul></p></div><br/>
            <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Esra Kurum</li><li>Analisa Flores</li></ul></p></div><br/>
            {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div> */}
          </div>
        </div>
        <div class="w-100"></div>
        <div class="row-sm-8 justify-content-center text-left"><h4><b>About UCR</b></h4><p>The University of California, Riverside (UCR or UC Riverside) is a public land-grant research university in Riverside, California. It is one of the ten campuses of the University of California system. The main campus sits on 1,900 acres (769 ha) in a suburban district of Riverside with a branch campus of 20 acres (8 ha) in Palm Desert. In 1907, the predecessor to UCR was founded as the UC Citrus Experiment Station, Riverside which pioneered research in biological pest control and the use of growth regulators responsible for extending the citrus growing season in California from four to nine months. Some of the world's most important research collections on citrus diversity and entomology, as well as science fiction and photography, are located at Riverside.

          UCR's undergraduate College of Letters and Science opened in 1954. The Regents of the University of California declared UCR a general campus of the system in 1959, and graduate students were admitted in 1961. To accommodate an enrollment of 21,000 students by 2015, more than $730 million has been invested in new construction projects since 1999.
          {/* [10][11][needs update] Preliminary accreditation of the UC Riverside School of Medicine was granted in October 2012 and the first class of 50 students was enrolled in August 2013. It is the first new research-based public medical school in 40 years */}
        </p></div>
      </div></div>
    )
  }
}





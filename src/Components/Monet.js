import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/monet.avif'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/Monet.jpg'

export default class Monet extends Component {
  render() {
    return (
      <div>   <img src={pic2} width="715" height="400" />      <img src={pic3} width="715" height="400" />
      <div class="container text-justify">
        <br/>
      <div class="row">
        <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>Monet Analytics is a fast and cheap AI-powered tool for short video performance optimization based on data consisting of human reactions and engagements to the video frame by frame. In order to collect the data, the audience needs to turn on their camera with the incentives of cash. Monet uses a lower sample testing method (N = 30) to analyze the subconscious and conscious response of the audience (ages 18-50 years old) to give an overall score and some indication of what is happening with the video and how it can be improved. The current proprietary methodology to rate content using metrics of the subconscious and conscious has a favorable correlation with TikTok performance data of views per follower. The goal of this project is to use the existing data set to build an improved multivariate optimization algorithm that best predicts performance in relation to the TikTok behavioral metrics.</p></div>
        <div class="col-sm-4 justify-content-center text-left">
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Stella Aurelia</li><li>Kavin Phabiani</li><li>Siddhant Purohit</li><li>Poala Zelaya</li></ul></p></div><br/>
          <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Anurag Bist</li><li>Xinping Cui</li><li>Ramon Solves</li><li>Joshua Ziliak</li></ul></p></div><br/>
          {/* <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Presentation</b></h4><a href="">Poster</a></div> */}
        </div>
      </div>
      <div class="w-100"></div>
      <div class="row-sm-8 justify-content-center text-left"><h4><b>About Monet Analytics</b></h4><p>Monet is the first and only AI-powered analytics platform to capture and contextualize subconscious human emotions at scale and harmonize them with conscious, survey-based attitudes and opinions.</p></div>
   
        
      </div></div>
    )
  }
}


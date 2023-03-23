import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCr.png'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCR2.jpg'
export default class UCR3 extends Component {
  render() {
    return (
        <div><img src={pic2} width="715" height="400" />
      <div class="container text-justify">
        <br />
        <div class="row">
          <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4> 
          <p>Anomaly detection is a widely applicable and widely researched problem. The task of anomaly detection is also commonly known as outlier detection, and can be applied to many types of data. In this case, the task is anomaly detection on graphs with node/edge attributes or attributed networks. Most methods employ some deep learning algorithm, which can be very costly. This project attempts to reduce the complexity of the solution by employing a combination of unsupervised and supervised methods.</p></div>
          <div class="col-sm-4 justify-content-center text-left">
            <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Zubair Qazi</li></ul></p></div><br/>
            <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Vagelis Papalexakis</li></ul></p></div><br/>
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

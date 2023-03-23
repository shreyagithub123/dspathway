import React, { Component } from 'react'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCr.png'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/UCR1.jpg'

export default class UCR1 extends Component {
  render() {
    return (
      <div><img src={pic2} width="715" height="400" /><img src={pic3} width="715" height="400" />
        <div class="container text-justify">
          <br />
          <div class="row">
            <div class="col-sm-8 justify-content-center text-left"><h4><b>About the Project</b></h4><p>
              There has been a rise in conversational bots and artificial intelligence such as Amazon’s Alexa and Google Echo. However, the medical field is still in its nascent stage with a dearth of general health bots that can identify drug and disease queries from users as well as diagnose problems with their health. One issue is that the plethora of publicly accessible medical data is extremely unstructured. For example, doctor’s notes contain symptoms that are present as well as symptoms not present. Medical dictation is also not easily parsable for the layperson as medical terminology contains millions of words. Thus, structuring knowledge in the form of graphs or tables is imperative for improving a medical AI’s applicability.
              Expand the capabilities of Lexi, the Medical AI. Two parts:<br />
              1. Interfaces: frontend interface engineering (voice, text, widgets) to expose backend AI capabilities. <br />
              2. Knowledge Graph: identify and ingest reputable sources of information, mine for new hypotheses, confirm and corroborate sources for belief scoring, and structure new knowledge into the graph for AI endpoint servicing.</p></div>
            <div class="col-sm-4 justify-content-center text-left">
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Student Team</b></h4><p><ul><li>Ivan Neto</li><li>Payton Cavanagh</li><li>Chloe Au</li></ul></p></div><br/>
              <div class="row-sm-4 justify-content-center bg-light px-3 py-3"><h4><b>Mentors</b></h4><p><ul><li>Paea LePendu</li></ul></p></div><br/>
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

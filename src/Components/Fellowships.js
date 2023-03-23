import React, { Component } from 'react'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/ds.jpeg'

export default class Fellowships extends Component {
  render() {
    return (
      <div>
        <img src={pic} width="1500" height="500" /><br /><br />
        <div class="container text-justify">

          <div class="row">
            <div class="col-sm-8">
              <h3><b>Data Science Fellowship</b></h3>
              <div class="">
                <p>
                  The Summer Fellowship program provides students at all levels (community college, undergraduate and Masters) an opportunity to work on real-projects in collaboration with faculty and industry / community partners.

                  <br />The Summer Fellowship program is 8-weeks and includes :<br />
                  1) Data Science training / education, <br />
                  2) Team-based projects, <br />
                  3) Curriculum development and outreach, and <br />
                  4) Professional development. </p></div>
              <div class="container">
                <h3><b>Application Materials</b></h3>
                <li>Statement of Interest (2 page, double-spaced)</li>
                <li>CV / Resume</li>
                <li>Unofficial Transcripts</li>
                <li>Letter of Recommendation (1 or 2, depending on your school)</li>
              </div>
            </div>
            <div class="col-sm-4">
              <h3><b>Highlights</b></h3>
              <li>Stipend award, up to $5,000</li>
              <li>Hands-on Training in Data Science</li>
              <li>Outreach and Mentoring</li>
              <li>Be an ambassador for data science at your home institution</li>
              <li>Application Deadline: March 31, 2023</li>
              <li>Fellowship Timeline: June 23rd - August 18th </li>
            </div>
          </div>
        </div>
        <br />


        <div class="card">
          <div class="card-body">
            <p><h3><center><a href="https://docs.google.com/forms/d/e/1FAIpQLSd33DGcU5i_vQsZDlnbe40XVILaBPE64GJVTM7P9mn9W4eABQ/viewform">APPLY HERE</a></center></h3></p>
          </div>
        </div>

      </div>
    )
  }
}

import React, { Component } from 'react'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/csuimg.jpeg'


export default class CSU extends Component {
  render() {
    return (
      <div>
          <img src={pic} width="1450" height="500"/><br/>
    <div class="container">
      <h3>Data Science at CSU San Bernardino </h3>
<p>
New data science initiatives to build a more comprehensive and inclusive program. CSUSB has ample reason to focus on the specialized needs of Data Science training, and have taken steps to capitalize on opportunities for our students to benefit from the growing technology-based industries in the region. The DS-PATH program will help to create new degree programs and support the expansion of existing data science courses.

Currently, we are working on three initiatives for creating new programs: <br/>
1) Data Science GE Pathway, which includes a combination of multi-disciplinary GE courses that introduce the breadth of data science and fulfill  students’ GE requirement;  <br/>
2) Data Science Minor, which is designed to provide an opportunity for students in all majors to acquire basic knowledge and skills in data science; and  <br/>
3) Certificate in Data Science, which is mainly for working professionals who seek to enhance their data science skill-set. <br/>

In addition to course transformations, we expect the targeted summer fellowship program, high impact practices of project-based learning and transfer advising will have a tangible and positive impact on student success.
</p>
    </div>
      </div>
    )
  }
}

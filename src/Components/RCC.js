import React, { Component } from 'react'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/RCC-campus.jpeg'

export default class RCC extends Component {
  render() {
    return (
      <div>
        <img src={pic} width="1500" height="400" /><br /><br />
        <div class="container text-justify">
          <h3><b>Data Science at Riverside Community College District (RCCD)</b></h3>
          <p>Riverside Community College District (RCCD) includes three community colleges, Moreno Valley College, Riverside City College, and Norco College, all are located in the Inland Empire. <br /><br />

            In partnership with UC Riverside, RCCD proudly presents DS-PATH, a pathway that avails students the opportunity to earn an Associate Degree in Data Science or Data Analytics certificate while planning for UCR transfer to further pursue their undergraduate and graduate education in this field. In this pathway, students will learn the foundation in data analysis, in which students will model, synthesize, and present data sets for business decision making. Courses will focus on the techniques and tools to extract data from various data sources, model, integrate data, and visualize data for organizational decision making and intelligence gathering. The program prepares students for entry-level jobs, or to help them advance into careers, such as Operation Data Analyst, Business Analytics Specialist, System Data Analyst, Data Visualization Developer, Test Data Analyst, and Market Research Analyst. Topics covered will include statistics, research methods,SQL queries, systems analysis, design, and applied predictive analytics.<br /><br />

            RCCD recognizes the importance of fostering early interest in Data Science through STEM education. In 2022, with existing partnership with local school districts and UCR, RCCD will establish Data Science dual-enrollment and Data Science expedition programs to engage local youths in relevant and real-world application of this field. Through the expedition programs and Data Science related events, students will be able to interact with faculty and professionals in identifying potential solutions that address local community problems using data analytic approaches. These programs aim to flourish student exploration, engagement, and connection to the DS PATH while strengthening the technical workforce in the Inland Empire region.
            <br /><br />
            <b>Program Requirement: </b><br />
            Before entering this program, student must complete MAT – 35 and MAT-10 or MAT-23 or qualifying placement level in mathematics to be successful in courses in the program.
            <br /><br />
            <b>Program Learning Outcomes:</b><br />
            Upon successful completion of this program, students should be able to:<br />
            1.  Identify, extract, clean and maintain data in databases.<br />
            2.  Interpret and evaluate data trends or patterns in complex data sets using statistical techniques, analytic methods, and tools.<br />
            3.  Create and monitor reports to preserve data quality, identify critical issues, trends, and potential solutions.<br />
          </p>
        </div>
      </div>
    )
  }
}

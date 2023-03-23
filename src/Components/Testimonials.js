import React, { Component } from 'react'
import pic1 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test1.jpg'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test2.jpg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test3.jpg'
import pic4 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test4.jpg'
import pic5 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test5.jpg'
import pic6 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test6.jpg'
import pic7 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test7.jpg'
import pic8 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/test8.jpeg'

export default class Testimonials extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-sm-3"><img src={pic3} width="400" height="250"/></div>
          <div class="col-sm-3"><img src={pic8} width="400" height="250" /></div>
          <div class="col-sm-3"><img src={pic2} width="400" height="250"/></div>
          <div class="col-sm-3"><img src={pic1} width="400" height="250"/></div>
        </div>
        <div class="row">
          <div class="col-sm-3"><img src={pic5} width="400" height="250"/></div>
          <div class="col-sm-3"><img src={pic6} width="400" height="250" /></div>
          <div class="col-sm-3"><img src={pic4} width="400" height="250"/></div>
          <div class="col-sm-3"><img src={pic7} width="400" height="250"/></div>
        </div>
        <br/>
        <div class="container text-justify">
          <div class="row">
            <div class="col-sm-6">
              <h5><b>Vishal Menon</b></h5>
              <p>I really enjoyed learning about the different aspects of data science and analytics as a whole. Through weekly presentations, I learned how to explain complicated topics in a digestible way for my peers and. I was also exposed to so many different softwares, some of which I had no idea were tools used for data analysis. This fellowship has been an extremely valuable learning experience for me.</p>
            </div>
            <div class="col-sm-6">
              <h5><b>Ivan Neto</b></h5>
              <p>The Data Science Pathways experience was wonderful over this summer. Not only did all of us gain an invaluable experience of how research is done in the real world, but we also shared a space and community of people who are all seeking a common goal: to become Data Scientists. Among other aspects of the program, what captured my attention the most was how involved and enthusiastic all of the guests speakers were when sharing their work. 
                
                {/* This motivated me very much to keep pursuing this type of career, as I seek fulfillment in the work that I do. Further, as an undergraduate student who has always had structured plug-and-play experiences with research, this program taught me a real lesson of unstructured work management. Research is all about the unknown facts and methods of the world, which understandably can seem daunting when we first start out. But, through the involved process of time and thinking, we were able to come up with our own work flow which reduced the unstructured nature of the project for our advantage. Overall, taking part in a program like this is an invaluable experience that I hope to have again in the future. */}
                </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
            <h5><b>Ishika Rakesh</b></h5>
            <p>The experience I had in the 2022 DS-PATH Summer Fellowship Program was a very insightful one. We worked with our teams and mentors, got familiar with tools that are used in this field, and created projects with large sets of data that we were given to work with. 
              {/* We also had guest speakers from the industry who would explain more about what they do and provide insight along with grad students and mentors who held workshops that we could follow along with that demonstrate concepts and tools that are really useful in Data Science. Overall, it was a great learning opportunity to be part of! */}
              </p>
            </div>
            <div class="col-sm-6">
            <h5><b>Liliana Darch</b></h5>
            <p>My career goal is to pursue a Masters in Data Science and become a Data Scientist. I enjoy problem-solving and I like to use data to draw conclusions about problems. Data Science has the potential to improve the way we live and work. For that reason, I'd love to have the opportunity to work in projects like predicting earthquakes or predicting volcanic eruptions by analyzing big data and extracting meaningful information.  </p>

            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
            <h5><b>Andrii Dovhaniuk</b></h5>
            <p>The 2022 DS-PATH was an amazing oportunity to learn more abot Data Science. I didn't have a clear image of what I need to succeed in my major and here I was able to learn that. Hence, I know on what part I should focus more and what choices I have after graduation. Also, this program prepared me for interviews for which I wasn't ready and was very nervous. Nevertheless, now I know what I should work on to be ready for interviews in Data Science field. In my opinion, Drs. Salloum and Flores did a great job on helping students!</p>
            </div>
            <div class="col-sm-6">
            <h5><b>Jay Upadhyay</b></h5>
            <p>"The DS Fellowship is comprehensive program equipping me with knowledge and skills required to succeed within data science.

I love how much support there was to gain skills and knowledge. Throughout the fellowship we had many workshops and got to interview many professionals in different field. Through this I gained a wide variety of skills. By the end I felt ready for both industry and higher education pathways.

Another aspect I loved was being able to connect with other likeminded peers. 
{/* Each week, we'd learn about their own progress and approaches to their own problems. This exposed us to different types of problems and solutions and occasionally served as inspiration to solutions for our own problems. */}

{/* The project based problems are a great alternative to the traditional learning environment using instead project-based learning. It felt more authentic to what real work in academia or industry would look like. */}

{/* The faculty and mentors were knowledgeable, approachable, and quite skillful at leveraging the online nature of the program. Analisa and Mariam outdid themselves setting up this wonderful opportunity for students.  */}

{/* I cannot overstate the importance of the program. It has been invaluable to me. I highly recommend this program to any undergraduate or master students looking to level up their skills and gain more exposure to data science! */}
"
</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

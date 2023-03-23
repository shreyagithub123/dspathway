import React, { Component } from 'react'
import pic1 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/mariam.jpeg'
import pic2 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/analisa.jpeg'
import pic3 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/lependu.jpeg'
import pic4 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/vas.jpeg'
import pic5 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/zinping.jpeg'
import pic6 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/esra.jpeg'
import pic7 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/amr.jpeg'
import pic8 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/wen.jpeg'
import pic9 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/yun.jpeg'
import pic10 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/jaikin.jpeg'
import pic11 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/ronald.jpeg'
import pic12 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/qing.jpeg'
import pic13 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/hani.jpeg'
import pic14 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/kasey.jpeg'
import pic15 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/caroline.jpeg'
import pic16 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/mark.jpeg'
import pic17 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/Mary-Legner.jpeg'
import pic18 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/antony.png'
import pic19 from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/malik.jpeg'

export default class People extends Component {
  render() {
    return (
      <div>
        <br />
        <div class="container">
          <p><center><b><h3>UC Riverside Faculty</h3></b></center></p>
          <div class="row">
            <div class="col-sm-3"><div class=""><img src={pic1} width="150" height="150" /></div> <br />Mariam Salloum PI<br />UC Riverside<br />
              Computer Science</div>
            <div class="col-sm-3"><div class=""><img src={pic2} width="150" height="150" /></div>  <br />Analisa Flores
              Co-PI<br />UC Riverside<br />
              Statistics</div>
            <div class="col-sm-3"><div class=""><img src={pic3} width="150" height="150" /> </div> <br /> Paea LePendu
              Co-PI<br />UC Riverside<br />
              Computer Science</div>
            <div class="col-sm-3"><div class=""> <img src={pic4} width="150" height="150" /> </div> <br />Vassilis Tsotras
              Co-PI<br />UC Riverside<br />
              Computer Science</div>
          </div>
          <br />
          <div class="w-100"></div>

          <div class="row">
            <div class="col-sm-3"> <img src={pic5} width="150" height="150" /> <br />Xinping Cui
              Co-PI
              <br />UC Riverside<br />
              Statistics</div>
            <div class="col-sm-3"> <img src={pic6} width="150" height="150" /> <br />Esra Kurum
              Co-I

              <br />UC Riverside<br />
              Statistics</div>
            <div class="col-sm-3"> <img src={pic7} width="150" height="150" /> <br />Amr Magdy
              Co-I
              <br />UC Riverside<br />
              Computer Science</div>
            <div class="col-sm-3"> <img src={pic8} width="150" height="150" /> <br />Wenxiu Ma
              Co-I

              <br />UC Riverside<br />
              Statistics</div>
          </div>

          <div class="w-100"></div><br />
          <p><center><b><h3>CSU San Bernardino Faculty</h3></b></center></p>
          <div class="row">
            <div class="col-sm-3"> <img src={pic9} width="150" height="150" /> <br />Yunfei Hou
              PI<br />CSUSB<br />
              Computer Science</div>
            <div class="col-sm-3"><img src={pic10} width="150" height="150" /> <br />Jeremy Aikin
              Co-PI<br />CSUSB<br />
              Mathematics</div>
            <div class="col-sm-3"><img src={pic11} width="150" height="150" /> <br />Ronald Salloum
              Co-PI<br />CSUSB<br />
              Computer Science</div>
            <div class="col-sm-3"><img src={pic12} width="150" height="150" /> <br />Qingquan Sun
              Co-PI<br />CSUSB<br />
              Computer Science</div>
            <div class="w-100"></div><br />
            <div class="col-sm-3"><img src={pic13} width="150" height="150" /> <br />Hani Aldirawi
              Co-PI <br />CSUSB<br />
              Mathematics</div>

          </div>

          <div class="w-100"></div><br />
          <p><center><b><h3>Community College Faculty</h3></b></center></p>
          <div class="row">
            <div class="col-sm-4"><img src={pic14} width="150" height="150" /> <br />Kasey Nguyen
              PI<br />Moreno Valley College
              <br />
              Computer Science</div>
            <div class="col-sm-4"><img src={pic15} width="150" height="150" /> <br />Caroline Hutchings
              Co-PI<br />Norco College<br />
              Mathematics / Statistics</div>
            <div class="col-sm-4"><img src={pic16} width="150" height="150" /> <br />Mark Lehr
              Co-PI<br />Riverside City College<br />
              Computer Science</div>
          </div>
          <div class="w-100"></div><br />
          <div class="row">
            <div class="col-sm-4"><img src={pic17} width="150" height="150" /> <br />Mary ​Legner
              Co-PI<br />Riverside City College<br />
              Mathematics </div>
            <div class="col-sm-4"><img src={pic18} width="150" height="150" /> <br />Anthony Castro
              Co-I<br />San Bernardino Valley College<br />
              Mathematics </div>
            <div class="col-sm-4"><img src={pic19} width="150" height="150" /> <br />Malik A Stalbert
              Co-I<br />San Bernardino Valley College<br />
              Computer Science</div>
          </div>



        </div>
      </div>
    )
  }
}

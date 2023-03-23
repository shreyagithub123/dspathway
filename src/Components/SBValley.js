import React, { Component } from 'react'
import pic from '/Users/shreya_godishala/Desktop/my-react-app/src/Assets/SBV.jpeg'
export default class SBValley extends Component {
  render() {
    return (
      <div>
                <img src={pic} width="1450" height="400" /><br/>
        <div class="container">
          <h3>Data Science at San Bernadino College</h3>
          <p> To Be Announced</p>
        </div>
      </div>
    )
  }
}

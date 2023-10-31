import Travel from "../images/travel 1.jpg";
import Transport from "../images/travel 2.jpg";
import Burj from "../images/Service.jpg";
import Dubai from "../images/contact.jpg";

import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="Image">
          <img alt="" src={this.props.img1} />
          <img alt="" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;

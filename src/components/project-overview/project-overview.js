import React, { Component } from 'react';
import { Link } from "gatsby"

import Card from "../card/card"

class ProjectOverview extends Component {
  render() {
    return (
      <Card>
        <img src={this.props.image} alt={this.props.altTag}/>
        <div className="pad">
          <p>{this.props.description}</p>
          <Link to={this.props.link}><h3>{this.props.heading}</h3></Link>
          <Link to={this.props.link}>{this.props.linkText}</Link>
        </div>
      </Card>
    );
  }
}

export default ProjectOverview
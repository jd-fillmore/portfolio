import React, { Component } from 'react';
import { Link } from "gatsby"

import Card from "../card/card"

class ProjectOverview extends Component {
  render() {
    return (
      <Card>
        <img src={this.props.image} alt="placeholder"/>
        <p>{this.props.description}</p>
        <h3>{this.props.heading}</h3>
        <Link to={this.props.link}>{this.props.linkText}</Link>
      </Card>
    );
  }
}

export default ProjectOverview
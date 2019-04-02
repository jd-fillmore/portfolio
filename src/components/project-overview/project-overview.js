import React, { Component } from 'react';
import { Link } from "gatsby"

import Card from "../card/card"

class ProjectOverview extends Component {
  render() {
    return (
      <Card>
        <img src="https://via.placeholder.com/350x350" alt="placeholder"/>
        <h1>{this.props.heading}</h1>
        <p>{this.props.description}</p>
        <Link to={this.props.link}>{this.props.linkText}</Link>
      </Card>
    );
  }
}

export default ProjectOverview
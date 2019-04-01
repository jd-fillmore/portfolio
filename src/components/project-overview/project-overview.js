import React, { Component } from 'react';
import { Link } from "gatsby"

import Card from "../card/card"

class ProjectOverview extends Component {
  render() {
    return (
      <Card>
        <h1>{this.props.heading}</h1>
        <p>{this.props.description}</p>
        <p>(image)</p>
        <Link to={this.props.link}>{this.props.linkText}</Link>
      </Card>
    );
  }
}

export default ProjectOverview
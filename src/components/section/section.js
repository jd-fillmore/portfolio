import React, { Component } from 'react';

import '../section/section.scss';

class Section extends Component {
  render() {
    return (
      <section className={this.props.className}>{this.props.children}</section>
    );
  }
}

export default Section;
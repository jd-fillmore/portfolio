import React, { Component } from 'react';

import '../container/container.scss'

class Container extends Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    );
  }
}

export default Container;
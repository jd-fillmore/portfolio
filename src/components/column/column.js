import React, { Component } from 'react';

import '../column/column.scss';

class Column extends Component {
  render() {
    return (
      <div className={this.props.className}>{this.props.children}</div>
    );
  }
}

export default Column;
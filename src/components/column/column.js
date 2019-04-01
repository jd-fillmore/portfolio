import React, { Component } from 'react';

import '../column/column.scss';

class Column extends Component {
  render() {
    return (
      <div className="column">{this.props.children}</div>
    );
  }
}

export default Column;
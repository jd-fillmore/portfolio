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

// Styles

// const Column = styled.div`
//   display: block;
//   flex-basis: 0;
//   flex-grow: 1;
//   flex-shrink: 1;
//   padding-left: .75rem;
//   padding-right: .75rem;
// `;
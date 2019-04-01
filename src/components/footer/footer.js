import React, { Component } from 'react';

import '../footer/footer.scss'
import Container from '../container/container'
import Column from '../column/column'

class Footer extends Component {
  render() {
    return (
      <Container>
        <Column>
        <footer>
          <p>© {new Date().getFullYear()} | Built with Gatsby + React + Flexbox</p>
        </footer>
        </Column>
      </Container>
    );
  }
}

export default Footer;
import React from 'react';
import { Tab } from 'react-bootstrap';



class LogTab extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab {...this.props}>Tab log content</Tab>
    );
  }
}

export default LogTab;

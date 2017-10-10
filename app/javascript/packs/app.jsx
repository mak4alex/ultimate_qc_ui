// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'

import { Grid, Row, Tabs, Tab } from 'react-bootstrap'


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Tabs defaultActiveKey={1} id="main-tabs">
            <Tab eventKey={1} title="QC Config">Tab 1 content</Tab>
            <Tab eventKey={2} title="Row Data">Tab 2 content</Tab>
            <Tab eventKey={3} title="Logs">Tab 3 content</Tab>
          </Tabs>
          Hello {this.props.name}!
        </Row>
      </Grid>
    );
  }
}

export default App

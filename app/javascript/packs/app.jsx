import './styles'

import React from 'react';
import QCConfigTab from './qc_config_tab';
import LogTab from './log_tab';
import { Col, Grid, Row, Tabs } from 'react-bootstrap';


class App extends React.Component {

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey={1} id="main-tabs">
              <QCConfigTab/>
              <LogTab/>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;

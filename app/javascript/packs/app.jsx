import React from 'react';
import { Col, Grid, Row, Tab, Tabs } from 'react-bootstrap';
import QCConfigTab from './qc_config_tab';
import LogTab from './log_tab';


class App extends React.Component {

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey={1} id="main-tabs">
              <QCConfigTab eventKey={1} title="QC Config"/>
              <LogTab      eventKey={2} title="Logs"/>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;

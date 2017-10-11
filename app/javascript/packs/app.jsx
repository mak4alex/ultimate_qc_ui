// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
import './styles'

import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import { Col, Grid, Row, Tabs, Tab } from 'react-bootstrap';

import brace from 'brace';
import AceEditor from 'react-ace';

import default_config from './default_config'

import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Tabs defaultActiveKey={1} id="main-tabs">
              <Tab eventKey={1} title="QC Config">
                <SplitterLayout customClassName="row">
                    <Col md={12}>
                      <AceEditor
                        mode="javascript"
                        theme="github"
                        name="ultimate_editor"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        fontSize={14}
                        showPrintMargin={true}
                        showGutter={true}
                        highlightActiveLine={true}
                        value={default_config}
                        setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
                          enableSnippets: true,
                          showLineNumbers: true,
                          tabSize: 2,
                        }}
                        width="100%"
                        editorProps={{
                          "blockScrolling": true,
                          "height": "100%",
                          "width": "100%"
                        }}
                        commands={[{
                          name: 'recalc',
                          bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter', lin: 'Ctrl-Enter'},
                          exec: () => { console.log('key-binding used')}
                        }]}
                      />
                    </Col>

                    <Col md={12}>
                      <h2>dsadasdsdas</h2>
                    </Col>
                </SplitterLayout>


              </Tab>
              <Tab eventKey={2} title="Row Data">Tab 2 content</Tab>
              <Tab eventKey={3} title="Logs">Tab 3 content</Tab>
            </Tabs>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App

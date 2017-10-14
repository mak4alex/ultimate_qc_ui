import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import brace from 'brace';
import AceEditor from 'react-ace';
import default_config from './default_config'
import { Col, Grid, Row, Tabs, Tab } from 'react-bootstrap';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';



class QCConfigTab extends React.Component {

  render() {
    return (
      <Tab eventKey={1} title="QC Config">
        <SplitterLayout customClassName="row">
            <Col md={12}>
              <SplitterLayout vertical={true} customClassName="row">
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
                    editorProps={{$blockScrolling: true}}
                    width="100%"
                    commands={[{
                      name: 'validate',
                      bindKey: {win: 'Ctrl-Enter', mac: 'Command-Enter', lin: 'Ctrl-Enter'},
                      exec: () => { console.log('key-binding used for validate')}
                    },{
                      name: 'load',
                      bindKey: {win: 'Ctrl-Space', mac: 'Command-Space', lin: 'Ctrl-Space'},
                      exec: () => { console.log('key-binding used for load')}
                    }]}
                    onSelectionChange={(selection, event) => { 
                      console.log('onSelectionChange'); 
                      console.log(event);
                      console.log(selection.getCursor());
                    }}
                  />
                </Col>
                <Col md={12}>
                  <h3>row data here</h3>
                </Col>
              </SplitterLayout>
            </Col>
            <Col md={12}>
              <h2>dsadasdsdas</h2>
            </Col>
        </SplitterLayout>
      </Tab>
    );
  }

}


export default QCConfigTab;

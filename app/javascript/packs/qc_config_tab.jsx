import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import brace from 'brace';
import AceEditor from 'react-ace';
import defaultConfig from './default_config'
import sampleRawData from './sample_raw_data'
import RawDataPanel from './raw_data_panel'
import { Col, Grid, Row, Tabs, Tab } from 'react-bootstrap';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';



class QCConfigTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      config: defaultConfig,
      cursorPosition: {
        row: 0,
        column: 0
      },
      selectedRawDataFields: [],
      rawData: sampleRawData
    };
    this.handleConfigChange    = this.handleConfigChange.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleLoadRawData     = this.handleLoadRawData.bind(this);
  }

  handleConfigChange(value, event) {
    console.log("handleConfigChange");
    this.setState({
      config: value,
      cursorPosition: {
        row: event.end.row,
        column: event.end.column
      }      
    });
  }

  handleLoadRawData(event) {
    console.log('handleLoadRawData')
    console.log("cursorPosition")
    console.log(this.state.cursorPosition)
    let variants = [['brand', 'product_name'], ['images_count']]
    this.setState({
      selectedRawDataFields: variants[Math.floor(Math.random()*variants.length)]
    })
    console.log(this.state.selectedRawDataFields)
  }

  handleSelectionChange(selection, event) {
    console.log('handleSelectionChange');
    this.setState({
      cursorPosition: {
        row: selection.getCursor().row,
        column: selection.getCursor().column
      }
    });
  }

  render() {
    return (
      <Tab {...this.props}>
        <SplitterLayout customClassName="row">
            <Col md={12}>
              <SplitterLayout vertical={true} customClassName="row">
                <Col md={12}>
                  <AceEditor
                    mode="javascript"
                    theme="github"
                    name="ultimate_editor"
                    onLoad={this.onLoad}
                    onChange={this.handleConfigChange}
                    onSelectionChange={this.handleSelectionChange}
                    fontSize={14}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={this.state.config}
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
                      exec: this.handleLoadRawData
                    }]}                    
                  />
                </Col>
                <RawDataPanel data={sampleRawData} selectedFields={this.state.selectedRawDataFields}/>
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

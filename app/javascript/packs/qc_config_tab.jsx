import React from 'react';
import SplitterLayout from 'react-splitter-layout';
import defaultConfig from './default_config'
import sampleRawData from './sample_raw_data'
import ValidatedDataPanel from './validated_data_panel'
import ConfigEditorPanel from './config_editor_panel'
import RawDataPanel from './raw_data_panel'
import { Col, Grid, Row, Tabs, Tab } from 'react-bootstrap';



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
      rawData: sampleRawData,
      validatedData: []
    };
    this.handleConfigChange    = this.handleConfigChange.bind(this);
    this.handleSelectionChange = this.handleSelectionChange.bind(this);
    this.handleLoadRawData     = this.handleLoadRawData.bind(this);
    this.handleValidateData    = this.handleValidateData.bind(this);
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
    console.log('cursorPosition')
    console.log(this.state.cursorPosition)
    let variants = [['brand', 'product_name'], ['images_count']]
    this.setState({
      selectedRawDataFields: variants[Math.floor(Math.random()*variants.length)]
    })
    console.log(this.state.selectedRawDataFields)
  }

  handleValidateData(event) {
    console.log('handleValidateData')
    window.eval(this.state.config)
    console.log(patch_count)
    const validatedData = this.state.rawData.map(row => {
      const t = patch_count(
        {}, 
        {
          'images_count': parseInt(row['comp_images_count'])
        }
      );
      t['label']   = 'Number of Images'
      t['shop_id'] = row['comp_shop_id']
      return t;
    })

    console.log(validatedData)
    this.setState({
      validatedData: validatedData
    });
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
                <ConfigEditorPanel 
                  config={this.state.config}
                  handleConfigChange={this.handleConfigChange}
                  handleSelectionChange={this.handleSelectionChange}
                  handleLoadRawData={this.handleLoadRawData}
                  handleValidateData={this.handleValidateData}
                  handleConfigLoad={this.handleConfigLoad}
                />                
                <RawDataPanel data={this.state.rawData} selectedFields={this.state.selectedRawDataFields}/>
              </SplitterLayout>
            </Col>
            <ValidatedDataPanel data={this.state.validatedData} />
        </SplitterLayout>
      </Tab>
    );
  }

}


export default QCConfigTab;

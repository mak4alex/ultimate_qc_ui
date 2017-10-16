import React from 'react';
import { Col } from 'react-bootstrap';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/snippets/javascript';
import 'brace/theme/github';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';



class ConfigEditorPanel extends React.Component {

  render() {
    return ( 
      <Col md={12}>
	      <AceEditor
	        mode="javascript"
	        theme="github"
	        name="ultimate_editor"
	        onLoad={this.props.handleConfigLoad}
	        onChange={this.props.handleConfigChange}
	        onSelectionChange={this.props.handleSelectionChange}
	        fontSize={14}
	        showPrintMargin={true}
	        showGutter={true}
	        highlightActiveLine={true}
	        value={this.props.config}
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
	          exec: this.props.handleValidateData
	        },{
	          name: 'load',
	          bindKey: {win: 'Ctrl-Space', mac: 'Command-Space', lin: 'Ctrl-Space'},
	          exec: this.props.handleLoadRawData
	        }]}                    
	      />
      </Col>
    );
  }

}

export default ConfigEditorPanel;

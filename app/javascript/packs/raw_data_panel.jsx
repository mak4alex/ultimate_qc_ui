import React from 'react';
import { Col, Grid, Row, Tabs, Tab, Table, Well } from 'react-bootstrap';


class RawDataPanel extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let selectedFields = this.props.selectedFields
    let data = this.props.data
    let columns = ["product_id", "shop_id"].concat(selectedFields)
    let types = ['cust_', 'comp_']


    if(selectedFields.length > 0) {
      content = (   
        <Table id="row_data_table" bordered condensed responsive>
          <thead>
            <tr>
              {columns.map(column => (
                <th>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              types.map(type => (
                <tr>
                  {columns.map(column => (
                    <td>{row[type + column]}</td>
                  ))}                   
                </tr>
              ))
            ))}
          </tbody>
        </Table>
      );
    } else {
      content = (
        <Well bsSize="large">
          <h3>No data selected</h3>
        </Well>
      );
    }

    return (
      <Col md={12}>
        {content}
      </Col>
    );
  }

}

export default RawDataPanel;

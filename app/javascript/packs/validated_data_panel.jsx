import React from 'react';
import { Col, Form, FormControl, FormGroup, Row, Table, Well } from 'react-bootstrap';


class ValidatedDataPanel extends React.Component {

  render() {
    const columns = ['Field', 'Shop', 'Etl. val', 'Prd. val', 'Comp']
    const data = this.props.data
    let content;

    if(data.length > 0) {
      content = (   
        <Table id="validated_data_table" bordered condensed hover responsive>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr className={row['comp'] ? 'success' : 'danger'}>
                <td>{row['label']}</td>
                <td>{row['shop_id']}</td>
                <td>{row['et_val']}</td>
                <td>{row['pr_val']}</td>
                <td>{row['comp'] ? 'Valid' : 'Invalid'}</td>              
              </tr>
            ))}
          </tbody>
        </Table>
      );
    } else {
      content = (
        <h3>No validated data</h3>
      );
    }


    return ( 
      <Col md={12}>
        <div className="row well well-sm">
          <Col md={12}>
            <Form horizontal>
              <Col xs={6}>
                <FormGroup controlId="etalons_id">
                  <FormControl type="text" placeholder="etalons id" />
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup controlId="products_id">
                  <FormControl type="text" placeholder="products id" />
                </FormGroup>
              </Col>
            </Form>
          </Col>
        </div>
        <Row>
          <Col md={12}>
            {content}
          </Col>
        </Row>
      </Col>
    );
  }

}

export default ValidatedDataPanel;

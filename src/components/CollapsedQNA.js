import React, { Component } from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
export class CollapsedQNA extends Component {
  render() {
    const { qna } = this.props;
    return (
      <div>
        <Button color='primary' id={qna.q} style={{ marginTop: '1rem' }}>
          {qna.q}
        </Button>
        <UncontrolledCollapse toggler={`#${qna.q}`}>
          <Card>
            <CardBody>{qna.a}</CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    );
  }
}

export default CollapsedQNA;

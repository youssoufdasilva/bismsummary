import React, { useState } from 'react';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import CollapsedQNA from './CollapsedQNA';

const ModuleTabs = (props) => {
  const { content } = props;
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={{ active: activeTab === '1' }}
              onClick={() => {
                toggle('1');
              }}
            >
              CST4310
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={{ active: activeTab === '2' }}
              onClick={() => {
                toggle('2');
              }}
            >
              CST4320
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={{ active: activeTab === '3' }}
              onClick={() => {
                toggle('3');
              }}
            >
              CST4330
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={{ active: activeTab === '4' }}
              onClick={() => {
                toggle('4');
              }}
            >
              CST4350
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId='1'>
            <Row>
              <Col sm='12'>
                <h4>Tab 1 Contents</h4>
                {content.CST4310.map((qna) => {
                  return (
                    <div>
                      <CollapsedQNA qna={qna} />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>
            <Row>
              <Col sm='12'>
                <h4>Tab 2 Contents</h4>
                {content.CST4320.map((qna) => {
                  return (
                    <div>
                      <CollapsedQNA qna={qna} />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='3'>
            <Row>
              <Col sm='12'>
                <h4>Tab 3 Contents</h4>
                {content.CST4330.map((qna) => {
                  return (
                    <div>
                      <CollapsedQNA qna={qna} />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='4'>
            <Row>
              <Col sm='12'>
                <h4>Tab 4 Contents</h4>
                {content.CST4350.map((qna) => {
                  return (
                    <div>
                      <CollapsedQNA qna={qna} />
                    </div>
                  );
                })}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

export default ModuleTabs;

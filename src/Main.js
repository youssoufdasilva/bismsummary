import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import NavbarDemo from './components/NavbarDemo';
import CollapsedQNA from './components/CollapsedQNA';
import ModuleTabs from './components/ModuleTabs';

const TabContent = {
  CST4310: [
    {
      q: 'Question1-1',
      a: 'Answer1-1',
    },
    {
      q: 'Question1-2',
      a: 'Answer1-2',
    },
  ],
  CST4320: [
    {
      q: 'Question2-1',
      a: 'Answer2-1',
    },
    {
      q: 'Question2-2',
      a: 'Answer2-2',
    },
  ],
  CST4330: [
    {
      q: 'Question3-1',
      a: 'Answer3-1',
    },
    {
      q: 'Question3-2',
      a: 'Answer3-2',
    },
  ],
  CST4350: [
    {
      q: 'Question4-1',
      a: 'Answer4-1',
    },
    {
      q: 'Question4-2',
      a: 'Answer4-2',
    },
  ],
};

export default class Main extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className='display-3'>BISM Summary</h1>
          <p className='lead'>
            Business Information Systems Management (BISM) is a course offered
            by Middlesex University that teaches how to design and develop
            information management systems to give competitive advantage to
            organizations that use it best.
          </p>
          <hr className='my-2' />
          <p>
            It offers four modules that teach a different perspective of the
            course:
            <br />
            <b>CST4310</b> - Information Systems Quality Management,
            <br />
            <b>CST4320</b> - Regulation of Electronic Commerce and Information
            Technology,
            <br />
            <b>CST4330</b> - Information Systems Strategy and Management, &
            <br />
            <b>CST4350</b> - Knowledge Management Strategies.
          </p>
          <p className='lead hide'>
            <Button color='success'>
              <a
                style={{ color: 'white' }}
                target='_blank'
                rel='noopener noreferrer'
                href='https://www.mdx.ac.uk/courses/postgraduate/business-information-systems-management-msc-integrated-placement'
              >
                Learn More About The Course
              </a>
            </Button>
          </p>
        </Jumbotron>

        <ModuleTabs content={TabContent} />
        <div style={{ height: '200px', backgroundColor: 'lightgreen' }} />
      </div>
    );
  }
}

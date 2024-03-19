import React from 'react';
import SideNav from './SideNav';
import { Row, Col } from 'react-bootstrap';
import './myStyle.css'; // Assuming you have a CSS file named 'myStyle.css'

function Home(props) {
  return (
    <div className='DashboardDivide'>
      <div className='SideNavbar'>
        <SideNav />
      </div>
      <div>
        <h1>This is Dashboard</h1>
        <h2 className=''>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
        <Row>
          <Col className='Col-6'><i className="fa-solid fa-bars"></i>Shraddha</Col>
          <Col className='Col-6'>Patel</Col>
        </Row>
      </div>
    </div>
  );
}

export default Home;

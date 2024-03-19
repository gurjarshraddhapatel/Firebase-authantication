import React from 'react';
import SideNav from './SideNav'; 
import './myStyle.css'
function Home(props) {
  return (
    <div className='DashoardDivide'>
     
      <div className='SideNavbar'>
        <SideNav /> 
      </div>
      <div>
        <h1>This is DashBoard</h1>
        <h2 className=''>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      </div>
    </div>
  );
}

export default Home;

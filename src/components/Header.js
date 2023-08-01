import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import {Link} from "react-router-dom"
import Logo from "../Images/AIT-white.jpg"



class Header extends React.Component{
    
        constructor(props) {
          console.log(props);
          super(props);
          this.state = {color: "red"};
        }
        render() {
          return (
            <div > 
                <div className="main"  >
                    <nav className="navbar navbar-expand-lg navbar-light bg-gray"  >
                        <a className="navbar-brand" href="#"><img src={Logo}/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"   >
                            <div className="navbar-nav" style={{marginLeft:"30px",paddingLeft:"20px"}}>
                            <Dropdown>
                              <Dropdown.Toggle  id="dropdown-basic" style={{backgroundColor:'gray'}}>
                                Dropdown Button
                              </Dropdown.Toggle>

                              <Dropdown.Menu style={{border:"1px solid black"}}>
                                <Dropdown.Item href="#/action-1" style={{borderBottom:"1px solid black"}}>Front End Cources</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"  style={{borderBottom:"1px solid black"}}>Full Stack Cources</Dropdown.Item>
                                <Dropdown.Item href="#/action-3"  style={{borderBottom:"1px solid black"}}>Mobil-Applications Development</Dropdown.Item>
                                <Dropdown.Item href="#/action-1"  style={{borderBottom:"1px solid black"}}>Cloud Computing</Dropdown.Item>
                                <Dropdown.Item href="#/action-2"  style={{borderBottom:"1px solid black"}}>Data science</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" >SAP</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                           
                            <Link to='/' className="nav-item nav-link  item"  style={{paddingLeft:"30px",color:"black"}} >Home</Link>
                            <Link to='/About' className="nav-item nav-link item "  style={{paddingLeft:"30px"}} >About</Link>
                            <Link to='/Contact' className="nav-item nav-link item" style={{paddingLeft:"30px"}} >Contacts</Link>
                            <Link to='/Placement' className="nav-item nav-link item" style={{paddingLeft:"30px"}} >Placement</Link>
                            <Link to='/Intenship' className="nav-item nav-link item" style={{paddingLeft:"30px"}} >Intenship</Link>
                            <Link to='/Review' className="nav-item nav-link item" style={{paddingLeft:"30px"}} >Review</Link>
                            <Link to='/Blog' className="nav-item nav-link item" style={{paddingLeft:"30px"}} >Blog</Link>


                            </div>
                            
                        </div>
                    </nav>
              </div>
                    

               
            </div>
           
          )
           
        }
      
}
export default Header;
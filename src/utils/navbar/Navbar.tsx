import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

// interface INavProps{
//     currentUser: any
// }

const NavbarComponent = (props: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar className="container-fluid" light expand="lg" style={{}}>
            <NavbarBrand style={{ color: "white", fontSize: "30px", fontStyle: "italic", }}>
                <Link to="/" style={{ color: "white", fontWeight: 800, fontSize: "30px", fontStyle: "italic", }}>SpacePals</Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar style={{ paddingLeft: "40%", }}>
                <Nav className="mr-auto" style={{ fontSize: "20px" }}>

                {
                        props.currentUser ? 
                        <NavItem style={{paddingRight: "20px"}}>
                        <Link to="/dashboard" style = {{color: "white"}}>Dashboard</Link>
                    </NavItem>
                        : ''
                    }

                    {/* <NavItem>
                        <Link to="/home" style = {{color: "white"}}>Home</Link>
                    </NavItem> */}
                    {/* <h3>|</h3> */}
                    {/* <NavItem style = {{paddingRight: "20px"}}>
                        <Link to="/dashboard" style = {{color: "white"}}>Dashboard</Link>
                    </NavItem>
                    <br/><br/> */}
                    {/* <h3>|</h3> */}
                    <NavItem style={{ paddingRight: "20px" }}>

                        <Link to="/about" style={{ color: "white" }}>About us</Link>
                    </NavItem>
                    {/* <br /><br /> */}
                    {/* <h3>|</h3> */}
                    <NavItem style={{ paddingRight: "20px" }}>
                        <Link to="/planet" style={{ color: "white" }}>Planets</Link>

                    </NavItem>
                    {/* <br /><br /> */}
                    {/* <h3>|</h3> */}
                    <NavItem style={{paddingRight:"30px"}}>
                        <Link to="/view-flights" style={{ color: "white" }}>Scheduled Flights</Link>
                    </NavItem>
                    {/* <br /><br /> */}
                    {/* <h3>|</h3> */}
                    {/* <NavItem style = {{paddingRight: "20px"}}>
                        <Link to="/registerCompany" style = {{color: "white"}}>Register a Company</Link>
                    </NavItem> */}
                    {/* <br /><br /> */}
                    {/* <h3>|</h3> */}
                    {/* <NavItem style = {{paddingRight: "20px"}}>
                        <Link to="/ship" style = {{color: "white"}}>Register a Ship</Link>
                    </NavItem> */}
                    {/* <br /><br /> */}
                    {/* <h3>|</h3> */}
                    {/* <NavItem>
                        <Link to="/flight" style = {{color: "white"}}>Register a Flight</Link>
                    </NavItem> */}

                    {
                        props.currentUser ? 
                        <NavItem>
                        <Link to="/logout" style = {{color: "white"}}>Logout</Link>
                    </NavItem>
                        : ''
                    }
                </Nav>
            </Collapse>
        
        </Navbar>
    );
}

export default NavbarComponent;
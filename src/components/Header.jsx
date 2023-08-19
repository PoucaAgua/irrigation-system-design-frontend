import { UserData } from '../ui-components';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button} from 'react-bootstrap';
import '../App.css'; 


function Header({ setShowEtoComponent, user, signOut }) {

    return (
        <Navbar className="App-header">
            <Navbar.Brand
                onClick={() => setShowEtoComponent(true)}
                className="navbar-brand"
            >
                Evapotranspiration
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end mr-4"> 
                <Nav>
                    <Button
                     variant="outline-light"
                     onClick={signOut}
                     >Sign Out</Button>
                    <UserData
                        overrides={{
                            image: {
                                src: user?.attributes?.profile
                            }
                        }}
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar >

    );
}

export default Header;
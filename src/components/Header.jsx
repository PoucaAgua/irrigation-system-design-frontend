import { UserData } from '../ui-components';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../App.css';


function Header({ user, signOut }) {

    return (
        <Navbar className="header">

            <Navbar.Collapse className="justify-content-end mr-4">
                <Nav>
                    <Button
                        className="button-sign-out"
                        variant="outline-light"
                        onClick={signOut}
                    >Sign Out
                    </Button>
                    <UserData
                        overrides={{
                            image: {
                                src: user?.attributes?.profile
                            },
                            Name: {
                                children: user?.attributes?.name
                            }
                        }}
                    />
                </Nav>
            </Navbar.Collapse>
        </Navbar >

    );
}

export default Header;
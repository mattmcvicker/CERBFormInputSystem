import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default function NavBar() {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">CURB FORM INPUT SYSTEM</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Something</Nav.Link>
                    <Nav.Link href="#pricing">Something2</Nav.Link>
                    <Nav.Link href="#pricing">Something3</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */}
            </Navbar>
        </>
    );
}
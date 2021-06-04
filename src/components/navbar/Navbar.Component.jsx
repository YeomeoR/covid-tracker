import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'


const NavBar = () => {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Covid-19 Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title="Where to?" id="basic-nav-dropdown">
                {/* <NavDropdown.Item component={CovidDeaths.Component}>Action</NavDropdown.Item>
                <NavDropdown.Item component={CovidDeaths.Component}>
                  Deaths
                </NavDropdown.Item>
                <NavDropdown.Item href="#cumDeaths/3.3">
                  Cummulitive Deaths
                </NavDropdown.Item>
                <NavDropdown.Divider /> */}
                <NavDropdown.Item href="https://www.yeomeo.dev" target="_blank">
                  www.yeomeo.dev
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
 
export default NavBar;
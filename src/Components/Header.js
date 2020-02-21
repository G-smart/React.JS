import React, { Component } from 'react';
import { 
    Navbar,
    Nav,
    Container,
    
} from 'react-bootstrap';
import logo from '../logo.svg';
import { 
    BrowserRouter as Router,
    Switch, 
    Route, 


} from 'react-router-dom';

import Home from '../Pages/Home';
import Final from '../Pages/Final';
import Project1 from '../Pages/Project1';
import Project2 from '../Pages/Project2';

class Header extends Component {
    render() {
        return (
          <>
           <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
              <Container>
                  <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Alex React
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/final">Final</Nav.Link>
                        <Nav.Link href="/project1">Project 1</Nav.Link>
                        <Nav.Link href="/project2">Project 2</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Container> 
           </Navbar>

           <Router>
               <Switch>
                   <Route exact path="/" component={Home} />
                   <Route path="/final" component={Final} />
                   <Route path="/project1" component={Project1} />
                   <Route path="/project2" component={Project2} />
                   <Route> 404 Page not found , please try to type it again ))</Route>
               </Switch>
           </Router>
           </>
        );
    }
}

export default Header;
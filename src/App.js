
import React, { Fragment } from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import {
    BrowserRouter
} from "react-router-dom";
import { AppRoutes } from "./app/routes";


// Bootsratp css
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

    return (
        <div>
            <Fragment>
                <Container fluid>
                    <Row>
                        <Col>
                            <Navbar bg="light" expand="lg">
                                <Container>
                                    <Navbar.Brand href="/"> <h2>Albelli Ads </h2> </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                </Container>
                            </Navbar>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
            <br/>
            <br/>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
         
        </div>

    );
};


export default App;
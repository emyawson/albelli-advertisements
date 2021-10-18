import React,{ useState } from 'react';
import { Col, Card, Form, Button, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { postAdvertAsync } from "./advertFormSlice";

export const AdvertForm = () => {

    // Hooks
const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [link, setLink]   = useState('');
    const [validUntil, setValidUntil]   = useState('');

    const submitFormHandler = () => {
    
        console.log('GAGAG',title, link, validUntil);
        dispatch(postAdvertAsync({title: title, link:link, valid_until: validUntil}));
    }

    const titleChangeHandler = (evt) =>{
        setTitle(evt.target.value);
    }

    const linkChangeHandler = (evt) =>{
        setLink(evt.target.value);
    }

    const validUntillChangeHandler = (evt) =>{
        setValidUntil(evt.target.value);
    }

    return (
        <Container>
            <Row>
        <Col xs={12} md={6} >
            <Card style={{ minHeight: '180px', marginBottom: '50px' }}>
                <Card.Body>

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" value={title}  onChange={ titleChangeHandler } placeholder="Enter title" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLink">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="text" value={link} onChange={ linkChangeHandler } placeholder="Link Url" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicValidUntil">
                            <Form.Control type="date" value={validUntil} onChange={(evt)=> validUntillChangeHandler(evt)} label="Select date" />
                        </Form.Group>
                        <Button variant="primary" type="button"  onClick={ (evt)=> { evt.preventDefault(); submitFormHandler(); }}>
                            Submit
                        </Button>
                    </Form>


                </Card.Body>
            </Card>
        </Col>
        </Row>
        </Container> );
}

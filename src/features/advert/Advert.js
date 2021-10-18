import React from 'react';
import {  Col,Card } from 'react-bootstrap';


export const Advert = ({ title, valid_until, link}) =>  {


  return (
    <Col xs={12} md={6} >
      <Card style={{ minHeight: '180px', marginBottom: '50px' }}>
      <Card.Body>
         <Card.Title>{title}</Card.Title>
         <p>{new Date(valid_until).toLocaleDateString('en-GB')}</p>
         <Card.Link href={link} target="_blank" style={{ textDecoration: 'none' }}>Visit site</Card.Link>
        </Card.Body>
        </Card>
    </Col>
  );
}

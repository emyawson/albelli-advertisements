import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

import { Advert } from "../advert/Advert";
import { fetchAdsAsync, selectAdverts } from './../advert/advertSlice';

export const Home = () => {

        // Hooks

        const dispatch = useDispatch();

        useEffect(() => {
            
            // Dispatch to fetch advertisement data 
            dispatch(fetchAdsAsync());

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    
    
        // Select dvert data form store
        const adverts = useSelector(selectAdverts);
    
    
    return (
            <Container>
                <Row> 
                    <Col> 
                        <Button variant="outline-info"  >
                        <Link to="/advertisement/create"  style={{ textDecoration: 'none' }}> Create Advert </Link> 
                        </Button>
                    </Col>
                </Row>
                <br/>
                <Row>
                    {adverts.map((adItem) => <Advert {...adItem} key={adItem.id} />)}
                </Row>

            </Container>

    );
}


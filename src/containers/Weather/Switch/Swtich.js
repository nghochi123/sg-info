import React from 'react';

import { Container, Row, Col } from 'reactstrap';


const Switch = (props) =>{
    return (
        <Container>
            <Row>
                <Col><button onClick={()=>props.setChart(1)}>Temperature</button></Col>
                <Col><button onClick={()=>props.setChart(2)}>Humidity</button></Col>
                <Col><button onClick={()=>props.setChart(3)}>Wind Speed</button></Col>
            </Row>
        </Container>
    )
}

export default Switch;
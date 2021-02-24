import React from 'react';
import './Pagination.css'

import { Container, Row, Col } from 'reactstrap';


const Page = (props) =>{
    const page = props.page;

    return (
        <Container>
            <Row>
                <Col><button onClick={()=>props.setPage(page>1?page-1:1)}>Previous Page</button></Col>
                <Col>Page {page}</Col>
                <Col><button onClick={()=>props.setPage(page<17?page+1:17)}>Next Page</button></Col>
            </Row>
        </Container>
    )
}

export default Page;
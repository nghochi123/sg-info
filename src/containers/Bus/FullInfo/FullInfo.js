import React, {useState, useEffect} from 'react';

import Layout from '../../../components/Layout/Layout';
import getFullBusInfo from '../../../scripts/getFullBusInfo';
import Page from '../../../components/Pagination/Pagination';

import { Container, Row, Col } from 'reactstrap';

import './FullInfo.css'

const FullInfo = (props) => {
    const [codes, setCodes] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        getFullBusInfo().then(res=>setCodes(res.value)).catch(e=>e)
    }, [])
    let busCodes = codes.map((i,index) => {
        return index >(page-1)*30 && index < page*30 ? (
            <Container>
                <Row className="some-spacing-below">
                    <Col className="text-align-left">{`${i.BusStopCode}`}</Col>
                    <Col className="text-align-right">{`${i.RoadName}, ${i.Description}`}</Col>
                </Row>
            </Container>
        ) : null;
    })
    return (
    <div>
        <Layout isFullInfo title={"Bus Codes"}>
            <div className="push-down">Note: Not all bus stop codes can be found here</div>
            <Page page={page} setPage={setPage}/>
            <Container>
                <Row className="some-spacing-below">
                    <Col className="text-align-left bold">Bus Stop Code</Col>
                    <Col className="text-align-right bold">Bus Stop Location</Col>
                </Row>
            </Container>
            {busCodes}
        </Layout>
    </div>
    
    
)};

export default FullInfo;
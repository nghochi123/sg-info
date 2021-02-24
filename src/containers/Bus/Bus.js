import React, {useState} from 'react';

import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import busInfo from '../../scripts/getbusinfo';


import { Container, Row, Col } from 'reactstrap';



import './Bus.css'

const Home = (props) => {
    // const busCode = 43259;
    const [input, setInput] = useState("");
    const [buses, setBuses] = useState([]);
    const getBusInfo = (busCode) => {
        busInfo(busCode).then(res=>{
            setBuses(res);
        }).catch(e=>e);
    }
    let bus = buses.map(i => {
        return (
        <Container>
            <Row className="some-spacing-below">
                <Col className="text-align-left">{`${i.ServiceNo}:`}</Col>
                <Col className="text-align-right">{`1: ${Math.floor((Date.parse(i.NextBus.EstimatedArrival)-Date.now())/(1000*60))<=0?"Arriving":`${Math.floor((Date.parse(i.NextBus.EstimatedArrival)-Date.now())/(1000*60))} min`}`}</Col>
            </Row>
        </Container>)
    })
    return (
    <div>
        <Layout title={"Bus Info"}>
            <p className="BusText">Enter Bus Stop Code to get Bus Data</p>
            <Search placeholder={"Input Bus Code"} search={input} setSearch={setInput} returnSearchInfo={getBusInfo}/>
            <div className="pushDown">{buses.length!=0 ?`Bus Stop Code: ${input}` : null}</div>
            {bus}
        </Layout>
    </div>
    
    
)};

export default Home;
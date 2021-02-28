import React, {useState} from 'react';

import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import busInfo from '../../scripts/getbusinfo';


import { Container, Row, Col } from 'reactstrap';



import './Bus.css'

const Bus = (props) => {
    // const busCode = 43259;
    const [input, setInput] = useState("");
    const [buses, setBuses] = useState([]);
    const [noBusError, setNoBusError] = useState(false);
    const [busCode, setBusCode] = useState("");
    const getBusInfo = (busCode) => {
        busInfo(busCode).then(res=>{
            setBuses(res);
            if(res.length===0) {
                setNoBusError(true);
            } else{
                setNoBusError(false);
            }
            setBusCode(busCode);
        }).catch(e=>e);
    }
    const displayTime = time => {
        if(time) return Math.floor((Date.parse(time)-Date.now())/(1000*60))<=0 ? "Arriving": `${Math.floor((Date.parse(time)-Date.now())/(1000*60))} min`;
        else return "Not Available";
    }
    let bus = buses.map(i => {
        return (
        <Container>
            <Row className="some-spacing-below">
                <Col className="text-align-left">{`${i.ServiceNo}:`}</Col>
                <Col className="text-align-right">{displayTime(i.NextBus.EstimatedArrival)}</Col>
                <Col className="text-align-right">{displayTime(i.NextBus2.EstimatedArrival)}</Col>
                <Col className="text-align-right">{displayTime(i.NextBus3.EstimatedArrival)}</Col>
            </Row>
        </Container>)
    })
    let firstRow = (
        <Container>
            <Row className="some-spacing-below">
                <Col className="text-align-left bold">{`Bus Number`}</Col>
                <Col className="text-align-right bold">{`First Bus`}</Col>
                <Col className="text-align-right bold">{`Second Bus`}</Col>
                <Col className="text-align-right bold">{`Third Bus`}</Col>
            </Row>
        </Container>
    )
    let main = (
        <Layout title={"Bus Info"}>
            <p className="BusText">Enter Bus Stop Code to get Bus Data</p>
            <Search placeholder={"Input Bus Code"} search={input} setSearch={setInput} returnSearchInfo={getBusInfo}/>
            <div className="pushDown">{buses.length!==0 ?`Bus Stop Code: ${busCode}` : null}</div><hr></hr>
            {firstRow}
            {bus}
        </Layout>
    )
    if(noBusError){
        main = (
            <Layout title={"Bus Info"}>
                <p className="BusText">Enter Bus Stop Code to get Bus Data</p>
                <Search placeholder={"Input Bus Code"} search={input} setSearch={setInput} returnSearchInfo={getBusInfo}/>
                <div className="pushDown">{buses.length!==0 ?`Bus Stop Code: ${busCode}` : null}</div><hr></hr>
                {firstRow}
                <p>Error: Bus Stop not found, try another bus stop code. <br/>Your Bus Stop code was {busCode}</p>
            </Layout>
        )
    }
    return (
    <div>
        {main}
    </div>
    
    
)};

export default Bus;
import React, {useState} from 'react';

import Layout from '../../components/Layout/Layout';
import Search from '../../components/Search/Search';
import busInfo from '../../scripts/getbusinfo';

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
        return <div><div>{`${i.ServiceNo}:`}</div><div>{`1: ${Math.floor((Date.parse(i.NextBus.EstimatedArrival)-Date.now())/(1000*60))} minutes`}</div><br/></div>
    })
    return (
    <div>
        <Layout title={"Bus Info"}>
            <p className="BusText">Getting Bus Data here</p>
            <Search placeholder={"Input Bus Code"} search={input} setSearch={setInput} returnSearchInfo={getBusInfo}/>
            {bus}
        </Layout>
    </div>
    
    
)};

export default Home;
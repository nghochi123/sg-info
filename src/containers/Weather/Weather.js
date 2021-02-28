import React, {useState, useEffect} from 'react';

import Layout from '../../components/Layout/Layout';
import getWeather from '../../scripts/getWeather';
import WeatherChart from './WeatherChart';
import Switch from './Switch/Swtich';
import WeatherCard from './WeatherCard/WeatherCard';
import Spinner from '../../components/Spinner/Spinner';

import { Container, Row, Col } from 'reactstrap';

import './Weather.css'

const Weather = (props) => {
    //Logic for weather
    const [hourly, setHourly] = useState([]);
    const [current, setCurrent] = useState({});
    const [chart, setChart] = useState(1);
    useEffect(() => {
        getWeather().then(res=>{
            let hourlyArr = [];
            res.hourly.forEach((val, index)=>{
                if(index < 24 && index%2===0){
                    hourlyArr.push(val);
                }
            });
            setHourly(hourlyArr);
            setCurrent(res.current);
        }).catch(e=>e);
    }, []);
    let arr = hourly.map(i=>(i.temp-273.15).toFixed(1));
    let mainText = "Hourly Temperature"
    let subText = "Hover over the points to see temperature"
    let labelText = "Temperature/°C"
    if(chart===2){
        arr = hourly.map(i=>(i.humidity).toFixed(0));
        mainText = "Hourly Humidity"
        subText = "Hover over the points to see humidity levels"
        labelText = "Humidity/%"
    } else if(chart===3){
        arr = hourly.map(i=>(i.wind_speed).toFixed(2));
        mainText = "Hourly Wind Speed"
        subText = "Hover over the points to see wind speed"
        labelText = "Wind speed/ms⁻¹"
    }
    const time = hourly.map(i=>{
        let dateVar = new Date(i.dt*1000);
        let date = dateVar.getDate();
        let hours = dateVar.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
        return `${date} ${hours}`
    });
    let currentTime = new Date(current.dt*1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    let sunrise = new Date(current.sunrise*1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    let sunset = new Date(current.sunset*1000).toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'});
    const currentWeather = (
        <Container>
            <h1 className="WeatherText">Current Weather</h1>
            <h2 className="WeatherSubText">Correct as of <span className="bolder">{currentTime}</span></h2>
            <Row>
                <Col><WeatherCard title={"Temperature"} info={`${(current.temp-273.15).toFixed(1)}°C`} icon={1}/></Col>
                <Col><WeatherCard title={"Humidity"} info={`${current.humidity}%`} icon={2}/></Col>
                <Col><WeatherCard title={"Sunrise"} info={sunrise} icon={4}/></Col>
                <Col><WeatherCard title={"Sunset"} info={sunset} icon={5}/></Col>
            </Row>
        </Container>
    );
    let main = (
        <Layout larger title="Weather">
            {currentWeather}
            <h1 className="WeatherText">{mainText}</h1>
            <p>{subText}</p>
            <Switch setChart={setChart}/>
            <WeatherChart arr={arr} time={time} label={labelText}/>
        </Layout>
        
    )
    if(hourly.length===0){
        main = (
            <Layout larger title="Weather">
                <Spinner/>
            </Layout>
        )
    }
    return (
        <div>
            {main}
        </div>
    );
    
    
};

export default Weather;
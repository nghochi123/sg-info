import React from 'react';

import Layout from '../../components/Layout/Layout';

import './About.css'

const About = props => (
    <Layout title="About" larger>
        <p>This app was built with React, using create-react-app.</p><hr/>
        <h1>Node Packages used</h1>
        <ul>
            <li>React (and other related modules like react-router-dom)</li>
            <li>Chart.js</li>
            <li>Bootstrap</li>
            <li>Axios & Request</li>
            <li>Fontawesome</li>
            <li>Express</li>
        </ul><hr/>
        <h1>APIs used</h1>
        <h2>For Bus Information</h2>
        <p>To get the information for buses, I used LTA's Data Mall and sent requests to the Bus Arrival and Bus Stops API endpoints: <br/><br/><code>https://datamall.lta.gov.sg/content/datamall/en.html</code></p><hr/>
        <h2>For Weather Information</h2>
        <p>To get information for weather in Singapore, I used OpenWeatherMap's API for hourly weather: <br/><br/><code>https://openweathermap.org/</code></p>
    </Layout>
);

export default About;
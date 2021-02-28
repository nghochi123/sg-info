import React from 'react';

import Layout from '../../components/Layout/Layout';

import './Home.css'

const Home = (props) => (
    <div>
        <Layout>
            <p className="HomeText">An app created with React to retrieve data from Singapore's data APIs</p>
            <p>Get Bus Arrival timings by Bus Stop Code as well as Bi-hourly Weather information here</p>
        </Layout>
    </div>
    
    
);

export default Home;
import React from 'react';
import {NavLink} from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import './SomethingWentWrong.css'

const SomethingWentWrong = (props) => (
    <Layout>
        <h1 className="SomethingWentWrong">Something Went Wrong</h1>
        <p>Please try again! Go back to the <NavLink to="/">home page?</NavLink></p>
    </Layout>
        
    
    
);

export default SomethingWentWrong;
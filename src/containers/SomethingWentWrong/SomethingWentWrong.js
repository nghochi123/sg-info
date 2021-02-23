import React from 'react';
import {NavLink} from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import './SomethingWentWrong.css'

const SomethingWentWrong = (props) => (
    <div>
        <h1 className="SomethingWentWrong">Something Went Wrong</h1>
        <hr/>
        <p>Please try again! Go back to the <NavLink to="/">home page?</NavLink></p>
    </div>
    
    
);

export default SomethingWentWrong;
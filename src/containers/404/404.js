import React from 'react';
import {NavLink} from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import './404.css'

const page404 = (props) => (
    <Layout>
        <h1 className="x404Text">404 Page Not Found</h1>
        <p>Please try another link or go to the <NavLink to="/">home page</NavLink></p>
    </Layout>
        
    
    
    
);

export default page404;
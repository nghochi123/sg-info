import React from 'react';
import {NavLink} from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

import './404.css'

const page404 = (props) => (
    <div>
        <h1 className="404Text">404 Page Not Found</h1>
        <hr/>
        <p>Please try another link or go to the <NavLink to="/">home page</NavLink></p>
    </div>
    
    
);

export default page404;
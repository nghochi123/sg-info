import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.css'

const Layout = (props) => {
    return (
        <div className={props.isFullInfo?"layout-container fullInfo" : "layout-container"}>
            <div className="layout-content">
                <Header title={props.title}/>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;
import React from 'react';

import './WeatherCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faWind, faSun, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import * as fa from '@fortawesome/free-regular-svg-icons';

const WeatherCard = (props) => {
    let icon = faThermometerThreeQuarters;
    if(props.icon === 2){
        icon = faTint;
    } else if(props.icon===3){
        icon = faWind;
    } else if (props.icon===4) {
        icon = fa.faSun;
    } else if (props.icon===5){
        icon = faSun;
    }
    return (
        <div class="card">
            <FontAwesomeIcon icon={icon} size="3x"/>
            <div class="container">
                <h2><b>{props.title}</b></h2>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default WeatherCard;


 
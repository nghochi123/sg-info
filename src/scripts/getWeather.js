const axios = require('axios');

const link = "https://express-server-test-hchc.herokuapp.com/weather"
// const link = "http://localhost:9000/weather"; //localhost testing

const hourlyWeather = async() => {
    try {
        const res = await axios.get(link);
        let info = res.data;
        if(!info) return false;
        return info;
    } catch(e) {
        return e;
    }
}

export default hourlyWeather;
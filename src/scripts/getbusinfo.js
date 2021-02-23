const axios = require('axios');

// const base = "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?"
// const headers = { 'AccountKey': 'ZLvdyLjWTPCnY52q09NC1g==', 'accept': 'application/json'}


const getBus = async (busCode) => {
    try {
        const res = await axios.get(`http://localhost:9000/bus/${busCode}`);
        let info = res.data.Services;
        if(!info) return false;
        return info;

    } catch (e) {
        return e;
    }
}

export default getBus;
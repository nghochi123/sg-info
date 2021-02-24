const express = require('express');
const request = require('request');

const app = express();
const port = process.env.PORT || 9000;

const busArrivalUrl = "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?"
const busStopCodes = "http://datamall2.mytransport.sg/ltaodataservice/BusStops"
const headers = { 'AccountKey': 'ZLvdyLjWTPCnY52q09NC1g==', 'accept': 'application/json'}

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/bus/allbuses', (req,res)=>{
    request(
        {url: `http://datamall2.mytransport.sg/ltaodataservice/BusStops`, headers: headers},
        (error, response, body) =>{
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error.message });
            }
        
            res.json(JSON.parse(body));
        }
    )
})

app.get('/bus/:id', (req, res) => {
request(
    { url: `${busArrivalUrl}BusStopCode=${req.params.id}`, headers:headers },
    (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: error.message });
        }

        res.json(JSON.parse(body));
    }
)
});

app.listen(port, () => console.log(`listening on ${port}`));
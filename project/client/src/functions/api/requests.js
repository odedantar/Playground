import request from 'request'

const jsonHeaders = {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client',
    // Key for the ClimaCell API
    'apikey': 'S984VQLZqIKmB7bCS6YFaV9sRUBAtYY7'
};

const historicalTemplate ={
    url: 'http://api2.climacell.co/v2/historical',
    method: 'POST',
    json: {
        geocode: {
          lon: -71.301998792,
          lat: 44.268832258
        },
        location_id: "",
        start_time: "2018-03-19T10:00:00Z",
        end_time: "2018-03-19T11:00:00Z",
        timestep: 60,
        fields: [
          {
            name: "temp",
            units: "F"
          },
          {
            name: "wind_speed",
            units: "knots"
          },
          {
            name: "humidity",
            units: "%"
          }
        ]
      }
};


const jsonRequest = (url, method, body, callback) => {
    
    let reqData = {
        url: url,
        method: method,
        headers: jsonHeaders,
        json: body
    };

    request(reqData, 
        (err, res, body) => {
        if (err || res.statusCode !== 200) {
            return callback(err || {statusCode: res.statusCode});
        };
        callback(null, body);
    });

};

const historicalRequest = (longitude, latitude, start, end, steps, callback) => {
    
    historicalTemplate.json.geocode.lon = longitude;
    historicalTemplate.json.geocode.lat = latitude;
    historicalTemplate.json.start_time = start;
    historicalTemplate.json.end_time = end;
    historicalTemplate.json.timestep = steps;

    jsonRequest(
        historicalTemplate.url, 
        historicalTemplate.method, 
        historicalTemplate.json, 
        callback
    );

};

export { jsonRequest };
export { historicalRequest };
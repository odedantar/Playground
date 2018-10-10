import request from 'request'

const options = {
    url: 'http://api2.climacell.co/v2/historical',
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client',
        'apikey': 'S984VQLZqIKmB7bCS6YFaV9sRUBAtYY7'
    },
    json: {
        "geocode": {
          "lon": -71.301998792,
          "lat": 44.268832258
        },
        "location_id": "",
        "start_time": "2018-03-19T10:00:00Z",
        "end_time": "2018-03-19T11:00:00Z",
        "timestep": 60,
        "fields": [
          {
            "name": "temp",
            "units": "F"
          },
          {
            "name": "wind_speed",
            "units": "knots"
          },
          {
            "name": "humidity",
            "units": "%"
          }
        ]
      }
};

const sendRequest = () => {

  request(options, (err, res, body) => {
      let json = JSON.parse(body);
      console.log(json);
  });

};

export { sendRequest };

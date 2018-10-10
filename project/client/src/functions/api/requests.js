import request from 'request'

const jsonHeaders = {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client',
    // Key for the ClimaCell API
    'apikey': 'S984VQLZqIKmB7bCS6YFaV9sRUBAtYY7'
};

const histReqMetadata ={
    url: 'http://api2.climacell.co/v2/historical',
    method: 'POST'
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

const historicalRequest = (body, callback) => {
    
    jsonRequest(
        histReqMetadata.url, 
        histReqMetadata.method, 
        body, 
        callback
    );

};

export { jsonRequest };
export { historicalRequest };
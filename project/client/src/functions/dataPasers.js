const rawToChart = (rawData) => {

    let chartData = [['Time', 'Temperature', 'Wind Speed', 'Humidity']]
    rawData.forEach(element => {
        let newData = [
            element.observation_time.value,
            element.temp.value,
            element.wind_speed.value,
            element.humidity.value
        ]
        chartData.push(newData);
    });

    return chartData;

};

export {rawToChart};
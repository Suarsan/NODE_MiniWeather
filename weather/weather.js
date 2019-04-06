const axios = require('axios');

const getWeather = async(lat, lon) => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + lat + '&lon=' + lon + '&appid=7f7039837fb9f0d4279f40d0a143e994');
    if (!lat) {
        throw new Error('Error getting weather');
    }
    return res.data.main;
}

module.exports = {
    getWeather
}
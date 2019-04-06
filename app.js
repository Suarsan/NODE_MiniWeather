const location = require('./location/location');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'City to obtain information',
        demand: true
    }
}).argv;

const getInfo = async(address) => {

    try {
        const locationResult = await location.getCoordinates(address);
        const weatherResult = await weather.getWeather(locationResult.lat, locationResult.lon);
        return { location: address, temp: weatherResult.temp };
    } catch (e) {
        console.dir(e);
    }

}

getInfo(argv.address)
    .then(res => {
        console.dir('                                                           '),
            console.dir('       --------------------------------------------           '),
            console.dir('                                                              '),
            console.dir(`             Temperature in ${res.location} is ${res.temp}°              `),
            console.dir('                                                              '),
            console.dir('       --------------------------------------------           ')
        console.dir('                                                              ')
    })
    .catch(err => { throw new Error(err) });
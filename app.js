const location = require('./location/location');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccions de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {

    try {
        const locationResult = await location.getCoordinates(argv.direccion);
        const weatherResult = await weather.getWeather(locationResult.lat, locationResult.lon);
        return { location: argv.direccion, temp: weatherResult.temp };
    } catch (e) {
        console.dir(e);
    }

}

getInfo()
    .then(res => {
        console.dir('                                                 '),
            console.dir('    -----------------------------------------    '),
            console.dir('    |                                       |    '),
            console.dir(`    |   Temperature in ${res.location} is ${res.temp}°   |    `),
            console.dir('    |                                       |    '),
            console.dir('    -----------------------------------------    ')
        console.dir('                                                 ')
    })
    .catch(err => { throw new Error(err) });
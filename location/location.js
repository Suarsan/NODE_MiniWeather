const axios = require('axios');

const getCoordinates = async(location) => {
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeURI(location),
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'a5e9497f62msha2d573c8f065d70p1db384jsn2639d4f613bd'
        }
    });

    const res = await instance.get();
    const data = res.data.Results;
    if (data === 0) {
        throw new Error('No results for ' + location);
    }

    return {
        name: data[0].name,
        lat: data[0].lat,
        lon: data[0].lon
    }
}

module.exports = {
    getCoordinates
}
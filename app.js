const axios = require('axios');

const argv = require('yargs')
                .options({
                    direction: {
                        alias: 'd',
                        desc: 'Permite capturar una dirección',
                        demand: true
                    }
                })
                .argv;

let encodeUrl = encodeURI(argv.direction);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyDhFt0ujT-gFDDMZnG8BxyKLK3e4zCDmyg`)
    .then(resp => {
        let location  = resp.data.results[0].geometry.location;
        let lat = location.lat;
        let lng = location.lng;

        console.log(lat);
        console.log(lng);
    })
    .catch();  

import googleMapsClient from '@google/maps';
//import '@google/maps';

/*
const googleMapsClient = googleMapsClient.createClient({
    key: 'AIzaSyCHk4hlVkWz0PslalG22MLKobgO01PDPDE'
    });
*/


googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
    if (!err) {
        console.log(response.json.results);
    }
});

export default googleMapsClient;
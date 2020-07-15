const request = require("postman-request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZmFpemhhbWVlZCIsImEiOiJja2Mwbm1nZDUwOWs1Mm9qcmNqaG5ubDcyIn0.zqjsmX3u9sq4Rl50moyugw`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location.Try another search", undefined);
    } else {
      const {
        center: [longitude, latitude],
        place_name,
      } = response.body.features[0];
      callback(undefined, {
        latitude: latitude,
        longitude: longitude,
        location: place_name,
      });
    }
  });
};

module.exports = geocode;

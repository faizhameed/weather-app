const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=37a0e1a544688e07b8b42f50d6314e15&query=${latitude},${longitude}&units=m`;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("this is an error", error);
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      callback(undefined, body.current);
    }
  });
};

module.exports = forecast;

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=554fcb5956e40d24ad497c1d63f6e66c&query=${latitude},${longitude}&units=m`;
  request({ url, json: true }, (err, response, body) => {
    if (err) {
      callback(err, undefined);
    }
    if (response.error) callback(response.error, undefined);
    callback(undefined, body);
  });
};

module.exports = forecast;

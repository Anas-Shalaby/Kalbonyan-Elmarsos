const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=554fcb5956e40d24ad497c1d63f6e66c&query=${address}`;
  request({ url: url, json: true }, (err, response, body) => {
    if (err) {
      callback(err, undefined);
    }
    // console.log(response);
    if (response?.error) {
      callback(response.error, undefined);
    }
    callback(undefined, body);
  });
};
module.exports = geocode;

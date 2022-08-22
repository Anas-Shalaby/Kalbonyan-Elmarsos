const request = require("request");
const geoCode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=995c492664d9a3c48ce7537e983b5e87&query=1600%20${address}%20Ave%20NW,%20Washington%20DC`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the server!", undefined);
    } else if (response.body.data.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      const { latitude: lat, longitude: long, country } = response.body.data[0];
      callback(undefined, {
        latitude: lat,
        longitude: long,
        country: country,
      });
    }
  });
};

module.exports = {
  geoCode: geoCode,
};

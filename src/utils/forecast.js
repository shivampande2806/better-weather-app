const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&appid=c258240bb4feb3dc384432ff93cc29ee&units=metric'

    request( {url:url, json:true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.message === "wrong latitude") {
            callback("Wrong latitude! Please check your coordinates.", undefined)
        } else if (body.message === "wrong longitude") {
            callback("Wrong longitude! Please check your coordinates.", undefined)
        } else {
            callback(undefined, "The temperature is " + body.main.temp + " degrees, though it feels like " + body.main.feels_like + " degrees and the humidity is " + body.main.humidity + "%.")
        }
    })
}

module.exports = forecast
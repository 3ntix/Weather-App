"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEATHER_API_KEY = exports.WEATHER_API_URL = exports.GEO_API_URL = exports.geoApiOptions = void 0;
var geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a397054c2cmsh69f84a8a335fd9fp12a32cjsnf0d05c4cc405",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};
exports.geoApiOptions = geoApiOptions;
var GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
exports.GEO_API_URL = GEO_API_URL;
var WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
exports.WEATHER_API_URL = WEATHER_API_URL;
var WEATHER_API_KEY = "a207faae944bb723cd56604c5e72570e";
exports.WEATHER_API_KEY = WEATHER_API_KEY;
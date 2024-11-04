import React from "react";

const HikingMap = () => {
  const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
  const baseUrl =
    "https://api.mapbox.com/styles/v1/digit9/clxia263s005r01o71y1radny/static/";
  const markers = [
    "pin-s-star+B4FF00(-122.69169,45.50287)",
    "pin-s-star+B4FF00(-120.2528,44.66044)",
    "pin-s-star+B4FF00(-123.97459,45.48588)",
    "pin-s-star+B4FF00(-123.95806,45.80317)",
    "pin-s-star+B4FF00(-122.26228,46.16650)",
    "pin-s-star+B4FF00(-123.11807,42.05520)",
    "pin-s-star+B4FF00(-122.21603,46.27757)",
    "pin-s-star+B4FF00(-123.97003,45.359999)",
    "pin-s-star+B4FF00(-123.97445,45.33132)",
    "pin-s-star+B4FF00(-121.65486,45.40243)",
    "pin-s-star+B4FF00(-117.40668,45.06799)",
    "pin-s-star+B4FF00(-121.0662,43.3729)",
    "pin-s-star+B4FF00(-122.21603,46.27757)",
    "pin-s-star+B4FF00(-122.21505,45.62799)",
    "pin-s-star+B4FF00(-121.83221,45.38696)",
    "pin-s-star+B4FF00(-122.28581,42.66290)",
    "pin-s-star+B4FF00(-124.07285,44.77073)",
    "pin-s-star+B4FF00(-117.73552,43.07709)",
  ];
  const center = "-120.5,44.0,6";
  const dimensions = "700x1000";

  const mapUrl = `${baseUrl}${markers.join(
    ","
  )}/${center}/${dimensions}?access_token=${accessToken}`;

  return (
    <img
      src={mapUrl}
      alt="Oregon Hiking Map"
      style={{ width: "50%", height: "auto" }}
    />
  );
};

export default HikingMap;

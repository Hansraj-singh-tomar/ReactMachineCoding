import React, { useState } from "react";

const GioLocation = () => {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const getCoor = () => {
    // geoLocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((response) => {
        // console.log(response);
        // console.log(response.coords.latitude);
        //   console.log(response.coords.longitude);
        setLat(response.coords.latitude);
        setLong(response.coords.longitude);
      });
    } else {
      alert("Geolocation API is not supported");
    }
  };

  const shareData = () => {
    if (navigator.share) {
      const data = {
        title: "This is my title",
        url: `https://www.google.com/maps/place/${lat}, ${long}`,
        text: "this is my text",
      };
      navigator.share(data);
    } else {
      alert("Sharing not supported");
    }
  };

  return (
    <div>
      <button onClick={getCoor}>Please Give Coordinates</button>
      Location Finder: {lat} : {long}
      <button onClick={shareData}>Share Data</button>
    </div>
  );
};

export default GioLocation;

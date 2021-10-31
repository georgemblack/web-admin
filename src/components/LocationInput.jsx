import { useState } from "react";

function LocationInput(props) {
  const latitude = props.value ? props.value[0] : "";
  const longitude = props.value ? props.value[1] : "";

  const [loading, setLoading] = useState(false);

  const handleLatitudeChange = (event) => {
    const newLatitude = event.target.value;
    if (props.onChange) {
      props.onChange([newLatitude, longitude]);
    }
  };

  const handleLongitudeChange = (event) => {
    const newLongitude = event.target.value;
    if (props.onChange) {
      props.onChange([latitude, newLongitude]);
    }
  };

  const getCurrentLocation = (event) => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (props.onChange) {
          props.onChange([
            position.coords.latitude.toString(),
            position.coords.longitude.toString(),
          ]);
        }
        setLoading(false);
      },
      (error) => {
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <input
        type="text"
        value={latitude}
        placeholder="Latitude"
        onChange={handleLatitudeChange}
      ></input>
      <input
        type="text"
        value={longitude}
        placeholder="Longitude"
        onChange={handleLongitudeChange}
      ></input>
      <button type="button" onClick={getCurrentLocation}>
        {loading ? "🌀" : "🌎"}
      </button>
    </div>
  );
}

export default LocationInput;

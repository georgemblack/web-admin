function LocationInput(props) {
  const latitude = props.value ? props.value[0] : "";
  const longitude = props.value ? props.value[1] : "";

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
    navigator.geolocation.getCurrentPosition((position) => {
      if (props.onChange) {
        props.onChange(position.coords.latitude, position.coords.longitude);
      }
    });
  };

  return (
    <div className="location-input">
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
        🌎
      </button>
    </div>
  );
}

export default LocationInput;

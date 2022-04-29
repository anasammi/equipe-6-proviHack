import React from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./styled.js";
import {GOOGLE_API_KEY} from '../apiKey'
import { Address, AddressField, Map } from "./styled.js";

const MapPage = () => {
  const [map, setMap] = React.useState();
  const [searchBoxA, setSearchBoxA] = React.useState();
  const [searchBoxB, setSearchBoxB] = React.useState();
  const [pointA, setPointA] = React.useState();
  const [pointB, setPointB] = React.useState();

  const [origin, setOrigin] = React.useState(null);
  const [destination, setDestination] = React.useState(null);

  const [response, setResponse] = React.useState(null);

  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoadA = (ref) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref) => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo(() => {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    }, [origin, destination]);

  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  let duration = directionsRendererOptions.directions && directionsRendererOptions.directions.routes[0].legs[0].distance.text;
  let time = directionsRendererOptions.directions && directionsRendererOptions.directions.routes[0].legs[0].duration.text;

  return (
    <Map>
      <h1>Sua Rota !</h1>
       <h3>
      {duration ? duration : null}<br/>
      {time ? time : null}
      </h3>
      <LoadScript
        googleMapsApiKey={GOOGLE_API_KEY}
        libraries={["places"]}
      >
          <Address>
          <StandaloneSearchBox
            onLoad={onLoadA}
            onPlacesChanged={onPlacesChangedA}
          >
            <AddressField
              placeholder="Digite o endereço inicial"
            />
          </StandaloneSearchBox>
          <StandaloneSearchBox
            onLoad={onLoadB}
            onPlacesChanged={onPlacesChangedB}
          >
            <AddressField
              placeholder="Digite o endereço final"
            />
          </StandaloneSearchBox>
          <button onClick={traceRoute}>Traçar rota</button>
        
        </Address>
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{width: "90%", height: "40%", margin: "auto" }}
          center={position}
          zoom={15}
        >
          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </Map>
  );
};

export default MapPage;

import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./styled.js";
import {GOOGLE_API_KEY} from '../../apiKey'
import { Address, AddressField, Button, DivKm, MapStyled, DivButtons } from "./styled.js";
import { GlobalStateContext } from "../../global/GlobalStateContext.jsx";
<<<<<<< HEAD
import { goToAward, goToSuccessPage } from "../../routes/coordinator.js";
=======
import { goToAward } from "../../routes/coordinator.js";
>>>>>>> main

const Map = () => {
  const navigate = useNavigate(); 
  const { transport } = useContext(GlobalStateContext); 
  const [map, setMap] = React.useState();
  const [secondButton, setSecondButton] = React.useState(false);
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
      setSecondButton(true)
    }
  };

  const directionsServiceOptions =
    // @ts-ignore
    React.useMemo(() => {
      return {
        origin,
        destination,
        travelMode: transport,
      };
    }, [origin, destination, transport]);

  const directionsCallback = React.useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
    } else {
      alert('Não existe rota para esse meio de transporte')
    }
  }, []);

  

  const directionsRendererOptions = React.useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  let distance = directionsRendererOptions.directions && directionsRendererOptions.directions.routes[0].legs[0].distance.text;
  let duration = directionsRendererOptions.directions && directionsRendererOptions.directions.routes[0].legs[0].duration.text;

  const startPatch = () => {
    if(transport === 'TRANSIT' || transport === 'BICYCLING'){
      goToAward(navigate)
    }
  }

  return (
    <MapStyled>
      <DivKm>
      {duration ? <p>Duração: {duration}</p> : null}
      {distance ? <p>Distância: {distance}</p> : null}
      </DivKm>
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
          <DivButtons>
            <Button onClick={traceRoute}>Traçar rota</Button>
            {secondButton ? <Button onClick={startPatch}>Iniciar Trajeto</Button> : null}
          </DivButtons>       
        </Address>
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{width: "100%", height: "60%"}}
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
    </MapStyled>
  );
};

export default Map;

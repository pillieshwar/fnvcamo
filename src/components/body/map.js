import { propNames } from "@chakra-ui/styled-system";
import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  MapContainer,
  // Marker,
  // Circle,
  // Popup,
  TileLayer,
  GeoJSON,
  // Tooltip,
  Rectangle,
  useMap,
  Polyline,
} from "react-leaflet";
import US_Counties from "./counties.json";

const innerBounds = [
  [49.505, -2.09],
  [53.505, 2.09],
];
const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

// US_Counties.features.map((cnty) => {
//   console.log(cnty.geometry.coordinates);
// });

// const map_regions = US_Counties.features.geometry.coordinates;
// console.log(map_regions);

const redColor = { color: "red" };
const whiteColor = { color: "white" };

function SetBoundsRectangles() {
  const [bounds, setBounds] = useState(outerBounds);
  const map = useMap();

  // console.log(US_Counties.features.geometry);
  const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(innerBounds);
        map.fitBounds(innerBounds);
      },
    }),
    [map]
  );
  const outerHandlers = useMemo(
    () => ({
      click() {
        setBounds(outerBounds);
        map.fitBounds(outerBounds);
      },
    }),
    [map]
  );

  return (
    <>
      <Rectangle
        bounds={outerBounds}
        eventHandlers={outerHandlers}
        pathOptions={bounds === outerBounds ? redColor : whiteColor}
      />
      <Rectangle
        bounds={innerBounds}
        eventHandlers={innerHandlers}
        pathOptions={bounds === innerBounds ? redColor : whiteColor}
      />
    </>
  );
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Counter(val) {
  console.log(val);
  const prevCount = usePrevious(val);
  console.log("prevCount", prevCount);
  return prevCount;
}

export default function MainMap(props) {
  const [countyName, setCountyName] = React.useState("");
  const [analoglatlong, setAnaloglatlong] = React.useState([
    4.245725,
    -89.59798,
  ]);
  const [countylatlong, setCountylatlong] = React.useState([
    4.245725,
    -89.59798,
  ]);
  const position = [39.742043, -104.991531];
  const counties = US_Counties;
  const blueOptions = { color: "red" };
  // console.log("props", props);
  // var prevLat = Counter(props.sendLat);
  // var prevLong = Counter(props.sendLong);
  // if (
  //   props.sendLat !== "1" &&
  //   countylatlong[0] !== props.sendLat &&
  //   countylatlong[1] !== props.sendLong
  // ) {
  //   console.log("if");
  // console.log("Countylatlong: ", [props.sendLat, props.sendLong]);
  // console.log("Analoglatlong: ", [props.sendAnalogLat, props.sendAnalogLong]);
  // setCountylatlong([props.sendLat, props.sendLong]);
  // setAnaloglatlong([props.sendAnalogLat, props.sendAnalogLong]);
  // }

  // if (
  //   analoglatlong[0] !== props.sendAnalogLat &&
  //   analoglatlong[1] !== props.sendAnalogLong
  // ) {
  //   // console.log([props.sendLat, props.sendLong]);
  //   setAnaloglatlong([props.sendAnalogLat, props.sendAnalogLong]);
  // }

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { NAME } = feature.properties;
      // const n = `${NAME}`;
      layer.on("mouseover", function(e) {
        layer.bindPopup(`${NAME}`).openPopup();
      });
      layer.on("click", function(e) {
        console.log("oneachfeature -- click");
        // setCountyName(feature.properties.NAME);
        // props.getcountyName(feature.properties.NAME);
        props.getcountyName(
          feature.properties.NAME,
          feature.properties.STATE,
          feature.properties.LATLONG,
          feature.properties.ANALOG,
          feature.properties.CLOSESTANALOG
        );
        // setCountylatlong(feature.properties.LATLONG);
        // setAnaloglatlong(feature.properties.ANALOG);
      });
    }
  }

  return (
    <div id="map">
      <MapContainer
        bounds={outerBounds}
        style={{ height: "60vh" }}
        center={position}
        zoom={5}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SetBoundsRectangles />

        <GeoJSON
          data={counties.features}
          onEachFeature={onEachFeature}
        ></GeoJSON>
        <Polyline
          pathOptions={blueOptions}
          positions={[
            [props.sendLat, props.sendLong],
            [props.sendAnalogLat, props.sendAnalogLong],
          ]}
        />
      </MapContainer>
    </div>
  );
}

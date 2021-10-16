import { propNames } from "@chakra-ui/styled-system";
import React, { useMemo, useState } from "react";
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
} from "react-leaflet";
// import L from "leaflet";
import US_Counties from "./counties.json";

// const customMarker = new L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [13, 0],
// });

const innerBounds = [
  [49.505, -2.09],
  [53.505, 2.09],
];
const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const redColor = { color: "red" };
const whiteColor = { color: "white" };

function SetBoundsRectangles() {
  const [bounds, setBounds] = useState(outerBounds);
  const map = useMap();

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

export default function MainMap(props) {
  const [countyName, setCountyName] = React.useState("");
  const position = [39.742043, -104.991531];
  const counties = US_Counties;

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { NAME } = feature.properties;
      // const n = `${NAME}`;
      layer.on("mouseover", function(e) {
        layer.bindPopup(`${NAME}`).openPopup();
      });
      layer.on("click", function(e) {
        setCountyName(feature.properties.NAME);
        props.getcountyName(feature.properties.NAME);
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
      </MapContainer>
    </div>
  );
}

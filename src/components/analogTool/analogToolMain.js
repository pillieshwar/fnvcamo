import React, { useMemo, useState } from "react";
import {
  MapContainer,
  // Marker,
  // Circle,
  // Popup,
  TileLayer,
  GeoJSON,
  Tooltip,
  Rectangle,
  useMap,
} from "react-leaflet";
// import L from "leaflet";

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
export default function Analog() {
  // const position = [46.95037217, -117.33490945];
  const whitmanCounty = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        id: "3c068fec-1e59-4f78-9fe0-fea7d8a8356b",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-117.33490945, 46.95037217],
              [-117.54535861, 46.85225608],
              [-117.47603418, 46.70474523],
              [-117.28539199, 46.60107705],
              [-116.95362507, 46.58406331],
              [-116.81992795, 46.77092076],
              [-117.02047363, 46.76244126],
              [-117.14426726, 46.82685201],
              [-117.28044025, 46.83023991],
              [-117.27796438, 46.93008702],
              [-117.33490945, 46.95037217],
            ],
          ],
        },
        properties: { name: "Whitman_County" },
      },
    ],
  };
  // const limeOptions = { color: "lime" };
  return (
    // <MapContainer bounds={outerBounds} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {/* <SetBoundsRectangles /> */}
    // </MapContainer>

    //   L.geoJSON(whitmanCounty).addTo(map);

    <div id="map">
      <MapContainer bounds={outerBounds} style={{ height: "100vh" }} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <SetBoundsRectangles />

        <GeoJSON data={whitmanCounty.features}>
          <Tooltip sticky>{whitmanCounty.features[0].properties.name}</Tooltip>
        </GeoJSON>
      </MapContainer>
    </div>
  );
}

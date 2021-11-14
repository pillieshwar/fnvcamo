// import { propNames } from "@chakra-ui/styled-system";
import React, {
  useMemo,
  useState,
  // useEffect,
  useRef,
  // useMapEvent,
} from "react";
import {
  MapContainer,
  LayersControl,
  LayerGroup,
  FeatureGroup,
  Marker,
  Circle,
  Popup,
  TileLayer,
  GeoJSON,
  // Tooltip,
  Rectangle,
  useMap,
  Polyline,
  Polygon,
} from "react-leaflet";
import US_Counties from "./counties.json";
import US_all_counties from "./otherCounties.json";
// import US_all_counties from "./us-county-boundaries.geojson";

const innerBounds = [
  [49.505, -2.09],
  [53.505, 2.09],
];
const outerBounds = [
  [-88.46757, 43.893415],
  [-88.403195, 43.892977],
  [-88.404187, 43.9382],
  [-88.314948, 43.937665],
  [-88.161654, 43.937683],
  [-88.162274, 43.891511],
  [-88.160873, 43.542943],
  [-88.400426, 43.543532],
  [-88.401041, 43.630933],
  [-88.886052, 43.63354],
  [-88.885697, 43.895184],
  [-88.46757, 43.893415],
];

const initLat = 39.828175;
const initLong = -98.5795;

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

export default function MainMap(props) {
  const animateRef = useRef(false);
  const position = [39.742043, -104.991531];
  const counties = US_Counties;
  const blueOptions = { color: "blue" };
  const greyOptions = { color: "grey" };
  const redOptions = { color: "red" };

  function SetViewOnClick() {
    const map = useMap();
    let zoomLevel = 6;
    var latValue = (props.sendLat + props.sendAnalogLat) / 2;
    var longValue = (props.sendLong + props.sendAnalogLong) / 2;

    if (props.sendLat === initLat && props.sendLong === initLong) {
      zoomLevel = 4;
    }
    map.setView([latValue, longValue], zoomLevel);
    return null;
  }

  function onEachFeature(feature, layer) {
    if (feature.properties) {
      const { NAME } = feature.properties;
      const { STATE } = feature.properties;
      // const n = `${NAME}`;
      layer.on("mouseover", function(e) {
        layer.bindPopup(`${NAME}, ${STATE}`).openPopup();
      });
      layer.on("click", function(e) {
        props.getcountyName(
          feature.properties.NAME,
          feature.properties.STATE,
          feature.properties.LATLONG,
          feature.properties.ANALOG,
          feature.properties.CLOSESTANALOG,
          feature.geometry.coordinates,
          feature.properties.ANALOGCOORDINATES
        );
      });
    }
  }

  const animals = [];
  var multiPolygon = props.countyCoordinates[0];
  var temp1 = 0;
  var temp2 = 0;
  for (let i = 0; i < multiPolygon.length; i++) {
    temp1 = multiPolygon[i][0];
    temp2 = multiPolygon[i][1];
    animals.push([temp2, temp1]);
  }

  const analogGreeCoordinates = [];
  var multiPolygonAnalog = props.analogCoordinates[0];
  for (let i = 0; i < multiPolygonAnalog.length; i++) {
    temp1 = multiPolygonAnalog[i][0];
    temp2 = multiPolygonAnalog[i][1];
    analogGreeCoordinates.push([temp2, temp1]);
  }
  const center = [51.505, -0.09];
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  return (
    <div id="map">
      <MapContainer
        bounds={outerBounds}
        style={{ height: "60vh" }}
        center={position}
        zoom={5}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          {/* <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer> */}

          <LayersControl.Overlay checked name="32 Counties">
            <LayerGroup>
              <GeoJSON
                data={counties.features}
                onEachFeature={onEachFeature}
                pathOptions={blueOptions}
              ></GeoJSON>
            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="All US Counties">
            <LayerGroup>
              <GeoJSON
                data={US_all_counties.features}
                weight={0.5}
                pathOptions={greyOptions}
              ></GeoJSON>
            </LayerGroup>
          </LayersControl.Overlay>

          {/* <LayersControl.Overlay name="Feature group">
            <Polyline
              pathOptions={redOptions}
              positions={[
                [props.sendLat, props.sendLong],
                [props.sendAnalogLat, props.sendAnalogLong],
              ]}
            />
            <SetViewOnClick animateRef={animateRef} />
            <Polygon
              pathOptions={{ color: "red" }}
              positions={animals}
            ></Polygon>
            <Polygon
              pathOptions={{ color: "green" }}
              positions={analogGreeCoordinates}
            ></Polygon>
            <Polyline
              pathOptions={redOptions}
              positions={[
                [props.sendLat, props.sendLong],
                [props.sendAnalogLat, props.sendAnalogLong],
              ]}
            />
            <SetViewOnClick animateRef={animateRef} />
            <Polygon
              pathOptions={{ color: "red" }}
              positions={animals}
            ></Polygon>
            <Polygon
              pathOptions={{ color: "green" }}
              positions={analogGreeCoordinates}
            ></Polygon>
          </LayersControl.Overlay> */}
        </LayersControl>
        <Polyline
          pathOptions={redOptions}
          positions={[
            [props.sendLat, props.sendLong],
            [props.sendAnalogLat, props.sendAnalogLong],
          ]}
        />
        <SetViewOnClick animateRef={animateRef} />
        <Polygon pathOptions={{ color: "red" }} positions={animals}></Polygon>
        <Polygon
          pathOptions={{ color: "green" }}
          positions={analogGreeCoordinates}
        ></Polygon>
        <Polyline
          pathOptions={redOptions}
          positions={[
            [props.sendLat, props.sendLong],
            [props.sendAnalogLat, props.sendAnalogLong],
          ]}
        />
        <SetViewOnClick animateRef={animateRef} />
        <Polygon pathOptions={{ color: "red" }} positions={animals}></Polygon>
        <Polygon
          pathOptions={{ color: "green" }}
          positions={analogGreeCoordinates}
        ></Polygon>
      </MapContainer>

      {/* <MapContainer
        bounds={outerBounds}
        style={{ height: "60vh" }}
        center={position}
        zoom={5}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // url=""
          // url="http://1.base.maps.cit.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=OO3n6HayrdDH6DhkxRgG&app_code=MZQ6Zn6zc1s5Psz92GMMxw"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <GeoJSON
          data={US_all_counties.features}
          // onEachFeature={onEachFeature}
          weight={0.5}
          pathOptions={greyOptions}
        ></GeoJSON>

        <GeoJSON
          data={counties.features}
          onEachFeature={onEachFeature}
          pathOptions={blueOptions}
        ></GeoJSON>
        <Polyline
          pathOptions={redOptions}
          positions={[
            [props.sendLat, props.sendLong],
            [props.sendAnalogLat, props.sendAnalogLong],
          ]}
        />
        <SetViewOnClick animateRef={animateRef} />
        <Polygon pathOptions={{ color: "red" }} positions={animals}></Polygon>
        <Polygon
          pathOptions={{ color: "green" }}
          positions={analogGreeCoordinates}
        ></Polygon>
      </MapContainer>{" "}
      */}
    </div>
  );
}

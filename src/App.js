import "./App.css";
// import Header from "./components/header/header";
import Navigate from "./components/navigate";
import Map from "./components/body/map";
import Analog from "./components/analogTool/analogToolMain";
import "leaflet/dist/leaflet.css";

export default function App({ pageProps }) {
  return (
    <div className="App">
      {/* <Map {...pageProps} /> */}
      {/* <Analog /> */}
      <Navigate />
    </div>
  );
}

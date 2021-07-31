import './App.css';
import Header from './components/header/header';
import Navigate from './components/navigate';

export default function App({ pageProps }) {
  return (
    <div className="App">
      <Navigate {...pageProps}/>
    </div>
  );
}
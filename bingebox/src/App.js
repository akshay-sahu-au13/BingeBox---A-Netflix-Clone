
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Netflix clone</h1>
      <Row title="BINGEBOX ORIGINALS" fetchUrl={requests.bingeBoxOriginals} />
      <Row title="Trending Now" fetchUrl={requests.trending} />
      <Row title="Trending Now" fetchUrl={requests.trending} />
    </div>
  );
}

export default App;

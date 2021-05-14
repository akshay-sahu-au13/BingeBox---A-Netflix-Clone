
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <h1>Binge-Box</h1> */}
    <Banner />

      <Row title="BINGE-BOX ORIGINALS" fetchUrl={requests.bingeBoxOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.trending} />
      <Row title="Top Rated" fetchUrl={requests.topRated} />
      <Row title="Action Movies" fetchUrl={requests.actionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.comedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.horrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.romanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.documentaries} />
    </div>
  );
}

export default App;

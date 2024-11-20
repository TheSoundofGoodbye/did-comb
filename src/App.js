import logo from './logo.svg';
import './App.css';

// import all images from ./images folder
function importAllImage(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAllImage(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function App() {
  return (
    <div className="App">
      <div className="contents">
        <div className="top-section">

        </div>
        <div className="left-section">
          <h4 className="head-text">Synergy</h4>
          <img src={images['synergy_layout.jpg']} className="synergy" alt="synergy"/>
        </div>
        <div className="right-section">
          <h4 className="head-text">Artifact</h4>
          <img src={images['artifact_layout.jpg']} className="artifact" alt="artifact"/>
          
        </div>
      </div>
    </div>
  );
}


export default App;

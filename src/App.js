import './App.css';
// import relic from relic_list.js
import relicList from './relic_list';
import { useState } from 'react';

// import all images from ./images folder
function importAllImage(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


//relic click event
function relicClick() {
  alert('Relic clicked!');
}

//relic mouse over event
function relicOver() {
  
}

const images = importAllImage(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function App() {

  //useState 
  let [relics, setRelics] = useState(
  ['', '', '', '', '', '', '', '', '']);

  const [popupStyle, setPopupStyle] = useState({display: 'none'});
  const [popupContent, setPopupContent] = useState('');

  const handleMouseOver = (event, content) => {
    setPopupContent(content);
    setPopupStyle({
      display : 'block',
      top: event.clientY + 10 + 'px',
      left: event.clientX + 10 + 'px'
    });
  };

  const handleMouseMove = (event) => {
    setPopupStyle({
      ...popupStyle,
      top: event.clientY + 10 + 'px',
      left: event.clientX + 10 + 'px'
    });
  };

  const handleMouseOut = () => {
    setPopupStyle({ display: 'none', top: 0, left: 0 });
  };

  return (
    <div className="App">
      <div className="contents">
        <div className="top-section">

        </div>
        <div className="left-section">
          <h4 className="head-text">Synergy</h4>
          <div className="artifact-section">
            <img src={images['synergy_layout.jpg']} className="synergy" alt="synergy"/>
           </div>
        </div>
        <div className="right-section">
          <div className="synergy-section">
            <h4 className="head-text">Artifact</h4>
            <img src={images['artifact_layout.jpg']} className="artifact" alt="artifact"/>
            <div id="artifact1" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 1')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact2" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 2')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact3" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 3')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact4" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 4')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact5" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 5')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact6" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 6')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact7" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 7')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact8" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 8')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>
            <div id="artifact9" className="diamond" onClick={relicClick} onMouseOver={(e) => handleMouseOver(e, 'Artifact 9')} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}></div>

          </div>
        </div>
      </div>

      <div className="popup" style={popupStyle}>{popupContent}</div>
    </div>
  );
}


export default App;

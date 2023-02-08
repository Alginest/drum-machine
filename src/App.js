import { useEffect, useState } from "react";
import "./App.css";
import { arr } from "./DrumNotes";
console.log(arr);
function App() {
  const [drums, setDrums] = useState(arr);
  const [activeKey, setActiveKey] = useState("");
  const [wrongKey, setWrongKey] = useState("");
  function playSound(selector) {
    const audio = document.getElementById(selector);
    if (audio !== null) {
      audio.play();
      setWrongKey("");
    } else {
      setWrongKey("Wrong Key");
    }
    setActiveKey(selector);
  }
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      playSound(e.key.toUpperCase());
    });
  }, []);
  return (
    <div className="app">
      <div id="drum-machine">
        <div className="drumContainer">
          <div className="drumPads">
            {drums.map((drum) => {
              const { src, text, keyCode } = drum;
              return (
                <div
                  onClick={() => {
                    playSound(text);
                  }}
                  className="drum-pad"
                  key={keyCode}
                  id={src}
                >
                  <audio controls className="clip" id={text} src={src}></audio>
                  {text}
                </div>
              );
            })}
          </div>
          <div id="display">
            <div className="activeKey">
              {activeKey} {wrongKey}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

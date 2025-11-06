import { useState } from "react";
import "./App.css";

import GradientBlinds from "./components/GradientBlinds";
import Plasma from "./components/Plasma";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Plasma
          color="#000e3c"
          speed={0.7}
          direction="forward"
          scale={1}
          opacity={0.8}
          mouseInteractive={false}
        />

        <div className="main-content">
          
          <section className="hero">
            <div className="hero-image">
             <img src="./src/images/tripleMantaEvo3fullscreen.png" alt="Hero Image" />
              
            </div>
            <div className="hero-content">
              <h1>Get ready for a truly seamless experience.</h1>
              <p>
                We provide the same state of the art frameworks and solutions to you that power our own games. Say goodbye to low-quality tech stores and hello to smooth, efficient integrations.
              </p>
              <div className="hero-buttons">
                <div className="row">
                  <button className="btn-primary" style={{flex:3,}}>
                    Explore Products
                  </button>
                  <button className="btn-secondary" style={{flex:2,}}>
                    Our Games
                  </button>
                </div>
                <div className="row">
                  <button className="btn-secondary" style={{flex:0.8,}}>
                    Docs
                  </button>
                  <button className="btn-secondary" style={{flex:1.2,}}>
                   Join our Discord
                  </button>
                  <button className="btn-secondary" style={{flex:0.8,}}>
                    Imprint
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>


      </div>
    </>
  );
}

export default App;

import React from "react";
import herobg from "../assets/video/hero.mp4";

function Hero() {
  return (
    <div className="hero">
          <div className="hero-bg">
            <video
              id="hero-bg-video"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              src={herobg}
              className="hero_video"
            ></video>
          </div>
      <div className="hero-main">
        <div className="hero-inner">
          <div className="hero-content">
            <h6 className="hero-subtitle">Minh Pham</h6>
             <div className="hero-text-wrapper">
            <h1 className="hero-title">
              <span className="line">making</span><br/>
              <span className="line oringe">good</span><br/>
              <span className="line oringe">shit    </span><br/>
              <span className="line">since</span><br/>
               <span className="line">2009</span><br/>
            </h1>
             {/* <h1 className="hero-title hover">
              <span className="line">hidein</span><br/>
              <span className="line oringe">bad</span><br/>
              <span className="line oringe">shit    </span><br/>
              <span className="line">since</span><br/>
               <span className="line">2009</span><br/>
            </h1> */}
          </div></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

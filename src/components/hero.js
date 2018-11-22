// @flow
import React from "react";
import Nav from "./nav";
const Hero = ({}) => (
  <header>
    <div
      className="cover bg-left bg-center-l"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1540951099530-1db7720544ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5fd28b094f25ff0bef18ea43126fe9e8&auto=format&fit=crop&w=1486&q=80)"
      }}
    >
      <div className="bg-black-80 pb5 pb6-m pb7-l">
        <Nav />
        <div className="tc-l mt4 mt5-m mt6-l ph3">
          <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
            Announcing HYPE!
          </h1>

          <a
            className="f6 no-underline grow dib v-mid bg-dark-red white ba b--dark-red ph3 pv2 mb3"
            href="/hype"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;

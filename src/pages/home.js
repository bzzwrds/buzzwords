// @flow
import React from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";

export default class Home extends React.Component {
  render() {
    return (
      <div className="sans-serif">
        <Hero />

        <Footer />
      </div>
    );
  }
}

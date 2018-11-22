// @flow
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
export default class Hype extends React.Component {
  render() {
    return (
      <div className="sans-serif">
        <Header />
        <section className="flex-ns w-100 mw8 center items-center">
          <div className="mw6 ph5">
            <img
              style={{ height: 500 }}
              src="https://static.buzzwords.app/hype.svg"
            />
          </div>
          <div className="tc tl-ns ph3">
            <h1 className="f3 f1-l fw2 mb3 mt4 mt0-ns">
              Deploy in a whole new way.
            </h1>
            <h2 className="f5 f3-l fw1 mb4 mb5-l lh-title">
              Rated the #1 app for deploying applications.
            </h2>
            <p class="f5 lh-copy measure-wide">
              After tens of minutes of training a ML model on the blockchain we
              have perfected the art of deploying applications to the cloud. For
              any given app name, we can give you, with 13% accuracy, which
              availibility zone you should deploy your app to and how many
              replicas there should be. HYPE will even generate the YAML files
              for you.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

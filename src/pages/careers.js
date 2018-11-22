// @flow
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const jobs = {
  "Glasshouses, UK": [
    { title: "Thought Leader", description: "You'll shape the way we think" },
    {
      title: "🎂",
      description:
        "As the 🎂, you'll be in charge of planning peoples buzzyversaries. We only have 2 employees."
    },
    {
      title: "Chief Blockchain Scientist",
      description: "You'll tell us what to do."
    },
    {
      title: "Fullstack JS Kernel Ninja",
      description: "You'll be writing kernel modules in JS"
    } 
  ],
  "San Fransisco, CA": [
    {
      title: "Cheif HYPE Ambassodor",
      description: "You'll be spreading HYPE around SoMa!"
    }
  ]
};

export default class Hype extends React.Component {
  render() {
    return (
      <div className="sans-serif">
        <Header />
        <article className="cf pa3 mw9 center">
          <section className="fl w-100">
            <div className="fl w-100 w-100-m w-33-l pa3-m pa4-l">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3a748e7b25651211d3092e562247c860&auto=format&fit=crop&w=1350&q=80"
                className="w-100 db"
                title="no we didn't stage this shot at all. stop thinking that."
              />
              <div className="pa3">
                Buzzwords People Specialists have hired a diverse set of
                candidates making sure we are a diverse utopia
              </div>
            </div>
            <div className="fl w-100 w-100-m w-33-l pa3-m pa4-l">
              <img
                src="https://images.unsplash.com/photo-1504042502815-3d3544395216?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=14403df5a3c968c886b6aedb8c5763cd&auto=format&fit=crop&w=1350&q=80"
                className="w-100 db"
                title="We love open floor plans, and the Starbucks vibe. Our office is basically like the TV show friends, a bunch of people sitting around having coffee during weekdays and being really cool.?"
              />
              <div className="pa3">
                We seek to innovate by leveraging teamwork and synergy, by
                sprint planning agile work days so we can maxmize our
                troughputs.
              </div>
            </div>
            <div className="fl w-100 w-100-m w-33-l pa3-m pa4-l">
              <img
                src="https://images.unsplash.com/photo-1530718152097-8c0676b4a467?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=310bc032e2f5d88b5d034931b26fa355&auto=format&fit=crop&w=1343&q=80"
                className="w-100 db"
                title="of course we have a table tennis table"
              />
              <div className="pa3">
                We have so many activities you can do, it's bananas. You'll make
                friends at ✌work✌.
              </div>
            </div>
          </section>
        </article>
        <article className="pa3 pa5-ns">
          {Object.keys(jobs).map(k => (
            <div>
              <h1 className="f4 bold center mw6">{k}</h1>
              <ul className="list pl0 ml0 center mw6 ba b--light-silver br2">
                {jobs[k].map(job => (
                  <li className="ph3 pv3 bb b--light-silver">
                    <b class="db f3 mb1">{job.title}</b>
                    <span class="f5 db lh-copy measure">{job.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
        <Footer />
      </div>
    );
  }
}

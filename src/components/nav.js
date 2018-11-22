// @flow
import React from "react";
import Logo from "./logo";

let links = {
  Home: "/",
  HYPE: "/hype",
  Careers: "/careers"
};

const Nav = ({}) => {
  const handleClick = () => {};
  return (
    <nav className="dt w-100 mw8 center">
      <div className="dtc w2 v-mid pa3">
        <a href="/" className="dib w2 h2 pa1  grow-large">
          <Logo />
        </a>
      </div>
      <div className="dtc v-mid tr pa3">
        {Object.keys(links).map(k => (
          <a
            className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3"
            id={k}
            href={links[k]}
          >
            {k}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;

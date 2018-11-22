/**
 *  Copyright (c) 2018, Cloudflare, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// @flow
import React from "react";
import ReactDOMServer from "react-dom/server";
import ReactDOM from "react-dom";
import Home from "./pages/home";
import Hype from "./pages/hype";
import Careers from "./pages/careers";

const header = `<!DOCTYPE html>
  <title>buzzwords</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#da2f47">
  <link rel='manifest' href='manifest.json'>
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css">
  <body><div id="app">`;

const footer = `</div>
<script src="/worker.js"> </script>
</body>
</html>`;

let routes = {
  "/": <Home />,
  "/hype": <Hype />,
  "/careers": <Careers />
};
async function handleRequest(event) {
  const u = new URL(event.request.url);
  if (u.pathname in routes) {
    let rendered = ReactDOMServer.renderToString(routes[u.pathname]);
    return new Response(header + rendered + footer, {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
  let cache = await caches.open("buzz");
  let response = await cache.match(event.request);

  if (!response) {
    response = await fetch(event.request);
    event.waitUntil(cache.put(event.request, response.clone()));
  }

  return response;
}

self.addEventListener("fetch", event => {
  event.respondWith(handleRequest(event));
});

if (typeof navigator !== "undefined" && "serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    const app = document.querySelector("#app");
    ReactDOM.hydrate(routes[location.pathname], app);

    navigator.serviceWorker.register("/worker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

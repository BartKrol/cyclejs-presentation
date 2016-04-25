import Cycle from "@cycle/core";
import {div, span, input, p, label, makeDOMDriver} from "@cycle/dom";

require("./toggle.css");

function main(sources) {
  const sinks = {
    DOM: sources.DOM.select("input").events("change")
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          span("Clicky Box"),
          input({ type: "checkbox" }),
          label(toggled ? "ON" : "OFF"),
          p()
        ])
      )
  };
  return sinks;
}

Cycle.run(main, {
  DOM: makeDOMDriver("#app")
});

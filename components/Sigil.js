import React from "react";
import { sigil, reactRenderer } from "@tlon/sigil-js";

export default function Sigil(props) {
  return (
    <div className="p-4 bg-black inline-block rounded-lg">
      {sigil({
        patp: props.patp,
        renderer: reactRenderer,
        size: 32,
        margin: false,
        colors: ["black", "white"],
      })}
    </div>
  );
}

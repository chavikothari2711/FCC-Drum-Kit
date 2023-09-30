import React from "react";
import { InnerButtons } from "./InnerButtons";

export function Buttons() {
  return (
    <>
      <div className="row">
        <InnerButtons id="Q" />
        <InnerButtons id="W" />
        <InnerButtons id="E" />
      </div>
      <div className="row">
        <InnerButtons id="A" />
        <InnerButtons id="S" />
        <InnerButtons id="D" />
      </div>
      <div className="row">
        <InnerButtons id="Z" />
        <InnerButtons id="X" />
        <InnerButtons id="C" />
      </div>
    </>
  );
}

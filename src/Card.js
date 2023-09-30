import React, { useState } from "react";
import { Buttons } from "./Buttons";
import { TextView } from "./features/Text/TextView";
import { VolumeView } from "./features/Volume/VolumeView";
import { PowerView } from "./features/Power/PowerView";

export function Card(props) {
  const [power, setPower] = useState(true);

  return (
    <>
      <div className="card">
        <div className="left">
          <Buttons />
        </div>
        <div className="right">
          <h4>Power</h4>
          <PowerView />
          <TextView />
          <div className="volume-slider">
            <VolumeView />
          </div>
        </div>
      </div>
    </>
  );
}

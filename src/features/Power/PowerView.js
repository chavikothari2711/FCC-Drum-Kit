import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { powerChange } from "./powerSlice";

export function PowerView() {
  const power = useSelector((state) => state.power.power);
  const dispatch = useDispatch();
  function handleChange() {
    dispatch(powerChange(!power));
  }
  return (
    <div className="toggle">
      <input
        className="toggle-checkbox"
        type="checkbox"
        checked={power}
        onChange={handleChange}
      />
      <div className="toggle-container">
        <div className="toggle-button"></div>
      </div>
    </div>
  );
}

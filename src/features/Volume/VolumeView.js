import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { alter } from "./volumeSlice";
import { change } from "../Text/textSlice";

export function VolumeView() {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.volume.volume);

  function handleChange(e) {
    dispatch(alter(e.target.value));
    dispatch(change("Volume: " + volume));
    setTimeout(() => {
      dispatch(change(""));
    }, 1000);
  }

  return (
    <input
      type="range"
      min="0"
      max="100"
      className="slider"
      id="myRange"
      value={volume}
      onChange={handleChange}
    />
  );
}

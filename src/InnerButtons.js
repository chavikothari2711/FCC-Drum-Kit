import React, { useEffect } from "react";
import { sounds } from "./sounds";
import { useSelector, useDispatch } from "react-redux";
import { change } from "./features/Text/textSlice";

export function InnerButtons(props) {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.volume.volume);
  const power = useSelector((state) => state.power.power);
  useEffect(() => {
    if (!power) dispatch(change("Power Off"));
    else dispatch(change(""));
  }, [power, dispatch]);
  function handleClick() {
    const obj = sounds.find(GetId);
    let audio = new Audio(obj.src);
    audio.volume = volume / 100;
    if (power) {
      audio.play();
      dispatch(change(obj.text));
    }
  }

  function GetId(sound) {
    return sound.id === props.id;
  }

  return (
    <button id={props.id} onClick={handleClick}>
      {props.id}
    </button>
  );
}

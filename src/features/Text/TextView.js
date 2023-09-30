import React from "react";
import { useSelector } from "react-redux";

export function TextView() {
  const text = useSelector((state) => state.text.text);
  return <p className="text">{text}</p>;
}

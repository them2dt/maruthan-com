import React from "react";
import "./style.css";

export default function Grid() {
  return (
    <div className="grid-component">
      <div className="horizontal">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="vertical">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

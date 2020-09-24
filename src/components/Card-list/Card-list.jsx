import React from "react";
import { Card } from "../Card/Card";
import "./Card-list.css";
export const Cardlist = (props) => {
  // console.log(props.monsters[0]);
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

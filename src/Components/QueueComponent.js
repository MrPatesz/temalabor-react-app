import React from "react";
import SongComponent from "./BasicComponents/SongComponent";

function QueueComponent(props) {
  return (
    <ol>
      {props.queue.map((song) => (
        <li>
          <SongComponent song={song} />
        </li>
      ))}
    </ol>
  );
}

export default QueueComponent;

import React from "react";
import SongComponent from "./BasicComponents/SongComponent";

function QueueComponent(props) {
  return (
    <ol style={{/*height: 350,*/ overflow: 'auto'}}>
      {props.queue.map((song) => (
        <li>
          <SongComponent song={song} />
        </li>
      ))}
    </ol>
  );
}

export default QueueComponent;

import React from "react";
import GenreComponent from "./BasicComponents/GenreComponent";

function GenreListComponent(props) {
  return (
    <ul>
      {props.mock.genres.map((genre) => (
        <li>
          <GenreComponent genre={genre} selectedItems={props.selectedItems} />
        </li>
      ))}
    </ul>
  );
}

export default GenreListComponent;

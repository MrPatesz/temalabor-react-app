import React, { useState, useEffect } from "react";
import axios from "axios";
import ArtistListComponent from "../Components/ArtistListComponent";
import SelectionComponent from "../Components/SelectionComponent";
import AlbumListComponent from "../Components/AlbumListComponent";
import GenreListComponent from "../Components/GenreListComponent";
import QueueComponent from "../Components/QueueComponent";
import "./HomePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage(props) {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [queue, setQueue] = useState(props.savedQueue);

  let selectedItems = {
    selectedGenre,
    setSelectedGenre,
    selectedArtist,
    setSelectedArtist,
    selectedAlbum,
    setSelectedAlbum,
  };

  const [songAIOs, setSongAIOs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://localhost:5001/api/SongAIOs");

      setSongAIOs(result.data);
    };
    fetchData();
  }, []);

  function enqueueClicked() {
    var selection = [];
    songAIOs.forEach((s) => {
      var songString = s.artistName + " - " + s.songTitle;
      if (
        !selection.includes(songString) &&
        (s.genreName === selectedGenre || selectedGenre === null) &&
        (s.artistName === selectedArtist || selectedArtist === null) &&
        (s.albumTitle === selectedAlbum || selectedAlbum === null)
      )
      selection.push(songString);
    });

    selection.sort((a1, a2) => a1.localeCompare(a2));

    setQueue(queue.concat(selection));

    for (var l = 0; l < selection.length; l++) {
      props.savedQueue.push(selection[l]);
    }
  }

  return (
    <div className="home-page">
      <Container fluid="true">
        <Row>
          <Col xs={4} sm md={2} lg={2} xl={2}>
            <h1> Genres </h1>
            <GenreListComponent songAIOs={songAIOs} selectedItems={selectedItems} />
          </Col>
          <Col xs={4} sm md={2} lg={2} xl={2}>
            <h1> Artists </h1>
            <ArtistListComponent songAIOs={songAIOs} selectedItems={selectedItems} />
          </Col>
          <Col xs={4} sm md={3} lg={2} xl={2}>
            <h1> Albums </h1>
            <AlbumListComponent songAIOs={songAIOs} selectedItems={selectedItems} />
          </Col>
          <Col xs={6} sm md={5} lg={3} xl={3}>
            <h1> Selection </h1>
            <SelectionComponent songAIOs={songAIOs} selectedItems={selectedItems} />
          </Col>
          <Col xs={6} sm md={12} lg={3} xl={3}>
          <h1> Queue </h1>
            <QueueComponent queue={queue} />
          </Col>
        </Row>
      </Container>
      <div className="buttons-div">
        <Button className="mb-1" variant="outline-danger"
          onClick={() => {
            setQueue([]);
            while (props.savedQueue.length > 0) {
              props.savedQueue.pop();
            }
          }}
        >
          Clear Queue
        </Button>
        <Button variant="outline-info"
          onClick={() => {
            enqueueClicked();
          }}
        >
          Enqueue Selection
        </Button>
      </div>
    </div>
  );
}

export default HomePage;

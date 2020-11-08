import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchTest() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  ///////////
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://localhost:44339/api/genres");

      setGenres(result.data);
    };
    fetchData();
  }, []);
  ///////////

  return (
    <div>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      <ul>
        {genres.map((genre) => (
          <li>
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchTest;

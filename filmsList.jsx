import React, { useState, useEffect } from 'react';

function FilmsList(props) {
  const [list, setList] = useState([]);

  function getFilms() {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then(response => response.json())
      .then(films => setList(films))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <ul>
        {list.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilmsList;

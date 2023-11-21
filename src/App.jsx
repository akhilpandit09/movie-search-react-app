import React from "react";
import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");

  const [movie, setMovie] = useState([
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg",
      Title: "Big Hero 6",
      Type: "movie",
      Year: "2014",
      imdbID: "tt2245084",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      Title: "Hero",
      Type: "movie",
      Year: "2002",
      imdbID: "tt0299977",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDJiOTdmMGItMmM5MC00ZTRiLWIzNjctNDE4ZTZkMWMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg",
      Title: "An Action Hero",
      Type: "movie",
      Year: "2022",
      imdbID: "tt15600222",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWVkNWM1ZTYtOTU3My00OGIxLWI2MmEtZmYyZGIxMTIwY2MzXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
      Title: "Always Kabhi Kabhi",
      Type: "movie",
      Year: "2011",
      imdbID: "tt1937092",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWNkZWYwOTAtZmU2OS00Y2ViLTg4YTItMDE0N2FlNTFmZDg2XkEyXkFqcGdeQXVyOTA0NTIzNzU@._V1_SX300.jpg",
      Title: "Kabhi Na Kabhi",
      Type: "movie",
      Year: "1998",
      imdbID: "tt0116737",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzY2ODI5ODQtOGUxMC00MmNjLWI1ZDktYTkwM2RjNThmNmZkXkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_SX300.jpg",
      Title: "Kabhi Kabhie Ittefaq Sey",
      Type: "series",
      Year: "2022",
      imdbID: "tt16793274",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTUyMTg0MTA1OF5BMl5BanBnXkFtZTgwMDg2MjMwMjE@._V1_SX300.jpg",
      Title: "Kick",
      Type: "movie",
      Year: "2014",
      imdbID: "tt2372222",
    },
    {
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGQwOTgyMjItNjBiMy00MTU0LThmOTQtN2RhODZjYmFmOGJlXkEyXkFqcGdeQXVyMTIwMjY0NjQz._V1_SX300.jpg",
      Title: "Kick Buttowski: Suburban Daredevil",
      Type: "series",
      Year: "2010–2012",
      imdbID: "tt1600757",
    },
  ]);

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };
  const getMovie = (e) => {
    e.preventDefault();
    if (!input) {
      alert("please enter a movie name");
    } else {
      axios
        .get(`https://omdbapi.com/?s=${input}&apikey=fd2265b3&s`)
        .then((response) => {
          return (
            console.log(response.data.Search), setMovie(response.data.Search)
          );
        });
    }
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold">
            Movie <span className="text-warning">App</span>
          </a>
          <form className="d-flex" role="search" onSubmit={getMovie}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Movie Name"
              aria-label="Search"
              value={input}
              onChange={onChangeInput}
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          {movie &&
            movie.map((value, index) => {
              return (
                <div className="col-3 g-5" key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={value.Poster}
                      className="card-img-top"
                      alt="Movie Poster"
                    />
                    <div className="card-body">
                      <div>
                        <h5 className="card-title">{value.Title}</h5>
                      </div>
                      <div className="d-flex justify-content-between ">
                        <p className="card-text">
                          {" "}
                          <span className="fw-bold">Type:</span> {value.Type}
                        </p>
                        <p className="card-text">
                          {" "}
                          <span className="fw-bold">Year:</span> {value.Year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;

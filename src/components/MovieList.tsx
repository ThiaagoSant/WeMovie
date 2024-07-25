import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { MovieService } from "../services/MovieService";
import MovieCard from "./MovieCard";
import { ListContent } from "../styles/components/MovieList";
import Loader from "./Loader";

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const movies = await MovieService.getMovies();
      setLoading(false);
      setMovies(movies);
    };
    fetchMovies();
  }, []);

  if (loading) return <Loader />;

  const renderCardsMovies = movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

  return <ListContent>{renderCardsMovies}</ListContent>;
};

export default MovieList;

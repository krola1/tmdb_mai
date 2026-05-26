import "./App.css";
import { useTrendingMovies } from "./hooks/useTrendingMovies";

export default function App() {
  const { data, isLoading, isError, error } = useTrendingMovies();

  if (isLoading) return <h1>loading</h1>;
  if (isError) return <h1>An error occued, {error}</h1>;

  return (
    <>
      {data.results.map((movie) => (
        <h3>{movie.title}</h3>
      ))}
    </>
  );
}

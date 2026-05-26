import "./App.css";
import { fetchTrendingMovies } from "./api/tmdb_functions";
import { useTrendingMovies } from "./hooks/useTrendingMovies";

export default function App() {
  const { data, isLoading } = useTrendingMovies();

  if (isLoading) return <h1>loading</h1>;
  console.log("tanstack:", isLoading, data);
  console.log("axios:", fetchTrendingMovies());

  return <h1>App</h1>;
}

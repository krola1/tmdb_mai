import { useQuery } from "@tanstack/react-query";
import { fetchTrendingMovies } from "../api/tmdb_functions";

export const useTrendingMovies = (time_window = "week") => {
  return useQuery({
    queryKey: ["trending", time_window],
    queryFn: () => fetchTrendingMovies(time_window),
  });
};

import { api_tmdb } from "./tmdb_base";

export const fetchTrendingMovies = async (time_window = "week") => {
  const result = await api_tmdb.get(`trending/all/${time_window}`);
  return result.data;
};

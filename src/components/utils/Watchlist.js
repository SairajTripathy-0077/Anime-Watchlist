const WATCHLIST_KEY = "watchlist";

// Get watchlist
export const getWatchlist = () => {
  const data = localStorage.getItem(WATCHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

// Check if anime is in watchlist
export const isInWatchlist = (id) => {
  const list = getWatchlist();
  return list.some(anime => anime.mal_id === id);
};

// Add anime
export const addToWatchlist = (anime) => {
  const list = getWatchlist();

  if (!list.some(item => item.mal_id === anime.mal_id)) {
    list.push(anime);
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
  }
};

// Remove anime
export const removeFromWatchlist = (id) => {
  const list = getWatchlist().filter(
    anime => anime.mal_id !== id
  );
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
};

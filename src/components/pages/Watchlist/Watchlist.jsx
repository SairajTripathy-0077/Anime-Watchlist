import React, { useEffect, useState } from "react";
import {
  getWatchlist,
  removeFromWatchlist,
} from "../../utils/Watchlist.js";
import AnimeModal from "../../../components/AnimeModal.jsx";
import toast,{Toaster} from 'react-hot-toast';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    setWatchlist(getWatchlist());
  }, []);

  const handleRemove = (id) => {
    removeFromWatchlist(id);
    setWatchlist(getWatchlist()); // 🔥 refresh UI
  };

  if (watchlist.length === 0) {
    return (
      <div className="text-center py-20 opacity-60 uppercase font-bold">
        Your watchlist is empty
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-clickUper uppercase mb-8">
        Your Watchlist
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {watchlist.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={() => setSelectedAnime(anime)}
            className="bg-white border-2 border-black p-3 cursor-pointer
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]
            transition-all flex flex-col"
          >
            {/* Image */}
            <div className="h-[14rem] overflow-hidden border-2 border-black mb-3 group">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-full object-cover manga-filter"
              />
            </div>

            {/* Title */}
            <h3 className="font-bold text-center mb-2 line-clamp-2">
              {anime.title}
            </h3>

            {/* Meta */}
            <div className="text-xs text-gray-600 font-bold uppercase flex justify-center gap-2 mb-3">
              <span>{anime.year || "Unknown"}</span>
              <span>•</span>
              <span>EPS: {anime.episodes || "?"}</span>
            </div>

            {/* Remove button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toast.error("Removed from Watchlist");
                handleRemove(anime.mal_id);
              }}
              className="mt-auto border-2 border-black py-2 font-bold uppercase
              hover:bg-red-600 hover:text-white transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <Toaster position="bottom-right" />
      {/* Modal */}
      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </div>
  );
};

export default Watchlist;

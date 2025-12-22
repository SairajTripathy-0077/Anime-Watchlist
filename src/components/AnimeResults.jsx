// components/AnimeResults.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './AnimeResults.css'

const AnimeResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Access the data passed from SearchBar
  const animeList = location.state?.animeList || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div class="fixed inset-0 bg-halftone pointer-events-none z-0"></div>
      
      {/* Header with Back Button */}
      <div className="flex justify-between items-center mb-8 z-10">
        <h2 className="text-3xl font-clickUper uppercase">Search Results</h2>
        <button 
            onClick={() => navigate('/')} // Go back home
            className="bg-black text-white px-6 py-2 font-bold uppercase border-2 border-indigo-600 hover:bg-indigo-600 hover:border-black transition-colors font-clickuper z-20"
        >
            Back
        </button>
      </div>

      {/* Grid of Results */}
      {animeList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 z-10">
          {animeList.map((anime) => (
            <div key={anime.mal_id} className="bg-white border-2 relative border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-4">
              <div className="h-64 overflow-hidden border-2 border-black mb-4 group">
                <img 
                    src={anime.images.jpg.image_url} 
                    alt={anime.title} 
                    className="w-full h-full object-cover manga-filter"
                />
              </div>
              <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 font-bold border-l-4 border-b-4 border-white">
                 ★ {anime.score || 'N/A'}
              </div>
              <div className="absolute bottom-0 left-0 bg-indigo-600 text-white px-2 py-1 text-xs font-bold border-t-4 border-r-4 border-black">
                 {anime.type}
              </div>
              <h3 className="font-bold text-lg leading-tight mb-2 truncate">{anime.title}</h3>
              <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-600 mb-4 uppercase">
                  <span>{anime.year || 'Unknown'}</span>
                  <span>•</span>
                  <span>Eps: {anime.episodes || '?'}</span>
                  <span>•</span>
                  <span>{anime.duration ? anime.duration.split(' ')[0] + 'm' : 'N/A'}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-400 uppercase">No Results Found</h2>
        </div>
      )}
    </div>
  );
};

export default AnimeResults;
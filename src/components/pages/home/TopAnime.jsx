import React from 'react'
import { useState,useEffect } from 'react';
import AnimeModal from '../../AnimeModal';
import toast, { Toaster } from "react-hot-toast";
import {addToWatchlist, removeFromWatchlist, isInWatchlist, getWatchlist} from "../../../components/utils/Watchlist.js";

const TopAnime = () => {
    const [TopAiring, setTopAiring] = useState([]);
    const [TopRanking, setTopRanking] = useState([]);
    const [selectedAnime, setSelectedAnime] = useState(null);
    const [watchlistVersion, setWatchlistVersion] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const airingRes = await fetch(
            "https://api.jikan.moe/v4/top/anime?filter=airing&limit=6"
        );
        const airingJson = await airingRes.json();
        setTopAiring(airingJson.data);

        // small delay to avoid 429
        await new Promise(res => setTimeout(res, 500));

        const rankingRes = await fetch(
            "https://api.jikan.moe/v4/top/anime?limit=4"
        );
        const rankingJson = await rankingRes.json();
        setTopRanking(rankingJson.data);

        } catch (err) {
        console.error(err);
        }
    };
    fetchData();
    }, []);

    const handleWatchlist = (anime) => {
        if (isInWatchlist(anime.mal_id)) {
          removeFromWatchlist(anime.mal_id);
        } else {
          addToWatchlist(anime);
        }
        //force re-render
        setWatchlistVersion(v => v + 1);
      };


  return (
    <main className='grid grid-cols-1 md:grid-cols-2'>
        <section>
            <div className='flex justify-center items-center mt-10 mb-10'>
                <h1 className='text-2xl border-4 border-black md:text-5xl font-clickUper'>TOP RANKING</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 md:px-12 ">
                {TopRanking.length === 0? (<p className="text-center opacity-50 uppercase">Loading top ranked...</p>):
                TopRanking.map((anime, index) => {
                    const added = isInWatchlist(anime.mal_id);
                    return(
                    <div onClick={() => setSelectedAnime(anime)} key={anime.mal_id} className="bg-white h-full w-full max-w-[16rem] mx-auto border-2 relative flex flex-col justify-between items-center border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-2">
                    <div className="h-[12rem] w-[9rem] overflow-hidden border-2 border-black mb-4 group">
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
                    <div className='relative mb-2 flex flex-col min-w-0 '>
                        <h3 className="font-bold text-lg leading-tight line-clamp-2 text-center h-[3.2rem] overflow-hidden">{index+1}. {anime.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-600 mb-4 uppercase">
                        <span>{anime.year || 'Unknown'}</span>
                        <span>•</span>
                        <span>Eps: {anime.episodes || '?'}</span>
                        <span>•</span>
                        <span>{anime.duration ? anime.duration.split(' ')[0] + 'm' : 'N/A'}</span>
                    </div>
                    <button
                        onClick={(e) => {
                        e.stopPropagation()
                        {!added ? toast.success("Added to Watchlist ⭐"): toast.error("Removed from Wathlist")}
                        handleWatchlist(anime)}}
                        className={`w-full py-2 mb-4 font-bold border-2 border-black transition-all uppercase tracking-wider
                        ${added ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-transparent text-black hover:bg-black hover:text-white'}`}
                    >
                        {added ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                    </div>
                )})}

                <Toaster position="bottom-right" />
                {/* Modal */}
                {selectedAnime && (
                    <AnimeModal 
                        anime={selectedAnime} 
                        onClose={() => setSelectedAnime(null)} 
                    />
                )}
            </div>
        </section>
        <section className=''>
            <div className='flex justify-center items-center mt-10 mb-10'>
                <h1 className='text-2xl border-4 border-black md:text-5xl font-clickUper'>TOP AIRING</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 md:px-12">
                {TopAiring.length === 0? (<p className="text-center opacity-50 uppercase">Loading top airing...</p>):
                TopAiring.slice(0,4).map((anime, index) => {
                    const added = isInWatchlist(anime.mal_id);
                    return(
                    <div onClick={() => setSelectedAnime(anime)} key={anime.mal_id} className="bg-white h-full w-full max-w-[16rem] mx-auto border-2 relative flex flex-col justify-between items-center border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-2">
                    <div className="h-[12rem] w-[9rem] overflow-hidden border-2 border-black mb-4 group">
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
                    <div className='relative mb-2 flex flex-col min-w-0 '>
                        <h3 className="font-bold text-lg leading-tight line-clamp-2 text-center h-[3.2rem] overflow-hidden">{index+1}. {anime.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs font-bold text-gray-600 mb-4 uppercase">
                        <span>{anime.year || 'Unknown'}</span>
                        <span>•</span>
                        <span>Eps: {anime.episodes || '?'}</span>
                        <span>•</span>
                        <span>{anime.duration ? anime.duration.split(' ')[0] + 'm' : 'N/A'}</span>
                    </div>
                    <button
                        onClick={(e) => {
                        {!added ? toast.success("Added to Watchlist ⭐"): toast.error("Removed from Wathlist")}
                        e.stopPropagation()
                        handleWatchlist(anime)}}
                        className={`w-full py-2 mb-4 font-bold border-2 border-black transition-all uppercase tracking-wider
                        ${added ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-transparent text-black hover:bg-black hover:text-white'}`}
                    >
                        {added ? "Remove from Watchlist" : "Add to Watchlist"}
                    </button>
                    </div>
                )})}
                {/* Modal */}
                {selectedAnime && (
                <AnimeModal 
                        anime={selectedAnime} 
                        onClose={() => setSelectedAnime(null)} 
                    />
                )}
            </div>
            
            
            
        </section>
        
    </main>
  )
}

export default TopAnime
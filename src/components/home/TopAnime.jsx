import React from 'react'
import { useState,useEffect } from 'react';

const TopAnime = () => {
    const [TopAiring, setTopAiring] = useState([]);
    const [TopRanking, setTopRanking] = useState([]);
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

  return (
    <main className='grid grid-cols-2'>
        <section>
            <div className='flex justify-center items-center mt-10'>
                <h1 className='text-5xl font-clickUper'>TOP RANKING</h1>
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-[10rem] m-3 z-10 py-10 px-20 ">
                {TopAiring.length === 0? (<p className="text-center opacity-50 uppercase">Loading top ranked...</p>):
                TopRanking.map((anime) => (
                    <div key={anime.mal_id} className="bg-white h-full w-full border-2 relative flex flex-col items-center border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-2">
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
                        <h3 className="font-bold text-lg leading-tight line-clamp-2">{anime.title}</h3>
                    </div>
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
        </section>
        <section className=''>
            <div className='flex justify-center items-center mt-10'>
                <h1 className='text-5xl font-clickUper'>TOP AIRING</h1>
            </div>
            <div className="grid grid-cols-2 gap-y-6 gap-x-[10rem] m-3 z-10 py-10 px-20 ">
                {TopAiring.length === 0? (<p className="text-center opacity-50 uppercase">Loading top airing...</p>):
                TopAiring.slice(0,4).map((anime) => (
                    <div key={anime.mal_id} className="bg-white h-full w-full border-2 relative flex flex-col items-center border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all p-2">
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
                        <h3 className="font-bold text-lg leading-tight line-clamp-2">{anime.title}</h3>
                    </div>
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
        </section>
        
    </main>
  )
}

export default TopAnime
import React from 'react'
import { useEffect } from 'react';

const AnimeModal = ({ anime, onClose }) => {
            if (!anime) return null;

            return (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
                    onClick={() => onClose()}
                >
                    <div 
                        onClick={(e) => e.stopPropagation()} 
                        className="overflow-hidden bg-white w-full max-w-5xl max-h-[90vh] border-4 border-black shadow-[10px_10px_0_0_#fff] relative flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button 
                            onClick={onClose}
                            className="absolute top-0 right-0 bg-black text-white w-12 h-12 flex items-center justify-center font-bold text-2xl hover:bg-red-600 border-l-4 border-b-4 border-white z-20"
                        >
                            &times;
                        </button>

                        {/* Image Side */}
                        <div className=" w-full md:w-1/3 bg-gray-100 border-r-0 md:border-r-4 border-black p-6 flex flex-col items-center justify-center">
                            <img 
                                src={anime.images.jpg.image_url} 
                                alt={anime.title} 
                                className="w-full rounded-none border-4 border-black shadow-hard-sm"
                            />
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 p-8 md:p-10 bg-white overflow-y-auto">
                            <h2 className="text-4xl md:text-5xl font-black uppercase mb-1 leading-none">{anime.title}</h2>
                            <h3 className="text-xl text-indigo-600 font-bold uppercase mb-6">{anime.title_japanese}</h3>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {anime.genres.map(g => (
                                    <span key={g.mal_id} className="bg-transparent border-2 border-black px-3 py-1 text-xs font-bold uppercase hover:bg-black hover:text-white transition">
                                        {g.name}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-8 border-y-4 border-black py-4">
                                <div className="text-center">
                                    <p className="text-gray-500 text-xs uppercase">Episodes</p>
                                    <p className="font-bold text-sm">{anime.episodes || '?'}</p>
                                </div>
                                <div className="text-center border-l-2 border-gray-300">
                                    <p className="text-gray-500 text-xs uppercase">Status</p>
                                    <p className="font-bold text-sm">{anime.status}</p>
                                </div>
                                <div className="text-center border-l-2 border-gray-300">
                                    <p className="text-gray-500 text-xs uppercase">Rating</p>
                                    <p className="font-bold text-sm truncate px-1">{anime.rating ? anime.rating.split(' ')[0] : 'N/A'}</p>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <h4 className="text-xl font-bold uppercase border-l-8 border-indigo-600 pl-3 mb-2">Synopsis</h4>
                                <p className="text-gray-800 leading-relaxed font-serif text-lg">
                                    {anime.synopsis || "No synopsis available."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

export default AnimeModal
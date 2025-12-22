// components/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import this

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    
    // 2. Initialize the hook
    const navigate = useNavigate();

    const SearchAnime = async(e) => {
        e.preventDefault();
        if (!query) return;

        setLoading(true);
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&sfw`);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            
            // 3. Navigate to results and PASS the data (animeList) inside 'state'
            navigate('/results', { state: { animeList: data.data || [] } });

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    }

  return (
     <div>
        <form onSubmit={SearchAnime} className="flex items-center gap-0">
            {/* ... Your existing input code ... */}
            <input 
                type="text" 
                placeholder={loading ? "LOADING..." : "SEARCH..."} // Cool feedback
                className="h-10 w-48 md:w-64 bg-gray-100 text-black px-4 py-2 font-bold text-sm border-2 border-black border-r-0 focus:outline-none focus:bg-white transition-colors font-clickuper uppercase placeholder-gray-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={loading}
            />
            <button 
                type="submit" 
                disabled={loading}
                className="h-10 px-6 bg-indigo-600 hover:bg-black text-white text-sm font-bold uppercase border-2 border-black transition-colors font-clickuper"
            >
                {loading ? '...' : 'Search'}
            </button>
        </form>
    </div>
  )
}

export default SearchBar;
import icon from '../assets/icon-search.png';
// Import CSS SearchComp
import '../css/searchComp.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchComp = () => {
  const Navigate = useNavigate()
  const [query, setquery] = useState('')
  
  
  
  return (
    <div className="search-bar">

      <input type="text" 
        value={query}
        onChange={(e) => setquery(e.target.value)}        
        placeholder="Selamat Datang di Museum of Art Painting" name="text" className="input-search" />
      <div className="search-icon">
        <img src={icon} onClick={() => Navigate(`/pencarian?q=${query}`)} alt="cari" />
      </div>
    </div>
  );
};

export default SearchComp;

<img src={icon} alt="cari" />;

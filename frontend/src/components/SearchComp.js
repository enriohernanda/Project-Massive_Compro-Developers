import icon from '../assets/icon-search.png';
// Import CSS SearchComp
import '../css/searchComp.css';

const SearchComp = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Selamat Datang di Museum of Art Painting" name="text" className="input-search" />
      <div className="search-icon">
        <img src={icon} alt="cari" />
      </div>
    </div>
  );
};

export default SearchComp;

<img src={icon} alt="cari" />;

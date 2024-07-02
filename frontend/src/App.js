// Import Routes & Route dari React Router
import { Routes, Route } from 'react-router-dom';

// Import Halaman
import Beranda from './pages/Beranda';
import Daftar from './pages/Daftar';
import Masuk from './pages/Masuk';
import LupaPass from './pages/LupaPass';
import PassBaru from './pages/PassBaru';
import TentangKami from './pages/TentangKami';
import Pameran from './pages/Pameran';
import Galeri from './pages/Galeri';
import Seniman from './pages/Seniman';
import LihatSemua from './pages/LihatSemua';
import NavbarComp from './components/NavbarComp';
import Profile from './pages/Profile'
import Images from './pages/Images'
import Koleksi from './pages/Koleksi'
import DetailKarya from './pages/DetailKarya';
import ResultSearch from './pages/ResultSearch';

function App() {
  return (
    <div>
      {/* <NavbarComp /> */}
      <Routes>
        <Route path="/" Component={Beranda} />
        <Route path="/:id/" Component={Beranda} />
        <Route path="/daftar" Component={Daftar} />
        <Route path="/masuk" Component={Masuk} />
        <Route path="/lupa-password" Component={LupaPass} />
        <Route path="/password-baru?" Component={PassBaru} />
        <Route path="/tentang-kami" Component={TentangKami} />
        <Route path="/pameran" Component={Pameran} />
        <Route path="/galeri" Component={Galeri} />
        <Route path="/seniman" Component={Seniman} />
        <Route path="/lihat-semua" Component={LihatSemua} />
        <Route path="/pencarian" Component={ResultSearch} />
        <Route path="/:id/profil" Component={Profile} />
        <Route path="/:id/images" Component={Images} />
        <Route path="/:id/koleksi" Component={Koleksi} />
        <Route path="/:id/detail" Component={DetailKarya} />
      </Routes>
    </div>
  );
}

export default App;

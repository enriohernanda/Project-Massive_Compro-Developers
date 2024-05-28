// Import CSS Daftar
import '../css/daftar.css';

import { useNavigate } from 'react-router-dom';

const Daftar = () => {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className="isi_form">
        <h2 className="judul-daftar">Selamat Datang</h2>
        <form className="form-daftar">
          <label className="label-daftar" htmlFor="nama">
            Nama
          </label>
          <input type="text" id="nama" name="nama" className="input-nama-daftar" placeholder="Masukan nama anda" />
          <label className="label-daftar" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" className="input-email-daftar" placeholder="Masukan email anda" />
          <label className="label-masuk" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" name="password" className="input-password-daftar" placeholder="Buat kata sandi anda" />
          <button id="btn_daftar" type="submit">
            {/* onClick={() => navigate('/masuk')} */}
            Daftar
          </button>
          <p className="txt-daftar">
            <strong id="txt_udhAkun">Sudah punya akun? </strong>
            <a className="login-link" onClick={() => navigate('/masuk')}>
              Login disini
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Daftar;

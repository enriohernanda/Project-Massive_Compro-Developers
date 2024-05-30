// Import Lupa Pass CSS
import '../css/lupaPass.css';

import image from '../assets/bg_login.png';
import icon from '../assets/icon-warning.png';

import { useNavigate } from 'react-router-dom';

const PassBaru = () => {
  let navigate = useNavigate();
  return (
    <div className="passbaru-bg">
      <div className="isi_form_lupa_pass">
        <img className="icon-lupa-pass" src={icon} alt="lupa password" />
        <h2 className="judul-lupa-pass">Lupa Kata Sandi</h2>
        <p className="sub-lupa-pass">Masukkan kata sandi baru anda</p>
        <form className="form-lupa-pass">
          <label className="label-lupa-pass" htmlFor="password">
            Kata Sandi
          </label>
          <input type="password" id="password" name="password" className="input-password-lupa-pass" placeholder="Masukan kata sandi baru anda" />
          <label className="label-lupa-pass" htmlFor="password">
            Konfirmasi Kata Sandi
          </label>
          <input type="password" id="password" name="password" className="input-password-lupa-pass" placeholder="Masukan kata sandi baru anda" />
          <button id="btn_lupa-pass" type="submit" onClick={() => navigate('/masuk')}>
            Kirim
          </button>
          <a className="back-link" onClick={() => navigate('/lupa-password')}>
            Kembali
          </a>
        </form>
      </div>
      <img src={image} alt="" className="ms-auto masuk-image align-self-end d-block" height={'600px'} width={'52%'} />
      <a className="btn_skip" onClick={() => navigate('/')}>
        Skip Now
      </a>
    </div>
  );
};

export default PassBaru;

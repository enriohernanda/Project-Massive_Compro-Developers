// Import Lupa Pass CSS
import '../css/lupaPass.css';

import image from '../assets/bg_login.png';
import icon from '../assets/icon-warning.png';
import logo from '../assets/icon-mopart.png';

import { useNavigate } from 'react-router-dom';

const PassBaru = () => {
  let navigate = useNavigate();
  return (
    <div className="passbaru-bg">
      <div className="logo animate__animated animate__fadeInLeft">
        <img src={logo} alt="MopArt" width={'130px'} />
      </div>
      <div className="isi_form_pass_baru">
        <img className="icon-lupa-pass animate__animated animate__fadeInUp" src={icon} alt="lupa password" />
        <h2 className="judul-lupa-pass animate__animated animate__fadeInUp animate__delay-1s">Lupa Kata Sandi</h2>
        <p className="sub-lupa-pass animate__animated animate__fadeInUp animate__delay-1s">Masukkan kata sandi baru anda</p>
        <form className="form-lupa-pass">
          <label className="label-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" htmlFor="password">
            Kata Sandi
          </label>
          <input type="password" id="password" name="password" className="input-password-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" placeholder="Masukan kata sandi baru anda" />
          <label className="label-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" htmlFor="password">
            Konfirmasi Kata Sandi
          </label>
          <input type="password" id="password" name="password" className="input-password-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" placeholder="Masukan kata sandi baru anda" />
          <button className="baruPass animate__animated animate__fadeInUp animate__delay-1s" id="btn_lupa-pass" type="submit" onClick={() => navigate('/masuk')}>
            Kirim
          </button>
          <a className="back-link animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate('/lupa-password')}>
            Kembali
          </a>
        </form>
      </div>
      <img src={image} alt="" className="ms-auto masuk-image align-self-end d-block animate__animated animate__fadeInRight" height={'600px'} width={'52%'} />
      <a className="btn_skip animate__animated animate__fadeInRight animate__delay-1s" onClick={() => navigate('/')}>
        Skip Now
      </a>
    </div>
  );
};

export default PassBaru;

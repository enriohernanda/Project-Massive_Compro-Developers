// Import Lupa Pass CSS
import '../css/lupaPass.css';

import image from '../assets/bg_login.png';
import icon from '../assets/icon-warning.png';

import { useNavigate } from 'react-router-dom';

const LupaPass = () => {
  let navigate = useNavigate();
  return (
    <div className="lupapass-bg">
      <div className="isi_form_lupa_pass">
        <img className="icon-lupa-pass animate__animated animate__fadeInUp" src={icon} alt="lupa password" />
        <h2 className="judul-lupa-pass animate__animated animate__fadeInUp animate__delay-1s">Lupa Kata Sandi</h2>
        <p className="sub-lupa-pass animate__animated animate__fadeInUp animate__delay-1s">
          Masukkan email anda dan kami akan kirim link untuk <br />
          reset kata sandi anda
        </p>
        <form className="form-lupa-pass">
          <label className="label-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" className="input-email-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" placeholder="Masukan email anda" />
          <button className="lupa animate__animated animate__fadeInUp animate__delay-1s" id="btn_lupa-pass" type="submit" onClick={() => navigate('/password-baru')}>
            Kirim
          </button>
          <a className="back-link animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate('/masuk')}>
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

export default LupaPass;

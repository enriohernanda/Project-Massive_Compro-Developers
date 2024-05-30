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
        <img className="icon-lupa-pass" src={icon} alt="lupa password" />
        <h2 className="judul-lupa-pass">Lupa Kata Sandi</h2>
        <p className="sub-lupa-pass">
          Masukkan email anda dan kami akan kirim link untuk <br />
          reset kata sandi anda
        </p>
        <form className="form-lupa-pass">
          <label className="label-lupa-pass" htmlFor="email">
            Email
          </label>
          <input type="email" id="email" name="email" className="input-email-lupa-pass" placeholder="Masukan email anda" />
          <button id="btn_lupa-pass" type="submit" onClick={() => navigate('/password-baru')}>
            Kirim
          </button>
          <a className="back-link" onClick={() => navigate('/masuk')}>
            Kembali
          </a>
        </form>
      </div>
      <img src={image} alt="" className="ms-auto masuk-image align-self-end d-block" height={'600px'} width={'52%'} />
    </div>
  );
};

export default LupaPass;

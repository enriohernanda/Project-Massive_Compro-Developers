// Import Lupa Pass CSS
import '../css/lupaPass.css';

import image from '../assets/bg_login.png';
import icon from '../assets/icon-warning.png';
import logo from '../assets/icon-mopart.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mailValidation } from '../service/apiService'

const LupaPass = () => {
  let navigate = useNavigate();
  const [userMail, setuserMail] = useState('')
  const handlesubmit =  async (e) => {
    e.preventDefault()
    const response = await mailValidation(userMail)
    alert(response.message)
  }

  return (
    <div className="lupapass-bg">
      <div className="logo animate__animated animate__fadeInLeft">
        <img src={logo} alt="MopArt" width={'130px'} />
      </div>
      <div className="isi_form_lupa_pass">
        <img className="icon-lupa-pass animate__animated animate__fadeInUp" src={icon} alt="lupa password" />
        <h2 className="judul-lupa-pass animate__animated animate__fadeInUp animate__delay-1s">Lupa Kata Sandi</h2>
        <p className="sub-lupa-pass animate__animated animate__fadeInUp animate__delay-1s">
          Masukkan email anda dan kami akan kirim link untuk <br />
          reset kata sandi anda
        </p>
        <form className="form-lupa-pass" onSubmit={handlesubmit}> 
          <label className="label-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" htmlFor="email">
            Email
          </label>
          <input type="email" 
            id="email"
            value={userMail}
            onChange={(e) => setuserMail(e.target.value)} 
            name="email" className="input-email-lupa-pass animate__animated animate__fadeInUp animate__delay-1s" placeholder="Masukan email anda" />
          <button className="lupa animate__animated animate__fadeInUp animate__delay-1s" id="btn_lupa-pass" type="submit">
            Kirim
          </button>
        </form>
          <a className="back-link animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate('/password-baru')}>
            Kembali
          </a>
      </div>
      <img src={image} alt="" className="ms-auto masuk-image align-self-end d-block animate__animated animate__fadeInRight" height={'600px'} width={'52%'} />
      <a className="btn_skip animate__animated animate__fadeInRight animate__delay-1s" onClick={() => navigate('/')}>
        Skip Now
      </a>
    </div>
  );
};

export default LupaPass;

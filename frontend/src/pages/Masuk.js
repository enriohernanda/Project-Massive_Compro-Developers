// Import CSS Masuk
import '../css/masuk.css';
import image from '../assets/bg_login.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Masuk = () => {
  const { login } = useContext(AuthContext)
  let navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }
  return (
    <div className=".masuk-bg">
      <div className="isi_form">
        <h2 className="judul-masuk">
          Selamat Datang <br />
          Kembali
        </h2>
        <form className="form-masuk" onSubmit={handleSubmit}>
          <label className="label-masuk" htmlFor="email">
            Email
          </label>
          <input type="email" 
            id="email" 
            name="email" 
            className="input-email-masuk" 
            placeholder="Masukan email anda"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <label className="label-masuk" htmlFor="password">
            Password
          </label>
          <input type="password" 
            id="password" 
            name="password" 
            className="input-password-masuk" 
            placeholder="Masukkan password anda"
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <a className="forgot-password" onClick={() => navigate('/lupa-password')}>
            Lupa Password?
          </a>
          <button id="btn_masuk" type="submit">
            {/* {onclick = {}} */}
            {/* onClick={() => navigate('/')} */}
            Masuk
          </button>
          <p className="txt-masuk">
            <strong id="txt_blmAkun">Belum punya akun? </strong>
            <a className="register-link" onClick={() => navigate('/daftar')}>
              Daftar disini
            </a>
          </p>
        </form>
      </div>
      <img src={image} alt="" id="background-login" className="ms-auto masuk-image align-self-end d-block" height={'600px'} width={'52%'} />
      <a className="btn_skip" onClick={() => navigate('/')}>
        Skip Now
      </a>
    </div>
  );
};

export default Masuk;

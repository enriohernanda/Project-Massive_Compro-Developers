// Import CSS Daftar
import '../css/daftar.css';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';
import image from '../assets/bg_login.png';

const Daftar = () => {
  
  const { registration } = useContext(AuthContext)
  let navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    await registration(username, email, password)
  }
  return (
    <div className="daftar-bg">
      <div className="isi_form">
        <h2 className="judul-daftar">Selamat Datang</h2>
        <form className="form-daftar" onSubmit={handleSubmit}>
          <label className="label-daftar" htmlFor="nama">
            Nama
          </label>
          <input 
            type="text" 
            id="nama" 
            name="nama"
            required 
            value={username}
            onChange={(e) =>setUsername(e.target.value)}
            className="input-nama-daftar" placeholder="Masukan nama anda" />
          <label className="label-daftar" htmlFor="email">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
            className="input-email-daftar" placeholder="Masukan email anda" />
          <label className="label-masuk" htmlFor="password">
            Password
          </label>
          <input 
            type="password" 
            id="password" 
            name="password"
            required 
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            className="input-password-daftar" placeholder="Buat kata sandi anda" />
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
      <img src={image} id="background-login" alt="" className="ms-auto masuk-image align-self-end d-block" height={'600px'} width={'52%'} />
          <a className="btn_skip" onClick={() => navigate('/')}>
            Skip Now
          </a>
    </div>
  );
};

export default Daftar;

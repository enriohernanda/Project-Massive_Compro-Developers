import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';


import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';

import konten1 from '../assets/header-1.png';
import konten2 from '../assets/header-2.png';
import konten3 from '../assets/header-3.png';
import uploadicon1 from '../assets/file upload 1.png';
import uploadicon2 from '../assets/file upload 2.png';
import arrow from '../assets/arrow.png'
const Profile = () => {
  const navigate = useNavigate();
  const {isAuth, userid, photo_profile} = useContext(AuthContext)
  const url = photo_profile? photo_profile : defaultprofile 
  console.log(url)
  
    return(
        <div className='bodyprofile'>
        <NavbarComp />
        <div className='mainprofile'>
            <div className='profileboard'>
                <img className='photoprofile' src={url} alt='photo-profile' />
                <p className='username'>Satomi</p>
                <p className='country'>Indonesia</p>
                <p className='professi'>Designer</p>
                <div className='hr'></div>
                <div className='followercontainer'>
                    <div className='leftfloat'>
                        <p className=''>Pengikut</p>
                        <p className=''>Mengikuti</p>
                        <p className=''>Disukai</p>
                    </div>
                    <div className='rightfloat'>
                        <p className=''>233</p>
                        <p className=''>233</p>
                        <p className=''>233</p>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='socialcontainer'>
                    <div className='leftfloat'>
                        <p className=''>Instagram</p>
                        <p className=''>Facebook</p>
                        <p className=''>Youtube</p>
                    </div>
                    <div className='rightfloat'>
                        <img className='arrow' src={arrow}/>
                        <img className='arrow' src={arrow}/>
                        <img className='arrow' src={arrow}/>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='created'>
                    <p>
                        Bergabung pada tanggal 20 mei 2024
                    </p>
                </div>
            </div>
            <div className='userimage'>
                <div className='leftfloat-inline' >Upload Terakhir</div>
                <div className='rightfloat-inline'>Lihat Semua</div>
                <div className='latestimage'>
                    <div className='imagecover-list'>
                        <img className='image-lists' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover-list'>
                        <img className='image-lists' src={konten2} alt="The Scream" />
                    </div>
                    <div className='imagecover-list'>
                        <img className='image-lists' src={konten3} alt="The Scream" />
                    </div>
                </div>
                <div className='leftfloat-inline'>Koleksi</div>
                <div className='rightfloat-inline'>Lihat Semua</div>
                <div className='collectedimage'>
                    <div className='imagecover-list'>
                        <img className='image-lists' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover-list'>
                        <img className='image-lists' src={konten2} alt="The Scream" />
                    </div>
                    <div className='imagecover-list'>
                        <img className='image-lists' src={konten3} alt="The Scream" />
                    </div>
                </div>
            </div>
        </div>

        <div className='fileupload-cover'>
            <div className='fileupload'>
                <img src={uploadicon1}/>
            </div>
            <div className='fileupload-form'>
                <p>File</p>
                <input type='file' className='input' placeholder='Masukkan judul anda'></input>
                <p>Judul</p>
                <input className='input' placeholder='Masukkan judul anda'></input>
                <p>Deskripsi</p>
                <textarea className='input' placeholder='Masukkan deskripsi anda'></textarea>
                <div className='button-container'>
                    <button>Kirim</button>
                </div>
            </div>
        </div>
        <FooterComp />
    </div>
    )
}

export default Profile
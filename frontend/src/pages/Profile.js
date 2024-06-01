import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';


import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';

import uploadicon from '../assets/file upload.png'
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
                <img className='photoprofile' src={url} />
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

            </div>
        </div>
            <div className='fileupload'>
            <img src={uploadicon}/>
            </div>
        <FooterComp />
    </div>
    )
}

export default Profile
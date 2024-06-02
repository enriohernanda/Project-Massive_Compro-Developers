import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';


import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';

import konten1 from '../assets/header-1.png';
import konten2 from '../assets/header-2.png';
import konten3 from '../assets/header-3.png';
import uploadicon1 from '../assets/file upload 1.png';
import uploadicon2 from '../assets/file upload 2.png';
import arrow from '../assets/arrow.png'

import { createImage, getProfile, getUserProfile} from '../service/apiService';

const Images = () => {
    const navigate = useNavigate()
    
    return (
        <div className='images-body'>
            <NavbarComp />
            <div className='nav-back'>
                <button onClick={() => navigate('/profil')}>Kembali</button>
            </div>
            <div className='images-main'>
                <div className='leftfloat-inline' >Upload Terakhir</div>
                <div className='imagecover-list'>
                {/* {imagedata.map((image, index) => (
                        <div className='imagecover-list' key={index}>
                            {console.log(image.url)}
                            <img className='image-lists' src={`http://${image.url}`} alt="The Scream" />
                        </div>
                    ))} */}
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                </div>
                <div className='imagecover-list'>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                </div>
                <div className='imagecover-list'>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                    <div className='imagecover'>
                        <img className='image' src={konten1} alt="The Scream" />
                    </div>
                </div>
            </div>
            <FooterComp />
        </div>
    )
}
export default Images
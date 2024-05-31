import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import CardPameran from '../components/CardPameran';
import NavbarComp from '../components/NavbarComp';


import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState } from 'react';

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
                <p className='country'>Indonesia</p>
                <p className='professi'>Designer</p>
                <hr/>
                <div className='followercontainer'>
                    <p className='leftfloat'>Follower</p>
                    <p className='leftfloat'>Follower</p>
                    <p className='leftfloat'>Follower</p>
                    <p className='rightfloat'>233</p>
                    <p className='rightfloat'>233</p>
                    <p className='rightfloat'>233</p>
                </div>
                <div className='socialcontainer'>
                    <p className='leftfloat'>Follower</p>
                    <p className='leftfloat'>Follower</p>
                    <p className='leftfloat'>Follower</p>
                    <p className='rightfloat'>233</p>
                    <p className='rightfloat'>233</p>
                    <p className='rightfloat'>233</p>
                </div>
            </div>
            <div className='userimage'>

            </div>
        </div>
            <div className='fileupload'>

            </div>
        <FooterComp />
    </div>
    )
}

export default Profile
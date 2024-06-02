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
import { useLocation } from 'react-router-dom'

import { getUserCollectionImage } from '../service/apiService';

const Koleksi = () => {
    const location = useLocation() 
    const navigate = useNavigate()
    const [imagedata, setimagedata] = useState([])
    const [userId, setUserId] = useState()
    const [imageId, setImageId] = useState(1)
    const [userparams, setuserparams] = useState()
    
    useEffect(() => {      
        const query = new URLSearchParams(location.search)
        const useridparams = query.get('id')
        setuserparams(useridparams)
   }, [location.search])
 
   useEffect(() =>{
    const fetchdata = async() =>{
        try {
            console.log(userparams, '========================')
            const response = await getUserCollectionImage(userparams)
            setimagedata(response.imagedata)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata()
}, [userparams, location.search])
    return (
        <div className='collection-body'>
            <NavbarComp />
            <div className='nav-back'>
                <button onClick={() => navigate(`/profil?id=${userparams}`)}>Kembali</button>
            </div>
            <div className='images-main'>
                <div className='leftfloat-inline' >Upload Terakhir</div>
                <div className='imagecover-list'>
                    {imagedata.map((image, index) => (
                        <div className='imagecover' key={index}>
                            <img className='image' src={`http://${image.url}`} alt="The Scream" />
                        </div>
                    ))}
                </div>
            </div>
            <FooterComp />
        </div>
    )
}
export default Koleksi
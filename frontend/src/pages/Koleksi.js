import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';


import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate, useParams } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom'

import { getUserCollectionImage } from '../service/apiService';

const Koleksi = () => {
    const {id} = useParams()
    const location = useLocation() 
    const navigate = useNavigate()
    const [imagedata, setimagedata] = useState([])

   useEffect(() =>{
    const fetchdata = async() =>{
        try {
            console.log(id, '========================')
            const response = await getUserCollectionImage(id)
            setimagedata(response.imagedata)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata()
}, [id, location.search])
    return (
        <div className='collection-body'>
            <NavbarComp />
            <div className='nav-back'>
                <button onClick={() => navigate(`/${id}/profil`)}>Kembali</button>
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
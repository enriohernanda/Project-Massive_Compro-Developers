import moment from 'moment';

import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';


import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'

import konten1 from '../assets/header-1.png';
import konten2 from '../assets/header-2.png';
import konten3 from '../assets/header-3.png';
import uploadicon1 from '../assets/file upload 1.png';
import uploadicon2 from '../assets/file upload 2.png';
import arrow from '../assets/arrow.png'

import { createImage, getProfile, getUserProfile} from '../service/apiService';

const Profile = () => {
  const location = useLocation() 
  const navigate = useNavigate();
  const {isAuth, userid, photo_profile, token} = useContext(AuthContext)
  const [visibleform, setvisibleform] = useState(false)
  const [image, setimagefile] = useState(null)
  const [name, setimagename] = useState('')
  const [description, setdescription] = useState('')
  const [userdata, setuserdata] = useState({})
  const [imagedata, setimagedata] = useState([])
  const [collectiondata, setcollectiondata] = useState([])
  const [followed, setfollowed] = useState(0)
  const [follower, setfollower] = useState(0)
  const [userparams, setuserparams] = useState()
  const [trigerprofile, settrigerprofile] = useState(true)
  const url = photo_profile? photo_profile : defaultprofile 
  console.log(url)

  useEffect(() => {      
       const query = new URLSearchParams(location.search)
       const useridparams = query.get('id')
       setuserparams(useridparams)
  }, [location.search])

  useEffect(() => {
      const fetchdata = async () => {
          try {
            const response = await getProfile(isAuth, userparams, token)

            console.log(response)
            setfollowed(response.followed)
            setfollower(response.follower)
            setuserdata(response.userdata)
            if (response.imagedata === "not found") {
                setimagedata([])
            }
            if (response.imagecollection === "not found") {
                setcollectiondata([])
            }
            setimagedata(response.imagedata)
            setcollectiondata(response.imagecollection)
            console.log(imagedata)
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata()
  }, [userparams, location.search])
//   isAuth, trigerprofile, userparams
  const handlevisibleform = () =>{
    setvisibleform(!visibleform)
  }

  const handleform = async(e) => {
    e.preventDefault()
    // if (!formdata) {
    //     return alert('Masukan gambar anda!')
    // }
    // if (!name) {
    //     return alert('Masukan nama karya anda!')
    // }
    // if (!description) {
    //     return alert('Masukan deskripsi gambar anda terlebih dahulu!') 
    // }
    const formdata = new FormData()
    formdata.append('image' , image)
    try {
        const response = await createImage(formdata, token, name, description, image)
    } catch (error) {
        console.log(error)
    }
    settrigerprofile(!trigerprofile)
  }
    return(
        <div className='bodyprofile'>
        <NavbarComp />
        <div className='mainprofile'>
            <div className='profileboard'>
                <img className='photoprofile' src={ userdata.photo_profile === "0" ? defaultprofile : `http://${userdata.photo_profile}` } alt='photo-profile' />
                <p className='username'>{userdata?.username || 'Satomi'}</p>
                <p className='country'>{userdata?.country || "Indonesia" }</p>
                {/* {console.log(userdata.country)} */}
                <p className='professi'>{userdata?.professi || ''}</p>
                <div className='hr'></div>
                {console.log(userdata.photo_profile)}
                <div className='followercontainer'>
                    <div className='leftfloat'>
                        <p className=''>Pengikut</p>
                        <p className=''>Mengikuti</p>
                        <p className=''>Disukai</p>
                    </div>
                    <div className='rightfloat'>
                        <p className=''>{followed}</p>
                        <p className=''>{follower}</p>
                        <p className=''>0</p>
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
                        Bergabung pada tanggal {moment(userdata?.created || '').format('DD MMMM YYYY')}
                    </p>
                </div>
            </div>
            <div className='userimage'>
                <div className='leftfloat-inline' >Upload Terakhir</div>
                {imagedata !== "not found"? (<div className='rightfloat-inline' onClick={()=> navigate(`/images?id=${userparams}`)}>Lihat Semua</div>) : (<div></div>)}
                <div className='latestimage'>
                    
                {imagedata !==  "not found"? (imagedata.map((image, index) => (
                        <div className='imagecover-list' key={index}>
                            {console.log(image.url)}
                            <img className='image-lists' src={`http://${image.url}`} alt={image.name} />
                        </div>
                    ))) : (<div className='notif-not-found'>
                    Pengguna Belum mengupload karya
                </div>) }

                </div>
                <div className='leftfloat-inline'>Koleksi</div>
                {collectiondata !== "not found" ?(<div className='rightfloat-inline' onClick={()=> navigate(`/Koleksi?id=${userparams}`)}>Lihat Semua</div>) : (<div></div>)}
                
                <div className='collectedimage'>
                    {collectiondata !==  "not found"? (collectiondata.map((image, index) => (
                        <div className='imagecover-list' key={index}>
                            {console.log(image.url)}
                            <img className='image-lists' src={`http://${image.url}`} alt={image.name} />
                        </div>
                    ))) : (<div className='notif-not-found'>
                    Pengguna Belum memiliki koleksi
                </div>) }
                    
                </div>
            </div>
        </div>
        {userid === userparams? (
        <div className='fileupload-cover'>
            <div className='fileupload'>
            {visibleform ? (<img src={uploadicon2} onClick={handlevisibleform}/> ) : (<img src={uploadicon1} onClick={handlevisibleform}/>) }
            </div>
            {visibleform && (
                <form className='fileupload-form' onSubmit={handleform}>
                    <p>File</p>
                    <input type='file' required
                        onChange={(e) => setimagefile(e.target.files[0])} className='input' placeholder='Masukkan judul anda'></input>
                    <p>Judul</p>
                    <input className='input' required
                        value={name} 
                        onChange={(e) => setimagename(e.target.value)} placeholder='Masukkan judul anda'></input>
                    <p>Deskripsi</p>
                    <textarea className='input' required
                        value={description}
                        onChange={(e) => setdescription(e.target.value)} placeholder='Masukkan deskripsi anda'></textarea>
                    <div className='button-container'>
                        <button type='submit'>Kirim</button>
                    </div>
                </form>
            )}
        </div>) : (<div></div>)}
        <FooterComp />
    </div>
    )
}

export default Profile
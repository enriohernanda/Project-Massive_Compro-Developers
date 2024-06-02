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

const Profile = () => {
  const navigate = useNavigate();
  const {isAuth, userid, photo_profile, token} = useContext(AuthContext)
  const [visibleform, setvisibleform] = useState(false)
  const [image, setimagefile] = useState(null)
  const [name, setimagename] = useState('')
  const [description, setdescription] = useState('')
  const [userdata, setuserdata] = useState({})
  const [imagedata, setimagedata] = useState([])
  const [followed, setfollowed] = useState(0)
  const [follower, setfollower] = useState(0)
  const [trigerprofile, settrigerprofile] = useState(true)
  const url = photo_profile? photo_profile : defaultprofile 
  console.log(url)

  useEffect(() => {
    const fetchdata = async () => {
        try {
            const response = await getProfile(isAuth, 1,token)
            console.log(response)
            setfollowed(response.followed)
            setfollower(response.follower)
            setuserdata(response.userdata)
            setimagedata(response.imagedata)
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata()
  }, [isAuth, token, trigerprofile])

  const handlevisibleform = () =>{
    setvisibleform(!visibleform)
  }

  const handleform = async(e) => {
    e.preventDefault()
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
                <img className='photoprofile' src={url} alt='photo-profile' />
                <p className='username'>Satomi</p>
                <p className='country'>{userdata.country}</p>
                <p className='professi'>{userdata.professi}</p>
                <div className='hr'></div>
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
                        Bergabung pada tanggal 20 mei 2024
                    </p>
                </div>
            </div>
            <div className='userimage'>
                <div className='leftfloat-inline' >Upload Terakhir</div>
                <div className='rightfloat-inline' onClick={() => navigate('/images')}>Lihat Semua</div>
                <div className='latestimage'>
                    {imagedata.map((image, index) => (
                        <div className='imagecover-list' key={index}>
                            {console.log(image.url)}
                            <img className='image-lists' src={`http://${image.url}`} alt="The Scream" />
                        </div>
                    ))}
                </div>
                <div className='leftfloat-inline'>Koleksi</div>
                <div className='rightfloat-inline' >Lihat Semua</div>
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
            <div className='fileupload' onClick={handlevisibleform}>
            {visibleform ? (<img src={uploadicon2} onClick={handlevisibleform}/> ) : (<img src={uploadicon1} onClick={handlevisibleform}/>) }
                
            </div>
            {visibleform && (
                <form className='fileupload-form' onSubmit={handleform}>
                    <p>File</p>
                    <input type='file' 
                        onChange={(e) => setimagefile(e.target.files[0])} className='input' placeholder='Masukkan judul anda'></input>
                    <p>Judul</p>
                    <input className='input' 
                        value={name} 
                        onChange={(e) => setimagename(e.target.value)} placeholder='Masukkan judul anda'></input>
                    <p>Deskripsi</p>
                    <textarea className='input' 
                        value={description}
                        onChange={(e) => setdescription(e.target.value)} placeholder='Masukkan deskripsi anda'></textarea>
                    <div className='button-container'>
                        <button type='submit'>Kirim</button>
                    </div>
                </form>
            )}
        </div>
        <FooterComp />
    </div>
    )
}

export default Profile
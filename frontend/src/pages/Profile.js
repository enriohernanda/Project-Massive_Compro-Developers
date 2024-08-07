import moment from 'moment';

import FooterComp from '../components/FooterComp';
import NavbarComp from '../components/NavbarComp';
import StartMessage from '../components/Startmessage'

import defaultprofile from '../assets/pembuat-male.png'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { useContext, useState, useEffect, useRef } from 'react';
import { useLocation, useParams} from 'react-router-dom'


import uploadicon1 from '../assets/file upload 1.png';
import uploadicon2 from '../assets/file upload 2.png';
import arrow from '../assets/arrow.png'

import { createImage, getProfile, getUserProfile, countLike, getFollowing, createFollower, deleteFollower} from '../service/apiService';

const Profile = () => {
  const { id } = useParams() 
  const contentRef = useRef() 
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
  const [like, setlike] = useState(0)
  const [trigerprofile, settrigerprofile] = useState(true)
  const [trigermessage, settrigermessage] = useState(false)
  const [isfollowed, setisfollowed] = useState(false)
  const url = photo_profile? photo_profile : defaultprofile 
  console.log(url)

  useEffect(() => {
      const fetchdata = async () => {
          try {
            console.log("Token : ",token)
            const response = await getProfile(isAuth, id, token)
            console.log('userid : ',userid)
            console.log('id : ',id)
            const countlike = await countLike(id)
            setlike(countlike)
            console.log("Count Like :",countlike)
            console.log("Response :",response)
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
  }, [id, isfollowed])


  useEffect(() => {
    const fetchdata = async () => {
        try {
            if (userid === id) {
                return
            }
            const response = await getFollowing(isAuth, id, token)
            if (response) {
                setisfollowed(response.result? response.result : false)
                console.log("Response ISFOLLOWED: ", response.result)
            }
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata()
  }, [isfollowed])

//   isAuth, trigerprofile, id
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
        const response = await createImage(isAuth, formdata, token, name, description, image)
    } catch (error) {
        console.log(error)
    }
    settrigerprofile(!trigerprofile)
  }
  const outAreaClick = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
        settrigermessage(false)
    }

}
useEffect(() => {
    document.addEventListener('click', outAreaClick, true);
    return () => {
        document.addEventListener('click', outAreaClick, true);
    }
}, [])

const handlebuttonfollower = async () => {
    if (!token) {
        return
    }
    if (isfollowed) {
        
        console.log("Menghapus Follower")
        const response = await deleteFollower(isAuth, id, token)
        console.log("Tatus :",response.status)
        if (response) {
            setisfollowed(false)            
        }
        return
    }
    console.log("Membuat Follower :", isfollowed)
    const response = await createFollower(isAuth, id, token)
    if (response) {
        return setisfollowed(true)            
    }
    setisfollowed(true)            
}
    return(
        <div className='bodyprofile'>
        <NavbarComp />
        { trigermessage && token? <div ref={contentRef}>
            <StartMessage/> 
        </div> : ""}
        <div className='mainprofile'>
            <div className='profileboard'>
                <img className='photoprofile' src={ userdata.photo_profile === "0" ? defaultprofile : `${userdata.photo_profile}` } alt='photo-profile' />
                <p className='username'>{userdata?.username || ''}</p>
                <p className='country'>{userdata?.country || `Indonesia` }</p>
                {/* {console.log(userdata.country)} */}
                <p className='professi'>{userdata?.professi || ''}</p>
                {console.log("userid : ",userid,"dan id params :" , id)}
                {userid == id? (<div></div>) : (<button className='button-follow' onClick={handlebuttonfollower} >{isfollowed? "Mengikuti" : "Ikuti" }</button> ) }
                {userid == id? "" : (<button className='button-message' onClick={() => settrigermessage(!trigermessage)}>Kirim Pesan</button>) }
                <div className='hr'></div>
                {console.log(userdata.photo_profile)}
                <div className='followercontainer'>
                    <div className='inline-space-between'>
                        <p className=''>Pengikut</p>
                        <p className=''>{followed}</p>
                    </div>
                    <div className='inline-space-between'>
                        <p className=''>Mengikuti</p>
                        <p className=''>{follower}</p>
                    </div>
                    <div className='inline-space-between'>
                        <p className=''>Disukai</p>
                        <p className=''>{like?like : 0}</p>
                    </div>
                </div>
                <div className='hr'></div>
                <div className='socialcontainer'>
                    <div className='inline-space-between'>
                        <p className=''>Instagram</p>
                        {userdata.instagram?
                            <img className='arrow' src={arrow} onClick={() => window.location.href = userdata.instagram? `http://instagram.com/${userdata.instagram}` : ''}/>
                            : <p className='arrow'>Tidak ada</p> 
                        }
                    </div>
                    <div className='inline-space-between'>
                        <p className=''>Facebook</p>
                        {userdata.facebook?
                            <img className='arrow' src={arrow} onClick={() => window.location.href = userdata.facebook? `http://facebook.com/${userdata.facebook}` : ''}/>
                            : <p className='arrow'>Tidak ada</p> 
                        }
                    </div>
                    <div className='inline-space-between'>
                        <p className=''>Youtube</p>
                        {userdata.youtube?
                            <img className='arrow' src={arrow} onClick={() => window.location.href = userdata.youtube? `http://youtube.com/c/${userdata.youtube}` : ''}/>
                            : <p className='arrow'>Tidak ada</p> 
                        }
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
                <div className='leftfloat-inline' >Unggahan Terakhir</div>
                {imagedata !== "not found"? (<div className='rightfloat-inline' onClick={()=> navigate(`/${id}/images`)}>Lihat Semua</div>) : (<div></div>)}
                <div className='latestimage'>
                    
                {imagedata !==  "not found"? (imagedata.map((image, index) => (
                        <div className='imagecover-list' key={index}>
                            {console.log(image.url)}
                            <img className='image-lists' src={`${image.url}`} alt={image.name} />
                        </div>
                    ))) : (<div className='notif-not-found'>
                    Pengguna Belum mengupload karya
                </div>) }

                </div>
                <div className='leftfloat-inline'>Koleksi</div>
                {collectiondata !== "not found" ?(<div className='rightfloat-inline' onClick={()=> navigate(`/${id}/Koleksi`)}>Lihat Semua</div>) : (<div></div>)}
                
                <div className='collectedimage'>
                    {collectiondata !==  "not found"? (collectiondata.map((image, index) => (
                        <div className='imagecover-list' key={index}>
                            {console.log(image.url)}
                            <img className='image-lists' src={`${image.url}`} alt={image.name} />
                        </div>
                    ))) : (<div className='notif-not-found'>
                    Pengguna Belum memiliki koleksi
                </div>) }
                    
                </div>
            </div>
        </div>
        {userid == id? (
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
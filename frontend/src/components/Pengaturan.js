
import { useState, useEffect, useContext } from "react"
import {updateProfile} from '../service/apiService'
import { AuthContext } from "../context/AuthContext"
const Pengaturan = () => {
    const {token, isAuth} = useContext(AuthContext)
    const [Userphoto_profile, setUserphoto_profile] = useState()
    const [Instagram, setInstagram] = useState('')
    const [Facebook, setFacebook] = useState('')
    const [Youtube, setYoutube] = useState('')
    const [Professi, setProfessi] = useState('')
    const [Country, setCountry] = useState('')

    const handlesubmit = async (e) => {
        e.preventDefault()
        const formdata = new FormData()
        formdata.append('profile' , Userphoto_profile)
        try {
            await updateProfile(formdata, Userphoto_profile, Country, Professi, Instagram, Facebook, Youtube, token, isAuth)
        } catch (error) {
            console.log(error)
        }
      }

    return (
        <div class="pengaturan-container">
            <form onSubmit={handlesubmit}>
                <p>
                    Photo Profile
                </p>
                <input type="file" placeholder="File" draggable="true" onChange={(e) => setUserphoto_profile(e.target.files[0])}/>
                <select name="" id="" draggable="true" onChange={(e) => setCountry(e.target.value)}>
                    <option value="1">Indonesia</option>
                    <option value="2">Malaysia</option>
                    <option value="3">Amerika</option>
                    <option value="4">Inggris</option>
                    <option value="5">Jepang</option>
                </select>
                <select name="" id="" onChange={(e) => setProfessi(e.target.value)}>
                    <option value="Programer">Programer</option>
                    <option value="Petani">Petani</option>
                    <option value="Seniman">Seniman</option>
                    <option value="Designer">Designer</option>
                    <option value="Karyawan">Karyawan</option>
                    <option value="Guru">Guru</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Polisi">Polisi</option>
                    <option value="Siswa">Siswa</option>
                    <option value="Mahasiswa">Mahasiswa</option>
                </select>
                <div>
                    <p>Instagram</p>
                    <input type="text" placeholder="Example : mopART" value={Instagram} onChange={(e) => setInstagram(e.target.value)}/>
                </div>
                <div>
                    <p>Youtube</p>
                    <input type="text" placeholder="Example : channel_ID" value={Youtube} onChange={(e) => setYoutube(e.target.value)}/>
                </div>
                <div>
                    <p>Facebook</p>
                    <input type="text" placeholder="Example : mopartOfficial" value={Facebook} onChange={(e) => setFacebook(e.target.value)}/>
                </div>
                <button type="submit">Kirim</button>
            </form>
        </div>
    )
}
export default Pengaturan
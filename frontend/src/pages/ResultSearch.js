import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import foto1 from '../assets/galeri-1.png';
import NavbarComp from '../components/NavbarComp';

import { getImageByName } from '../service/apiService'
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ResultSearch = () => {
    const location = useLocation()
    const queryparams = new URLSearchParams(location.search)
    const query = queryparams.get('q')
    
    const Navigate = useNavigate()
    const [imageid, seImageId] = useState(1)
    const [limit, setlimit] = useState(26)
    const [direction, setdirection] = useState("forward")
    const [images, setimages] = useState([])
  
    useEffect(() => {
        try {
            console.log("query :" , query)
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
      const fetchdata = async () => {
        try {
          const response = await getImageByName(query)
          console.log("Response Image Result Search : ",response)
          setimages(response? response : [])
        } catch (error) {
          console.log(error)
        }
      }
      fetchdata()
    }, [])

    return (
      <div>
        <NavbarComp />
        <SlideHeaderComp />
        <SearchComp />
        <div className="galeri">
            <div className='head bolder'>Hasil Pencarian</div>
          <div className="foto-galeri row justify-content-center">
  
           {images.length > 0 ? ( images.map((eachimage, index) => (
            <div key={index} className="imagecover card-galeri col-md-4 mb-4" onClick={() => Navigate(`/${eachimage.id}/detail`)}>
              <img src={eachimage.url? `${eachimage.url}` : foto1} alt="foto1" className='image'/>
              <div className="intro-galeri">
                <h2>{eachimage.imageName}</h2>
                <p>
                 {eachimage.description? eachimage.description.substring(0, 250) : ""}{eachimage.description? (eachimage.description.length > 250? "..." : "") : "" }
                </p>
              </div>
            </div>
           ))) : <div className='result-notif'>Gambar Tidak Ditemukan</div>}
        </div>
        </div>
        <FooterComp />
      </div>
    )
}
export default ResultSearch
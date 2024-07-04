import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import foto1 from '../assets/galeri-1.png';
import foto2 from '../assets/galeri-2.png';
import foto3 from '../assets/galeri-3.png';
import foto4 from '../assets/galeri-4.png';
import foto5 from '../assets/galeri-5.png';
import foto6 from '../assets/galeri-6.png';
import foto7 from '../assets/galeri-7.png';
import foto8 from '../assets/galeri-8.png';
import foto9 from '../assets/galeri-9.png';
import NavbarComp from '../components/NavbarComp';

import { getImages } from '../service/apiService';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Galeri = () => {
  const Navigate = useNavigate();
  const [imageid, seImageId] = useState(1);
  const [limit, setlimit] = useState(16);
  const [direction, setdirection] = useState('forward');
  const [images, setimages] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await getImages(imageid, direction, limit);
        console.log('Response Gallery : ', response);
        setimages(response.result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);
  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="galeri">
        <div className="foto-galeri row justify-content-center" data-aos="fade-up" data-aos-duration="1000">
          {images.length > 0
            ? images.map((eachimage, index) => (
                <div key={index} className="imagecover card-galeri col-md-4 mb-4" onClick={() => Navigate(`/${eachimage.id}/detail`)}>
                  <img src={eachimage.url ? `${eachimage.url}` : foto1} alt="foto1" className="image" />
                  <div className="intro-galeri">
                    <h2>{eachimage.name}</h2>
                    <p>
                      {eachimage.description.substring(0, 250)}
                      {eachimage.description.length > 250 ? '...' : ''}
                    </p>
                  </div>
                </div>
              ))
            : ''}
          {/* <div className="card-galeri col-md-4 mb-4">
            <img src={foto1} alt="foto1" />
            <div className="intro-galeri">
              <h2>Mona Lisa</h2>
              <p>
                Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang
                menjadi pusat perhatian, studi, mitologi, dan parodi.
              </p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto2} alt="foto2" />
            <div className="intro-galeri">
              <h2>Tiga Musisi (Picasso)</h2>
              <p>Tiga Musisi , juga dikenal sebagai Musisi Bertopeng atau Musisi Bertopeng , adalah lukisan cat minyak besar yang dibuat oleh seniman Spanyol Pablo Picasso . Dia melukis dua versi Tiga Musisi .</p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto3} alt="foto3" />
            <div className="intro-galeri">
              <h2>Guernica</h2>
              <p>
                Guernica (bahasa Spanyol: [ɡeɾˈnika], bahasa Basque: [ɡernika]) adalah lukisan minyak besar di atas kanvas karya seniman Spanyol Pablo Picasso yang selesai dibuat pada Juni 1937. Lukisan ini sekarang berada di Museo Reina
                Sofía di Madrid.
              </p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto4} alt="foto4" />
            <div className="intro-galeri">
              <h2>Night Watch</h2>
              <p>De Nachtwacht (bahasa Belanda, berarti Ronda Malam) adalah nama untuk karya paling terkenal pelukis Belanda Rembrandt Harmenszoon van Rijn.</p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto5} alt="foto5" />
            <div className="intro-galeri">
              <h2>Las Meninas</h2>
              <p>Las Meninas (bahasa Spanyoluntuk 'Nyonya yang sedang menunggu' [a] diucapkan [las meˈninas] ) adalah lukisan tahun 1656 diMuseo del PradodiMadrid, karyaDiego Velázquez, seniman terkemukaBarok Spanyol.</p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto6} alt="foto6" />
            <div className="intro-galeri">
              <h2>Teras Kafé pada Malam Hari</h2>
              <p>
                Teras Kafé pada Malam Hari, yang juga dikenal sebagai Teras Kafe di Place du Forum, adalah sebuah lukisan minyak yang dibuat oleh seniman Belanda Vincent van Gogh saat berada di Arles, Prancis, pada pertengahan September
                1888.
              </p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto7} alt="foto7" />
            <div className="intro-galeri">
              <h2>Potret Arnolfini</h2>
              <p>
                Potret Arnolfini (atau Pernikahan Arnolfini , Pernikahan Arnolfini , Potret Giovanni Arnolfini dan Istrinya , atau judul lainnya) adalah lukisan cat minyak tahun 1434 di atas panel kayu ek karyapelukis Belanda Awal Jan van
                Eyck .
              </p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto8} alt="foto8" />
            <div className="intro-galeri">
              <h2>Perguruan Athena</h2>
              <p>Perguruan Athena (bahasa Italia: Scuola di Atene) adalah sebuah fresko karya Raffaello Sanzio yang menggambarkan para filsuf Abad Renaisans yang berdiri di dekat para ilmuwan Romawi dan Yunani Kuno.</p>
            </div>
          </div>
          <div className="card-galeri col-md-4 mb-4">
            <img src={foto9} alt="foto9" />
            <div className="intro-galeri">
              <h2>Jeritan</h2>
              <p>
                Jeritan (bahasa Norwegia: Skrik, 1893; judul bahasa Inggris: The Scream) adalah sebutan untuk empat buah versi lukisan ekspresionis oleh seniman Norwegia Edward Munch yang menjadi sumber inspirasi bagi banyak pelukis lainnya
                dalam aliran ini.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Galeri;

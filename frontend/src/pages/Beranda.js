import SearchComp from '../components/SearchComp';
import SlideHeaderComp from '../components/SlideHeaderComp';
import konten from '../assets/header-5.png';
import FooterComp from '../components/FooterComp';
import ButtonLSComp from '../components/ButtonLSComp';
import NavbarComp from '../components/NavbarComp';

import { getimagedetail } from '../service/apiService';

import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Beranda = () => {
  const { isAuth, token, userid } = useContext(AuthContext);
  const [url, seturl] = useState();
  const [name, setname] = useState();
  const [description, setdescription] = useState();

  console.log('AUTH BERANDa', isAuth);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        console.log('Response Beranda : Auth: ', isAuth);
        const response = await getimagedetail(false, 1, token, userid);
        console.log('Response Beranda : ', response);
        seturl(response.urlimage);
        setname(response.name);
        setdescription(response.description);
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
      <div className="konten-beranda" data-aos="fade-up" data-aos-duration="1000">
        <div className="imagecover">
          <img className="image" src={url === '0' ? konten : `${url}`} alt="The Scream" />
        </div>
        <h2>{name ? name : 'Malam Berbintang'}</h2>
        <p>{description}</p>
        {/* <p>
          Jeritan (bahasa Norwegia: Skrik, 1893; judul bahasa Inggris: The Scream) adalah sebutan untuk empat buah versi lukisan ekspresionis oleh seniman Norwegia Edward Munch yang menjadi sumber inspirasi bagi banyak pelukis lainnya dalam
          aliran ini. Lukisan ini dianggap oleh banyak orang sebagai karyanya yang paling penting. Sebagian lagi mengatakan lukisan ini melambangkan manusia modern yang tercekam oleh serangan angst kecemasan eksistensial, dengan cakrawala
          yang diilhami oleh senja yang merah, yang dilihat setelah letusan Gunung Krakatau pada 1883.[5]Lansekap di belakang adalah Oslofjord, yang dilihat dari bukit Ekeberg. Kata skrik dalam bahasa Norwegia biasanya diterjemahkan menjadi
          "scream" (jeritan), namun kata ini juga mempunyai akar kata yang sama dengan kata bahasa Inggris shriek. Kadang-kadang lukisan ini disebut juga The Cry ("Tangisan").
        </p>
        <p>
          Versi tempera di atas karton (berukuran 83,5 x 66 cm) yang sebelumnya terdapat di Museum Munch, Oslo, Norwegia (lihat galeri), dan sebuah lukisan minyak, tempera, dan pastel di atas karton (ukuran 91 x 73,5 cm) di Galeri Nasional
          (tampak di sebelah kanan), juga di Oslo. Versi ketiga juga dimiliki oleh Museum Munch, dan yang keempat dimiliki oleh Petter Olsen. Munch belakangan juga menerjemahkan gambar ini ke dalam bentuk litograf (lihat galeri), sehingga
          gambarya dapat direproduksi dalam berbagai tulisan tinjauan di seluruh dunia. Sejak 1994, dua versi terpisah dari Jeritan ini dicuri oleh pencuri-pencuri karya seni, tetapi akhirnya keduanya telah ditemukan kembali. Pada tanggal 2
          Mei 2012, lukisan The Scream terjual sebesar US$ 119.922.500 atau setara dengan Rp 5,079 triliun dalam pelelangan di rumah lelang Sotheby's, New York.[2]
        </p> */}
        <div className="btngroup">{token ? <ButtonLSComp /> : ''}</div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Beranda;

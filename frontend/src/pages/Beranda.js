import SearchComp from '../components/SearchComp';
import SlideHeaderComp from '../components/SlideHeaderComp';
import konten from '../assets/konten-beranda.png';
import FooterComp from '../components/FooterComp';
import ButtonLSComp from '../components/ButtonLSComp';
import NavbarComp from '../components/NavbarComp';

const Beranda = () => {
  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="konten-beranda">
        <img src={konten} alt="The Scream" />
        <h2>The Scream</h2>
        <p>
          Jeritan (bahasa Norwegia: Skrik, 1893; judul bahasa Inggris: The Scream) adalah sebutan untuk empat buah versi lukisan ekspresionis oleh seniman Norwegia Edward Munch yang menjadi sumber inspirasi bagi banyak pelukis lainnya dalam
          aliran ini. Lukisan ini dianggap oleh banyak orang sebagai karyanya yang paling penting. Sebagian lagi mengatakan lukisan ini melambangkan manusia modern yang tercekam oleh serangan angst kecemasan eksistensial, dengan cakrawala
          yang diilhami oleh senja yang merah, yang dilihat setelah letusan Gunung Krakatau pada 1883.[1]Lansekap di belakang adalah Oslofjord, yang dilihat dari bukit Ekeberg. Kata skrik dalam bahasa Norwegia biasanya diterjemahkan menjadi
          "scream" (jeritan), namun kata ini juga mempunyai akar kata yang sama dengan kata bahasa Inggris shriek. Kadang-kadang lukisan ini disebut juga The Cry ("Tangisan").
        </p>
        <p>
          Versi tempera di atas karton (berukuran 83,5 x 66 cm) yang sebelumnya terdapat di Museum Munch, Oslo, Norwegia (lihat galeri), dan sebuah lukisan minyak, tempera, dan pastel di atas karton (ukuran 91 x 73,5 cm) di Galeri Nasional
          (tampak di sebelah kanan), juga di Oslo. Versi ketiga juga dimiliki oleh Museum Munch, dan yang keempat dimiliki oleh Petter Olsen. Munch belakangan juga menerjemahkan gambar ini ke dalam bentuk litograf (lihat galeri), sehingga
          gambarya dapat direproduksi dalam berbagai tulisan tinjauan di seluruh dunia. Sejak 1994, dua versi terpisah dari Jeritan ini dicuri oleh pencuri-pencuri karya seni, tetapi akhirnya keduanya telah ditemukan kembali. Pada tanggal 2
          Mei 2012, lukisan The Scream terjual sebesar US$ 119.922.500 atau setara dengan Rp 1,079 triliun dalam pelelangan di rumah lelang Sotheby's, New York.[2]
        </p>
        <div className="btngroup">
          <ButtonLSComp />
        </div>
      </div>
      <FooterComp />
    </div>
  );
};

export default Beranda;

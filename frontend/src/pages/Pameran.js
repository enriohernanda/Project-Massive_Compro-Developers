import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import CardPameran from '../components/CardPameran';

// import assets pameran terbaru
import konten1 from '../assets/pameran-terbaru1.png';
import konten2 from '../assets/pameran-terbaru2.png';
import konten3 from '../assets/pameran-terbaru3.png';

//import assets pameran trending
import konten4 from '../assets/pameran-trending1.png';
import konten5 from '../assets/pameran-trending2.png';
import konten6 from '../assets/pameran-trending3.png';
import NavbarComp from '../components/NavbarComp';

const Pameran = () => {
  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="konten-pameran">
        <h2>TERBARU</h2>
        <CardPameran
          image1={konten1}
          image2={konten2}
          image3={konten3}
          image4={konten1}
          image5={konten2}
          image6={konten3}
          judul1="Malam Berbintang"
          text1="Malam Berbintang adalah sebuah lukisan minyak di kanvas karya pelukis pasca-Impresionis Belanda Vincent van Gogh. Dilukis pada Juni 1889, lukisan tersebut menggambarkan pemandangan dari jendela yang menghadap ke arah timur dari kamar rumah sakit jiwanya di Saint-Rémy-de-Provence."
          judul2="Mona Lisa"
          text2="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul3="Girl with a Pearl Earring"
          text3="Gadis dengan Anting-Anting Mutiara (Belanda: Het Meisje met de Parel atau bahasa Inggris: Girl with a Pearl Earring) adalah salah satu lukisan adikarya pelukis Belanda Johannes Vermeer."
          judul4="Malam Berbintang"
          text4="Malam Berbintang adalah sebuah lukisan minyak di kanvas karya pelukis pasca-Impresionis Belanda Vincent van Gogh. Dilukis pada Juni 1889, lukisan tersebut menggambarkan pemandangan dari jendela yang menghadap ke arah timur dari kamar rumah sakit jiwanya di Saint-Rémy-de-Provence."
          judul5="Mona Lisa"
          text5="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul6="Girl with a Pearl Earring"
          text6="Gadis dengan Anting-Anting Mutiara (Belanda: Het Meisje met de Parel atau bahasa Inggris: Girl with a Pearl Earring) adalah salah satu lukisan adikarya pelukis Belanda Johannes Vermeer."
        />
        <h2 id="heading-trending">TRENDING</h2>
        <CardPameran
          image1={konten4}
          image2={konten5}
          image3={konten6}
          image4={konten4}
          image5={konten5}
          image6={konten6}
          judul1="American Gothic"
          text1="American Gothic adalah sebuah lukisan yang dibuat oleh seorang pelukis Amerika Serikat yang bernama Grant Wood. American Gothic dibuat pada tahun 1930. American Gothic pertama kali dipamerkan di Institut Seni Chicago."
          judul2="Cafe Terrace at Night"
          text2="Teras Kafé pada Malam Hari, yang juga dikenal sebagai Teras Kafe di Place du Forum, adalah sebuah lukisan minyak yang dibuat oleh seniman Belanda Vincent van Gogh saat berada di Arles, Prancis, pada pertengahan September 1888. Lukisan tersebut tak bertanda tangan, tetapi dideskripsikan dan disebutkan oleh seniman tersebut dalam tiga surat."
          judul3="The Son of Man"
          text3="Anak Manusia ( Perancis : Le fils de l'homme ) adalah lukisan tahun 1964 karyapelukis surealis Belgia René Magritte. Ini mungkin karya seninya yang paling terkenal.
          Magritte melukisnya sebagai potret diri . Lukisan itu terdiri dari seorang pria bermantel dan bertopi bowler berdiri di depan tembok rendah, di baliknya terdapat laut dan langit mendung."
          judul4="American Gothic"
          text4="American Gothic adalah sebuah lukisan yang dibuat oleh seorang pelukis Amerika Serikat yang bernama Grant Wood. American Gothic dibuat pada tahun 1930. American Gothic pertama kali dipamerkan di Institut Seni Chicago."
          judul5="Cafe Terrace at Night"
          text5="Teras Kafé pada Malam Hari, yang juga dikenal sebagai Teras Kafe di Place du Forum, adalah sebuah lukisan minyak yang dibuat oleh seniman Belanda Vincent van Gogh saat berada di Arles, Prancis, pada pertengahan September 1888. Lukisan tersebut tak bertanda tangan, tetapi dideskripsikan dan disebutkan oleh seniman tersebut dalam tiga surat."
          judul6="The Son of Man"
          text6="Anak Manusia ( Perancis : Le fils de l'homme ) adalah lukisan tahun 1964 karyapelukis surealis Belgia René Magritte. Ini mungkin karya seninya yang paling terkenal.
          Magritte melukisnya sebagai potret diri . Lukisan itu terdiri dari seorang pria bermantel dan bertopi bowler berdiri di depan tembok rendah, di baliknya terdapat laut dan langit mendung."
        />
      </div>
      <FooterComp />
    </div>
  );
};

export default Pameran;

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

const Pameran = () => {
  return (
    <div>
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
          judul1="Mona Lisa"
          text1="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul2="Mona Lisa"
          text2="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul3="Mona Lisa"
          text3="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul4="Mona Lisa"
          text4="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul5="Mona Lisa"
          text5="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul6="Mona Lisa"
          text6="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
        />
        <h2 id="heading-trending">TRENDING</h2>
        <CardPameran
          image1={konten4}
          image2={konten5}
          image3={konten6}
          image4={konten4}
          image5={konten5}
          image6={konten6}
          judul1="Mona Lisa"
          text1="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul2="Mona Lisa"
          text2="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul3="Mona Lisa"
          text3="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul4="Mona Lisa"
          text4="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul5="Mona Lisa"
          text5="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
          judul6="Mona Lisa"
          text6="Monalisa adalah lukisan minyak di atas kayu popular yang dibuat oleh Leonardo da Vinci pada abad ke-16. Lukisan ini sering dianggap sebagai salah satu lukisan paling terkenal di dunia dan hanya sedikit karya seni lain yang 
          menjadi pusat perhatian, studi, mitologi, dan parodi."
        />
      </div>
      <FooterComp />
    </div>
  );
};

export default Pameran;

import SlideHeaderComp from '../components/SlideHeaderComp';
import SearchComp from '../components/SearchComp';
import FooterComp from '../components/FooterComp';
import kontenTtg1 from '../assets/konten-tentang-1.png';
import kontenTtg2 from '../assets/konten-tentang-2.png';
import CardPembuatWeb from '../components/CardPembuatWeb';
import pembuatMale from '../assets/pembuat-male.png';
import pembuatFemale from '../assets/pembuat-female.png';
import iconHubKami from '../assets/icon-hubungi-kami.png';
import NavbarComp from '../components/NavbarComp';

import { useState, useEffect } from 'react';

import { createForm } from '../service/apiService';

const TentangKami = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const hadllesubmit = async (e) => {
    e.preventDefault();
    const response = await createForm(name, email, message);
    console.log(response);
  };

  return (
    <div>
      <NavbarComp />
      <SlideHeaderComp />
      <SearchComp />
      <div className="konten-tentang-1">
        <img src={kontenTtg1} alt="MoPart" />
        <h2>Apa itu MopArt?</h2>
        <p>
          MopArt adalah sebuah website inovatif yang dirancang dengan tujuan untuk mengenalkan dan mempromosikan seni lukis kepada masyarakat di seluruh dunia. Platform ini menawarkan sebuah ruang yang menghubungkan pecinta seni dengan
          seniman-seniman berbakat, baik yang sudah terkenal maupun yang masih baru muncul. Dengan memanfaatkan fitur-fitur interaktif yang memungkinkan pengguna untuk menjelajahi berbagai kategori lukisan, menyukai (like) karya seni
          favorit mereka, dan bahkan mengunggah karya mereka sendiri, MopArt berperan dalam menciptakan sebuah komunitas global yang dinamis, saling mendukung, dan penuh semangat.
        </p>
        <p>
          Website ini berfungsi sebagai galeri online yang menampilkan beragam lukisan, mulai dari karya-karya klasik yang sudah terkenal di seluruh dunia hingga seni kontemporer yang baru dan segar. Dengan tampilan antarmuka yang
          user-friendly, MopArt memberikan pengalaman yang kaya dan mendalam dalam mengeksplorasi dunia seni lukis. Pengguna dapat dengan mudah menelusuri berbagai karya seni berdasarkan kategori, gaya, atau periode waktu, dan menikmati
          deskripsi rinci yang memberikan konteks dan latar belakang dari setiap karya seni. Deskripsi ini tidak hanya membantu dalam memahami makna dan sejarah di balik karya, tetapi juga memperkaya pengalaman apresiasi seni pengguna.
        </p>
        <p>
          Selain itu, MopArt juga memungkinkan seniman untuk mengunggah karya mereka sendiri ke platform, membuka peluang besar bagi seniman baru untuk mendapatkan eksposur dan apresiasi dari audiens global yang luas. Fitur ini mendukung
          kolaborasi dan interaksi antara seniman dan pecinta seni, menciptakan ruang di mana mereka dapat berbagi inspirasi, teknik, dan dukungan satu sama lain. MopArt tidak hanya berfungsi sebagai pameran seni virtual, tetapi juga
          sebagai komunitas yang hidup dan berkembang, di mana seni dapat tumbuh tanpa batasan geografis.
        </p>
        <p>
          Lebih dari sekadar tempat untuk melihat dan membeli seni, MopArt menawarkan berbagai artikel dan sumber daya pendidikan yang dirancang untuk memperdalam pemahaman pengguna tentang berbagai aspek seni lukis. Pengguna dapat belajar
          tentang teknik-teknik melukis, sejarah seni, dan tren terkini di dunia seni. Dengan menyediakan konten yang mendidik dan menginspirasi, MopArt membantu meningkatkan apresiasi seni dan mendukung perkembangan kreatifitas di seluruh
          komunitasnya.
        </p>
      </div>
      <div className="konten-tentang-2">
        <img src={kontenTtg2} alt="tujuan" />
        <h2>Tujuan Website MoPart</h2>
        <p>
          Tujuan dari website MopArt adalah menjadi sebuah platform inovatif yang dirancang khusus untuk memperkenalkan dunia seni lukis kepada masyarakat luas di seluruh dunia. Website ini memiliki visi untuk menciptakan sebuah jembatan
          yang menghubungkan para pecinta seni dengan seniman-seniman berbakat, baik mereka yang sudah terkenal dan memiliki pengakuan internasional maupun seniman-seniman yang masih baru muncul dan mencari eksposur. Dengan komitmen kuat
          untuk menyebarluaskan dan mengapresiasi keindahan seni, MopArt hadir dengan berbagai fitur yang dirancang khusus untuk mendorong eksplorasi yang menyeluruh dan pemahaman mendalam tentang seni lukis.
        </p>
        <p>
          MopArt berfungsi sebagai sebuah wadah yang tidak hanya menampilkan karya seni dari berbagai genre dan periode, tetapi juga menyediakan konteks dan informasi yang membantu pengguna untuk lebih menghargai dan memahami karya-karya
          tersebut. Fitur-fitur interaktif yang disediakan, seperti kemampuan untuk menyukai (like) karya seni, berkomentar, dan membagikan karya favorit, memungkinkan pengguna untuk terlibat aktif dalam komunitas seni yang dinamis. Selain
          itu, MopArt memberikan kesempatan bagi seniman untuk mengunggah karya mereka sendiri, sehingga membuka peluang bagi seniman baru untuk mendapatkan pengakuan dan apresiasi dari audiens global yang lebih luas.
        </p>
      </div>
      <div className="profil-pembuat text-center">
        <div className="row justify-content-center">
          <div className="col-12 mb-3">
            <h2>Profile Pembuat Website</h2>
          </div>
        </div>
        <CardPembuatWeb image={pembuatFemale} nama="Rachel" sebagai="Hustler" />
        <CardPembuatWeb image={pembuatMale} nama="Enrio" sebagai="Hacker" />
        <CardPembuatWeb image={pembuatMale} nama="Bayu" sebagai="Hipster" />
        <CardPembuatWeb image={pembuatMale} nama="Ferry" sebagai="Hacker" />
        <CardPembuatWeb image={pembuatMale} nama="Aulia" sebagai="Hipster" />
        <CardPembuatWeb image={pembuatMale} nama="Duta" sebagai="Hipster" />
      </div>
      <div className="hubungi-kami">
        <h2>Hubungi Kami</h2>
        <img src={iconHubKami} alt="hubungi kami" />
        <h3>Kirimkan kami sebuah pesan</h3>
        <form className="form-hub" onSubmit={hadllesubmit}>
          <label className="label-hub" htmlFor="name">
            Nama
          </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="nama" id="nama" className="input-hub" placeholder="Masukkan nama anda" />
          <label className="label-hub" htmlFor="email">
            Email
          </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="input-hub" placeholder="Masukkan email anda" />
          <label className="label-hub" htmlFor="pesan">
            Pesan
          </label>
          <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} name="pesan" id="pesan" className="input-hub-pesan" placeholder="Ketik pesan anda disini"></textarea>
          <button id="btn_hub" type="submit">
            Kirim
          </button>
        </form>
      </div>
      <FooterComp />
    </div>
  );
};

export default TentangKami;

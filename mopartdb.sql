-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jun 2024 pada 16.56
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mopartdb`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `admintokens`
--

CREATE TABLE `admintokens` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `collections`
--

CREATE TABLE `collections` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `collections`
--

INSERT INTO `collections` (`id`, `user_id`, `image_id`, `createdAt`, `updatedAt`) VALUES
(26, 2, 2, '2024-06-11 08:08:38', '2024-06-11 08:08:38'),
(27, 2, 1, '2024-06-11 08:10:15', '2024-06-11 08:10:15'),
(30, 1, 1, '2024-06-11 08:32:50', '2024-06-11 08:32:50'),
(32, 3, 5, '2024-06-11 08:54:15', '2024-06-11 08:54:15'),
(33, 3, 3, '2024-06-11 09:22:29', '2024-06-11 09:22:29'),
(123, 3, 6, '2024-06-11 09:39:57', '2024-06-11 09:39:57'),
(289, 3, 2, '2024-06-11 13:10:20', '2024-06-11 13:10:20'),
(290, 3, 2, '2024-06-11 13:10:20', '2024-06-11 13:10:20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `date_form` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `countrys`
--

CREATE TABLE `countrys` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `countrys`
--

INSERT INTO `countrys` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Indonesia', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `developers`
--

CREATE TABLE `developers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `followers`
--

CREATE TABLE `followers` (
  `id` int(11) NOT NULL,
  `following_user_id` int(11) NOT NULL,
  `followed_user_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `followers`
--

INSERT INTO `followers` (`id`, `following_user_id`, `followed_user_id`, `createdAt`, `updatedAt`) VALUES
(12, 3, 2, '2024-06-11 12:09:14', '2024-06-11 12:09:14'),
(14, 3, 4, '2024-06-11 12:11:42', '2024-06-11 12:11:42'),
(17, 3, 1, '2024-06-11 13:44:45', '2024-06-11 13:44:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `status` enum('active','pending','deleted') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `images`
--

INSERT INTO `images` (`id`, `user_id`, `image_name`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'The Scream', 'Jeritan (bahasa Norwegia: Skrik, 1893; judul bahasa Inggris: The Scream) adalah sebutan untuk empat buah versi lukisan ekspresionis oleh seniman Norwegia Edward Munch yang menjadi sumber inspirasi bagi banyak pelukis lainnya dalam aliran ini. Lukisan ini dianggap oleh banyak orang sebagai karyanya yang paling penting. Sebagian lagi mengatakan lukisan ini melambangkan manusia modern yang tercekam oleh serangan angst kecemasan eksistensial, dengan cakrawala yang diilhami oleh senja yang merah, yang dilihat setelah letusan Gunung Krakatau pada 1883.[1]Lansekap di belakang adalah Oslofjord, yang dilihat dari bukit Ekeberg. Kata skrik dalam bahasa Norwegia biasanya diterjemahkan menjadi \"scream\" (jeritan), namun kata ini juga mempunyai akar kata yang sama dengan kata bahasa Inggris shriek. Kadang-kadang lukisan ini disebut juga The Cry (\"Tangisan\").<br>\n\nVersi tempera di atas karton (berukuran 83,5 x 66 cm) yang sebelumnya terdapat di Museum Munch, Oslo, Norwegia (lihat galeri), dan sebuah lukisan minyak, tempera, dan pastel di atas karton (ukuran 91 x 73,5 cm) di Galeri Nasional (tampak di sebelah kanan), juga di Oslo. Versi ketiga juga dimiliki oleh Museum Munch, dan yang keempat dimiliki oleh Petter Olsen. Munch belakangan juga menerjemahkan gambar ini ke dalam bentuk litograf (lihat galeri), sehingga gambarya dapat direproduksi dalam berbagai tulisan tinjauan di seluruh dunia. Sejak 1994, dua versi terpisah dari Jeritan ini dicuri oleh pencuri-pencuri karya seni, tetapi akhirnya keduanya telah ditemukan kembali. Pada tanggal 2 Mei 2012, lukisan The Scream terjual sebesar US$ 119.922.500 atau setara dengan Rp 1,079 triliun dalam pelelangan di rumah lelang Sotheby\'s, New York.[2]', NULL, '2024-06-03 00:20:02', '2024-06-03 00:20:02'),
(2, 1, 'Mona Lisa', 'Lukisan \"Mona Lisa,\" karya Leonardo da Vinci, dibuat antara tahun 1503 hingga 1506 dan kini dipamerkan di Museum Louvre, Paris. Lukisan ini menampilkan potret seorang wanita yang diyakini sebagai Lisa Gherardini, istri seorang pedagang kaya dari Florence. Wanita dalam lukisan duduk dengan tangan terlipat, menatap langsung ke arah penonton dengan ekspresi tenang dan misterius yang dikenal sebagai \"senyum Mona Lisa.\" Dia mengenakan gaun dengan kerah rendah dan selendang tipis yang menutupi bahunya. Latar belakang lukisan menggambarkan pemandangan alam dengan pegunungan, sungai, dan jalan yang berkelok-kelok, menggunakan teknik sfumato yang menciptakan transisi halus antara warna dan bentuk. Lukisan ini berukuran sekitar 77 cm x 53 cm dan dibuat dengan cat minyak di atas panel kayu poplar. \"Mona Lisa\" dianggap sebagai contoh sempurna dari potret Renaisans karena teknik dan ekspresi psikologis yang ditangkap oleh Leonardo. Senyum misteriusnya menjadi subjek berbagai analisis dan interpretasi, menambah daya tarik lukisan ini. Sebagai ikon budaya dan seni, \"Mona Lisa\" terus menarik perhatian jutaan pengunjung setiap tahunnya dan tetap menjadi salah satu karya seni paling dihargai dan diakui di seluruh dunia.', NULL, '2024-06-08 16:22:56', '2024-06-08 16:22:56'),
(3, 1, 'The Starry Night', '\"Starry Night\" adalah salah satu lukisan paling terkenal karya Vincent van Gogh, yang selesai pada tahun 1889. Lukisan ini menggambarkan pemandangan malam yang penuh dengan bintang-bintang yang berkilauan, dibuat dari ingatan dan imajinasi van Gogh saat dia berada di Rumah Sakit Saint-Paul-de-Mausole di Saint-Rémy-de-Provence, Prancis.\n\nLukisan ini menunjukkan sebuah desa yang tenang di bawah langit malam yang dinamis dan penuh dengan gerakan. Langit dipenuhi dengan pusaran-pusaran besar, bulan sabit yang cerah, dan bintang-bintang yang bersinar terang, menciptakan efek visual yang dramatis dan penuh energi. Pohon cemara besar di latar depan, dengan bentuknya yang tinggi dan gelap, menambah kontras dan kedalaman pada komposisi lukisan.\n\nVan Gogh menggunakan palet warna yang berani dan kontras, terutama biru, kuning, dan putih. Teknik kuasnya yang khas, dengan sapuan yang tebal dan ekspresif, memberikan tekstur dan dinamika yang kuat pada lukisan ini. Meski langitnya tampak kacau, pemandangan desa di bawahnya tetap tenang dan damai, menciptakan keseimbangan yang menarik antara gerakan dan ketenangan.\n\n\"Starry Night\" dianggap sebagai salah satu contoh terbaik dari gaya post-impresionisme, di mana van Gogh menggabungkan pengamatan langsung dari alam dengan interpretasi emosional dan subjektif. Lukisan ini tidak hanya menggambarkan keindahan alam malam, tetapi juga mencerminkan kondisi emosional van Gogh sendiri, yang sering berjuang dengan kesehatan mentalnya.\n\nDengan dimensi sekitar 73.7 cm x 92.1 cm, \"Starry Night\" kini dipamerkan di Museum of Modern Art (MoMA) di New York City. Lukisan ini telah menjadi ikon seni modern dan terus menginspirasi serta memikat jutaan orang di seluruh dunia dengan keindahan dan intensitas emosionalnya.', NULL, '2024-06-10 13:49:01', '2024-06-10 13:49:01'),
(4, 1, 'The Kiss', '\"The Kiss\" adalah lukisan terkenal karya Gustav Klimt, dibuat antara tahun 1907 dan 1908 selama periode \"emas\" sang pelukis. Lukisan ini menampilkan sepasang kekasih yang berciuman, berpelukan dalam lanskap abstrak yang dipenuhi pola dekoratif. Tubuh mereka dibalut dalam jubah berornamen emas dengan berbagai motif geometris dan bunga, sementara latar belakang emas menciptakan kesan kemewahan dan keabadian. Teknik penggunaan daun emas dan gaya Art Nouveau yang kaya dengan motif dekoratif yang rumit, menjadikan \"The Kiss\" sebagai simbol cinta dan keintiman yang universal, menonjolkan gaya unik Klimt yang menggabungkan realisme dengan elemen dekoratif.', NULL, '2024-06-11 00:50:49', '2024-06-11 00:50:49'),
(5, 1, 'The Night Watch', '\"The Night Watch,\" juga dikenal sebagai \"The Militia Company of Captain Frans Banning Cocq,\" adalah salah satu lukisan paling terkenal karya Rembrandt van Rijn. Lukisan ini selesai pada tahun 1642 dan merupakan salah satu mahakarya Zaman Keemasan Belanda. Berikut adalah deskripsi singkat tentang lukisan ini:\n\n\"The Night Watch\" menampilkan potret kelompok milisi sipil Amsterdam yang dipimpin oleh Kapten Frans Banning Cocq dan Letnan Willem van Ruytenburch. Lukisan ini berukuran besar, sekitar 363 cm x 437 cm, dan saat ini dipamerkan di Rijksmuseum di Amsterdam. Meskipun sering disebut \"The Night Watch,\" lukisan ini sebenarnya menggambarkan adegan siang hari yang tertutup oleh pernis gelap, memberikan kesan waktu malam.\n\nLukisan ini terkenal karena komposisinya yang dinamis dan penggunaan cahaya dan bayangan yang dramatis, ciri khas teknik chiaroscuro yang dikuasai Rembrandt. Tokoh-tokoh dalam lukisan ditampilkan dalam pose-pose yang hidup dan penuh gerak, menciptakan kesan kegembiraan dan persiapan untuk beraksi. Kapten Cocq dan Letnan van Ruytenburch berada di pusat lukisan, dengan kostum yang kontras menonjolkan posisi mereka sebagai pemimpin. Latar belakangnya dipenuhi dengan berbagai anggota milisi yang berinteraksi satu sama lain, memberikan kedalaman dan kompleksitas pada komposisi.\n\nSecara keseluruhan, \"The Night Watch\" adalah contoh luar biasa dari kemampuan Rembrandt untuk menangkap dinamika sosial dan psikologis dalam lukisan grup besar, sekaligus menunjukkan keahliannya dalam teknik pencahayaan dan komposisi yang dramatis. Lukisan ini tidak hanya menjadi ikon seni Belanda, tetapi juga salah satu karya paling dihargai di dunia seni rupa.', NULL, '2024-06-11 00:51:11', '2024-06-11 00:51:11'),
(6, 1, 'Lady With an Ermine', '\"Lukisan \"Lady with an Ermine\" adalah karya terkenal dari Leonardo da Vinci, dibuat sekitar tahun 1489-1490. Lukisan ini menggambarkan Cecilia Gallerani, seorang wanita bangsawan Milan yang juga dikenal sebagai kekasih Ludovico Sforza, Adipati Milan pada masa itu.\n\nDalam lukisan ini, Cecilia ditampilkan memegang seekor cerpelai (ermine) putih, yang dianggap sebagai simbol kemurnian dan kebajikan. Cerpelai juga bisa merujuk pada Ludovico, yang dikenal sebagai \"Ermine Putih\" karena ia dianugerahi Ordo Cerpelai oleh Raja Napoli.\n\nLukisan ini menonjolkan keahlian Leonardo dalam menangkap detail dan tekstur, baik dalam wajah Cecilia yang halus dan ekspresif, maupun bulu cerpelai yang realistis. Teknik sfumato yang digunakan oleh Leonardo menciptakan transisi halus antara cahaya dan bayangan, memberikan efek tiga dimensi dan kedalaman pada lukisan.', NULL, '2024-06-11 00:53:01', '2024-06-11 00:53:01');

-- --------------------------------------------------------

--
-- Struktur dari tabel `likes`
--

CREATE TABLE `likes` (
  `id` int(11) NOT NULL,
  `liked_by_user_id` int(11) NOT NULL,
  `liked_user_id` int(11) NOT NULL,
  `image_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `likes`
--

INSERT INTO `likes` (`id`, `liked_by_user_id`, `liked_user_id`, `image_id`, `createdAt`, `updatedAt`) VALUES
(47, 2, 1, 2, '2024-06-11 08:08:35', '2024-06-11 08:08:35'),
(48, 2, 1, 2, '2024-06-11 08:08:35', '2024-06-11 08:08:35'),
(51, 2, 1, 5, '2024-06-11 08:15:26', '2024-06-11 08:15:26'),
(52, 2, 1, 5, '2024-06-11 08:15:27', '2024-06-11 08:15:27'),
(53, 4, 1, 1, '2024-06-11 08:17:15', '2024-06-11 08:17:15'),
(54, 4, 1, 1, '2024-06-11 08:17:15', '2024-06-11 08:17:15'),
(55, 1, 1, 5, '2024-06-11 08:18:27', '2024-06-11 08:18:27'),
(56, 1, 1, 2, '2024-06-11 08:20:51', '2024-06-11 08:20:51'),
(64, 1, 1, 3, '2024-06-11 08:33:03', '2024-06-11 08:33:03'),
(65, 1, 1, 3, '2024-06-11 08:33:03', '2024-06-11 08:33:03'),
(67, 3, 1, 5, '2024-06-11 08:54:14', '2024-06-11 08:54:14'),
(69, 3, 1, 3, '2024-06-11 09:22:28', '2024-06-11 09:22:28'),
(70, 3, 1, 3, '2024-06-11 09:22:28', '2024-06-11 09:22:28'),
(148, 3, 1, 1, '2024-06-11 12:48:56', '2024-06-11 12:48:56'),
(149, 3, 1, 2, '2024-06-11 13:10:21', '2024-06-11 13:10:21'),
(150, 3, 1, 2, '2024-06-11 13:10:21', '2024-06-11 13:10:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message_room_id` int(11) NOT NULL,
  `sender_user_id` int(11) NOT NULL,
  `receiver_user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `timestamp` datetime DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `messages`
--

INSERT INTO `messages` (`id`, `message_room_id`, `sender_user_id`, `receiver_user_id`, `message`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 1, 3, 1, 'Hallo Bang Da Vincci', '2024-06-11 13:15:07', '2024-06-11 13:15:07', '2024-06-11 13:15:07');

-- --------------------------------------------------------

--
-- Struktur dari tabel `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `timestamp` datetime DEFAULT current_timestamp(),
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `title`, `message`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'WELCOME TO MUSIUM OF ART', 'user was created successfully', '2024-06-03 00:10:39', '2024-06-03 00:10:39', '2024-06-03 00:10:39'),
(2, 2, 'WELCOME TO MUSIUM OF ART', 'user was created successfully', '2024-06-03 12:48:22', '2024-06-03 12:48:22', '2024-06-03 12:48:22'),
(3, 3, 'WELCOME TO MUSIUM OF ART', 'user was created successfully', '2024-06-03 12:50:22', '2024-06-03 12:50:22', '2024-06-03 12:50:22'),
(4, 4, 'WELCOME TO MUSIUM OF ART', 'user was created successfully', '2024-06-03 13:07:46', '2024-06-03 13:07:46', '2024-06-03 13:07:46'),
(5, 2, NULL, 'you have message', '2024-06-08 16:13:13', '2024-06-08 16:13:13', '2024-06-08 16:13:13'),
(6, 2, NULL, 'you have message', '2024-06-08 16:16:07', '2024-06-08 16:16:07', '2024-06-08 16:16:07'),
(7, 3, NULL, 'you have message', '2024-06-08 16:16:55', '2024-06-08 16:16:55', '2024-06-08 16:16:55'),
(8, 3, NULL, 'you have message', '2024-06-08 16:17:37', '2024-06-08 16:17:37', '2024-06-08 16:17:37'),
(9, 3, NULL, 'you have message', '2024-06-08 16:23:43', '2024-06-08 16:23:43', '2024-06-08 16:23:43'),
(10, 3, NULL, 'you have message', '2024-06-09 12:54:25', '2024-06-09 12:54:25', '2024-06-09 12:54:25'),
(11, 3, NULL, 'you have message', '2024-06-09 12:54:31', '2024-06-09 12:54:31', '2024-06-09 12:54:31'),
(12, 3, NULL, 'you have message', '2024-06-09 12:55:45', '2024-06-09 12:55:45', '2024-06-09 12:55:45'),
(13, 2, NULL, 'you have message', '2024-06-09 13:04:41', '2024-06-09 13:04:41', '2024-06-09 13:04:41'),
(14, 2, NULL, 'you have message', '2024-06-09 13:05:17', '2024-06-09 13:05:17', '2024-06-09 13:05:17'),
(15, 2, NULL, 'you have message', '2024-06-09 13:05:45', '2024-06-09 13:05:45', '2024-06-09 13:05:45'),
(16, 2, NULL, 'you have message', '2024-06-09 13:05:53', '2024-06-09 13:05:53', '2024-06-09 13:05:53'),
(17, 2, NULL, 'you have message', '2024-06-09 13:37:40', '2024-06-09 13:37:40', '2024-06-09 13:37:40'),
(18, 2, NULL, 'you have message', '2024-06-09 13:40:43', '2024-06-09 13:40:43', '2024-06-09 13:40:43'),
(19, 2, NULL, 'you have message', '2024-06-09 13:43:24', '2024-06-09 13:43:24', '2024-06-09 13:43:24'),
(20, 2, NULL, 'you have message', '2024-06-09 13:43:31', '2024-06-09 13:43:31', '2024-06-09 13:43:31'),
(21, 2, NULL, 'you have message', '2024-06-09 13:43:48', '2024-06-09 13:43:48', '2024-06-09 13:43:48'),
(22, 2, NULL, 'you have message', '2024-06-09 14:59:54', '2024-06-09 14:59:54', '2024-06-09 14:59:54'),
(23, 2, NULL, 'you have message', '2024-06-10 13:12:14', '2024-06-10 13:12:14', '2024-06-10 13:12:14'),
(24, 2, NULL, 'you have message', '2024-06-10 13:12:17', '2024-06-10 13:12:17', '2024-06-10 13:12:17'),
(25, 2, NULL, 'you have message', '2024-06-10 13:13:12', '2024-06-10 13:13:12', '2024-06-10 13:13:12'),
(26, 2, NULL, 'you have message', '2024-06-10 13:39:41', '2024-06-10 13:39:41', '2024-06-10 13:39:41'),
(27, 3, NULL, 'you have message', '2024-06-10 13:39:49', '2024-06-10 13:39:49', '2024-06-10 13:39:49'),
(28, 3, NULL, 'you have message', '2024-06-10 13:40:44', '2024-06-10 13:40:44', '2024-06-10 13:40:44'),
(29, 2, NULL, 'you have message', '2024-06-10 13:48:22', '2024-06-10 13:48:22', '2024-06-10 13:48:22'),
(30, 2, NULL, 'you have message', '2024-06-10 14:21:47', '2024-06-10 14:21:47', '2024-06-10 14:21:47'),
(31, 2, 'you have new message', 'you have new message', '2024-06-10 14:45:01', '2024-06-10 14:45:01', '2024-06-10 14:45:01'),
(32, 2, 'you have new message', 'you have new message', '2024-06-10 14:45:08', '2024-06-10 14:45:08', '2024-06-10 14:45:08'),
(33, 1, 'you have new message', 'you have new message', '2024-06-10 14:54:15', '2024-06-10 14:54:15', '2024-06-10 14:54:15'),
(34, 2, NULL, 'you have message', '2024-06-10 14:57:38', '2024-06-10 14:57:38', '2024-06-10 14:57:38'),
(35, 1, 'you have new message', 'you have new message', '2024-06-10 15:29:48', '2024-06-10 15:29:48', '2024-06-10 15:29:48'),
(36, 1, 'you have new message', 'you have new message', '2024-06-10 15:30:06', '2024-06-10 15:30:06', '2024-06-10 15:30:06'),
(37, 1, 'you have new message', 'you have new message', '2024-06-10 15:41:18', '2024-06-10 15:41:18', '2024-06-10 15:41:18'),
(38, 3, 'you have new message', 'you have new message', '2024-06-10 15:50:44', '2024-06-10 15:50:44', '2024-06-10 15:50:44'),
(39, 3, 'you have new message', 'you have new message', '2024-06-10 15:50:54', '2024-06-10 15:50:54', '2024-06-10 15:50:54'),
(40, 1, NULL, 'you have message', '2024-06-10 15:51:56', '2024-06-10 15:51:56', '2024-06-10 15:51:56'),
(41, 1, 'you have new message', 'you have new message', '2024-06-10 15:57:55', '2024-06-10 15:57:55', '2024-06-10 15:57:55'),
(42, 4, 'you have new message', 'you have new message', '2024-06-10 22:57:29', '2024-06-10 22:57:29', '2024-06-10 22:57:29'),
(43, 4, 'you have new message', 'you have new message', '2024-06-10 22:57:40', '2024-06-10 22:57:40', '2024-06-10 22:57:40'),
(44, 1, 'you have new message', 'you have new message', '2024-06-10 22:58:01', '2024-06-10 22:58:01', '2024-06-10 22:58:01'),
(45, 3, 'you have new message', 'you have new message', '2024-06-10 22:59:20', '2024-06-10 22:59:20', '2024-06-10 22:59:20'),
(46, 1, 'you have new message', 'you have new message', '2024-06-10 23:04:24', '2024-06-10 23:04:24', '2024-06-10 23:04:24'),
(47, 1, 'you have new message', 'you have new message', '2024-06-10 23:09:15', '2024-06-10 23:09:15', '2024-06-10 23:09:15'),
(48, 3, 'you have new message', 'you have new message', '2024-06-10 23:09:55', '2024-06-10 23:09:55', '2024-06-10 23:09:55'),
(49, 3, 'you have new message', 'you have new message', '2024-06-10 23:10:09', '2024-06-10 23:10:09', '2024-06-10 23:10:09'),
(50, 1, 'you have new message', 'you have new message', '2024-06-11 02:26:23', '2024-06-11 02:26:23', '2024-06-11 02:26:23'),
(51, 2, NULL, 'you have message', '2024-06-11 06:11:46', '2024-06-11 06:11:46', '2024-06-11 06:11:46'),
(52, 1, 'you have new message', 'you have new message', '2024-06-11 06:17:11', '2024-06-11 06:17:11', '2024-06-11 06:17:11'),
(53, 1, 'you have new message', 'you have new message', '2024-06-11 07:54:53', '2024-06-11 07:54:53', '2024-06-11 07:54:53'),
(54, 1, NULL, 'you have message', '2024-06-11 12:15:04', '2024-06-11 12:15:04', '2024-06-11 12:15:04'),
(55, 1, 'you have new message', 'you have new message', '2024-06-11 13:15:08', '2024-06-11 13:15:08', '2024-06-11 13:15:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `photo_profile` varchar(255) DEFAULT NULL,
  `professi` varchar(255) DEFAULT NULL,
  `country` int(11) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `x` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `status` enum('aktif','pending','deleted') DEFAULT 'aktif',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `photo_profile`, `professi`, `country`, `created`, `facebook`, `instagram`, `x`, `whatsapp`, `youtube`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Da Vinnci', 'Felixkun@yahoo.com', 'felixkun', '1', 'Programmer', 1, '2024-06-03 00:10:39', NULL, NULL, NULL, NULL, NULL, 'aktif', '2024-06-03 00:10:39', '2024-06-03 00:10:39'),
(2, 'Dimas', 'Dimas@yahoo.com', 'Dimas', '1', NULL, NULL, '2024-06-03 12:48:22', NULL, NULL, NULL, NULL, NULL, 'aktif', '2024-06-03 12:48:22', '2024-06-03 12:48:22'),
(3, 'Firman Art', 'Firman@yahoo.com', 'Dimas', NULL, NULL, NULL, '2024-06-03 12:50:22', NULL, NULL, NULL, NULL, NULL, 'aktif', '2024-06-03 12:50:22', '2024-06-03 12:50:22'),
(4, 'Nur Hikari', 'Hikari@yahoo.com', 'felixkun', NULL, NULL, NULL, '2024-06-03 13:07:45', NULL, NULL, NULL, NULL, NULL, 'aktif', '2024-06-03 13:07:45', '2024-06-03 13:07:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `usertokens`
--

CREATE TABLE `usertokens` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `usertokens`
--

INSERT INTO `usertokens` (`id`, `user_id`, `token`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzM3MzQzOSwiZXhwIjoxNzE3NDU5ODM5fQ.X2BpXg9oCakTb9q_hxdN4j38crLxUQReO78MwHf82a0', '2024-06-03 00:10:39', '2024-06-03 00:10:39'),
(2, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzM3MzYyNiwiZXhwIjoxNzE3NDYwMDI2fQ.R4JNXGklC3zxAPYfGfJry0tWl4Rq9A0HnMck_6XXiG4', '2024-06-03 00:13:46', '2024-06-03 00:13:46'),
(3, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzM3MzgwNCwiZXhwIjoxNzE3NDYwMjA0fQ.JUiR2JoXNKw9OR0W69z3bz83hK35XyTHtcz57MlgjkM', '2024-06-03 00:16:44', '2024-06-03 00:16:44'),
(4, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzM3Mzg3MywiZXhwIjoxNzE3NDYwMjczfQ.hQ8KNBMPBTjzp4HQSY5DUNUsEoBN1zQeSObH4Mcj3D0', '2024-06-03 00:17:53', '2024-06-03 00:17:53'),
(5, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzM3NDA2MSwiZXhwIjoxNzE3NDYwNDYxfQ.zrTC5H_QW5RwSqCeDYdOCwA6yIR8uVZKkg_WPN1qkgw', '2024-06-03 00:21:01', '2024-06-03 00:21:01'),
(16, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc0MjAwNjYsImV4cCI6MTcxNzUwNjQ2Nn0.9LfKqzvY4gt5ZKI7Gt_QQ1dI8eN4QMFCClZiPGyPrls', '2024-06-03 13:07:46', '2024-06-03 13:07:46'),
(17, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc0MjAxMDQsImV4cCI6MTcxNzUwNjUwNH0.NBUQhd9OGTGRpR65bzxCqtEcHMX6XuMfVap207NSo4E', '2024-06-03 13:08:24', '2024-06-03 13:08:24'),
(18, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc1NDUzMzEsImV4cCI6MTcxNzYzMTczMX0.7FZuJ905R7GqQreLl2NTA9u3MabU35I2oKWiCpUJ7V0', '2024-06-04 23:55:31', '2024-06-04 23:55:31'),
(19, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc1NDU2MjAsImV4cCI6MTcxNzYzMjAyMH0.8x1L7oxBGpaQWTsz8Lf6BBFQdQQsUTCOvpo-Jd-bFnw', '2024-06-05 00:00:20', '2024-06-05 00:00:20'),
(21, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc1NDYxNDcsImV4cCI6MTcxNzYzMjU0N30.QOBvYx6gesVnhDXnhLibZpYjSdMJvJ1Vot07nntJLrI', '2024-06-05 00:09:07', '2024-06-05 00:09:07'),
(22, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjM5NTIsImV4cCI6MTcxNzg1MDM1Mn0.1irlVOQWtE7SOi51WEGDNCQudlPz7X1qkeN2e5AIrXA', '2024-06-07 12:39:12', '2024-06-07 12:39:12'),
(23, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjM5NjAsImV4cCI6MTcxNzg1MDM2MH0.XlxEa3xpTot8-4ItSQ3tcQXljuJdsjVowz48zAZqMp8', '2024-06-07 12:39:20', '2024-06-07 12:39:20'),
(24, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjM5NjksImV4cCI6MTcxNzg1MDM2OX0.32X83xwVGi0c0CzwRq4PuO5oUlWeGZPUwY3h1xJ0aVE', '2024-06-07 12:39:29', '2024-06-07 12:39:29'),
(25, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjQwNDYsImV4cCI6MTcxNzg1MDQ0Nn0.oz9hDGqRKmILk83TaqohhKaVYqWVCHqMShM_6k81a4k', '2024-06-07 12:40:46', '2024-06-07 12:40:46'),
(26, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjQwNzcsImV4cCI6MTcxNzg1MDQ3N30.8azp43B0oYGQ30h60AcewQhPeuHND1SPsK_5P_ELaIQ', '2024-06-07 12:41:17', '2024-06-07 12:41:17'),
(27, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjYyMjIsImV4cCI6MTcxNzg1MjYyMn0.8xK0j_U8MDobNr-ojmiPKZwGnK0Db5fwYe3ZO8SY_50', '2024-06-07 13:17:02', '2024-06-07 13:17:02'),
(28, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjYzOTAsImV4cCI6MTcxNzg1Mjc5MH0.Cm1zZ-LtWCDvIZYFkZTOi4xpWuWQeLumUTMNZtj4leM', '2024-06-07 13:19:50', '2024-06-07 13:19:50'),
(29, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjY0MTgsImV4cCI6MTcxNzg1MjgxOH0.SdVySezg1osT8KunrVixz6SAVTRhSUizWpNzlKrsagk', '2024-06-07 13:20:18', '2024-06-07 13:20:18'),
(30, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjY1OTQsImV4cCI6MTcxNzg1Mjk5NH0.d6m0ysSu5LkDjb8fDWt2JXpQ2y25NDNkofQ0qV_7ya0', '2024-06-07 13:23:14', '2024-06-07 13:23:14'),
(31, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NjcwMDgsImV4cCI6MTcxNzg1MzQwOH0.kxUwZQ6f3WIJo87vNGNtz38rUWlFKZ1DAsYxnjlhKI8', '2024-06-07 13:30:08', '2024-06-07 13:30:08'),
(32, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3Njg1ODEsImV4cCI6MTcxNzg1NDk4MX0.1JYaNh2z--AQhnUwKOlIfpnStc_uvHMz1adg4WaWTKY', '2024-06-07 13:56:21', '2024-06-07 13:56:21'),
(33, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3Njg2MzMsImV4cCI6MTcxNzg1NTAzM30.ZdQTEoQ0rXDRbkVJIxKdFXIO1h5NXMVSaMCqFVmfT2Y', '2024-06-07 13:57:13', '2024-06-07 13:57:13'),
(34, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3Njg3MDIsImV4cCI6MTcxNzg1NTEwMn0.2uT3MUC9d0UiBBy7fMhPpJWAkEeCDD6nRMRvXnud8wg', '2024-06-07 13:58:22', '2024-06-07 13:58:22'),
(35, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NzAwNjUsImV4cCI6MTcxNzg1NjQ2NX0.RQ0lNCMRmDiuVM-TIo-OPy2JImvNzUTTBcYh04tgNJ0', '2024-06-07 14:21:05', '2024-06-07 14:21:05'),
(36, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc3NzA2MDIsImV4cCI6MTcxNzg1NzAwMn0.MSmBDqGw7cY0CRIqrjEwagu3RG2kZGQexINELmr-TcQ', '2024-06-07 14:30:02', '2024-06-07 14:30:02'),
(37, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDEwOTQsImV4cCI6MTcxNzg4NzQ5NH0.vzzPlURcLQREssdnVN39dp--pPyDABAxy9ePRNHlAII', '2024-06-07 22:58:14', '2024-06-07 22:58:14'),
(38, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDExOTAsImV4cCI6MTcxNzg4NzU5MH0.bjy8heRW7ZHRhjJW2Rv6t3NRfXSyawjjxO3QsFGSS1U', '2024-06-07 22:59:50', '2024-06-07 22:59:50'),
(39, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDEzNjYsImV4cCI6MTcxNzg4Nzc2Nn0.pxO-XQhduSaaZWE2inQ1zwj2-H_vMpJGfGkJPg6xPwY', '2024-06-07 23:02:46', '2024-06-07 23:02:46'),
(40, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDEzNjgsImV4cCI6MTcxNzg4Nzc2OH0.O_5l0Y85MRkRgQukB9W9FUXstZUlgqjVTj3o19bqZYA', '2024-06-07 23:02:48', '2024-06-07 23:02:48'),
(41, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDE0OTYsImV4cCI6MTcxNzg4Nzg5Nn0.MG8424peiJmRqOLnnWAO_1PguTVuMyN0RuL5JLa02Xg', '2024-06-07 23:04:56', '2024-06-07 23:04:56'),
(42, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDE2MDUsImV4cCI6MTcxNzg4ODAwNX0.pLUKwOTWt36d0Xbffk2DvKqyh8uzh086PKVqjbyomH0', '2024-06-07 23:06:45', '2024-06-07 23:06:45'),
(43, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDIyNTIsImV4cCI6MTcxNzg4ODY1Mn0.xPw5K1wAHM4KLCnFsrW4BMkKo1HnGg3BPkkOE9cejfo', '2024-06-07 23:17:32', '2024-06-07 23:17:32'),
(44, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDIzNDEsImV4cCI6MTcxNzg4ODc0MX0.-J0zGuxj8t00GeXNHCaKtFozm-w4zqKJD289YhXiQo4', '2024-06-07 23:19:01', '2024-06-07 23:19:01'),
(45, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDI0MTYsImV4cCI6MTcxNzg4ODgxNn0.VPoBFBQ3AW2xhDih-3QABCL6Sk_xkf5A5TBA4f4yc90', '2024-06-07 23:20:16', '2024-06-07 23:20:16'),
(46, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDI2NzcsImV4cCI6MTcxNzg4OTA3N30.RCeu-SoJjA9PfBSj1DkYdbLCZP6h4BuiuDBrATn_RD4', '2024-06-07 23:24:37', '2024-06-07 23:24:37'),
(47, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDI4ODIsImV4cCI6MTcxNzg4OTI4Mn0.P2qkjxneBLM_vXa6DsnOOFWCuWKUZZndUM07Q8VoJ90', '2024-06-07 23:28:02', '2024-06-07 23:28:02'),
(48, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDI4OTUsImV4cCI6MTcxNzg4OTI5NX0.0gfKD_13r9Oul3NpipIXMaFGiUY-MMWxvTiD_KmGzI0', '2024-06-07 23:28:15', '2024-06-07 23:28:15'),
(49, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4MDI5MTQsImV4cCI6MTcxNzg4OTMxNH0.tZLm3vK5kHIG1pOCuf8-35-pLDr6nmiAXJyCRllYCns', '2024-06-07 23:28:34', '2024-06-07 23:28:34'),
(50, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxNzgzNzg0NCwiZXhwIjoxNzE3OTI0MjQ0fQ.wijrk8-DJcEw5qVBFrGvqDVISjLAlAUMR5DJh2FQ2-w', '2024-06-08 09:10:44', '2024-06-08 09:10:44'),
(51, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM0NDQsImV4cCI6MTcxNzkzOTg0NH0.wFKw4zg_vE8Kzngqr_ejuV9n0o1cQfqRzbGt_gp3HGs', '2024-06-08 13:30:44', '2024-06-08 13:30:44'),
(52, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM1ODYsImV4cCI6MTcxNzkzOTk4Nn0.HkrloMY8uxLgmfRmlHv7aXDfFZ_ItLzuA1qOY06xpKk', '2024-06-08 13:33:06', '2024-06-08 13:33:06'),
(53, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM2MDAsImV4cCI6MTcxNzk0MDAwMH0.9tFvVHqbAAGLbSujhH7Lx_X9QWKlgQMP8SxTOmJacJ8', '2024-06-08 13:33:20', '2024-06-08 13:33:20'),
(54, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM2MzMsImV4cCI6MTcxNzk0MDAzM30.xYccL14mcaQZs1CI5YQsUpKIoncIhXKEby-N2tQf--M', '2024-06-08 13:33:53', '2024-06-08 13:33:53'),
(55, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM2NzUsImV4cCI6MTcxNzk0MDA3NX0.CfmKyPDIkefk8DpFLrg-krLczSEu2RiWKIccAQP7YhI', '2024-06-08 13:34:35', '2024-06-08 13:34:35'),
(56, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM3MjQsImV4cCI6MTcxNzk0MDEyNH0.igf2RFX97O7LJ7gd2UenAaZ2PBm93asqMzym_O7iAcw', '2024-06-08 13:35:24', '2024-06-08 13:35:24'),
(57, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM5MTUsImV4cCI6MTcxNzk0MDMxNX0.69ve8W1DWcIf1vGYLxQDFPG8s8hfqdkyeHgkkgXq05o', '2024-06-08 13:38:35', '2024-06-08 13:38:35'),
(58, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM5NzIsImV4cCI6MTcxNzk0MDM3Mn0.Bl6rCEPyrShKOLwi6GDf8uppPcmqcypVBUVJk96WU6g', '2024-06-08 13:39:32', '2024-06-08 13:39:32'),
(59, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTM5ODcsImV4cCI6MTcxNzk0MDM4N30.ntfetdOSpxcxGXCC4NE1a-Upzlwdj29M2p-d4zW5KeM', '2024-06-08 13:39:47', '2024-06-08 13:39:47'),
(60, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTQwNjMsImV4cCI6MTcxNzk0MDQ2M30.5roXLvXNz-Yna7xUlHQdIklFi9SdOUsKewZMaKr_Myo', '2024-06-08 13:41:03', '2024-06-08 13:41:03'),
(61, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTQxOTYsImV4cCI6MTcxNzk0MDU5Nn0.qHsrwo9yY0zYciGyNEUPItOP6kmCpZmCKZkEYyJuP1g', '2024-06-08 13:43:16', '2024-06-08 13:43:16'),
(62, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTQyMDEsImV4cCI6MTcxNzk0MDYwMX0.orZZT0kNJ7kiueY32LN7v_90EUtQfLXqSkt8w6YfAbo', '2024-06-08 13:43:21', '2024-06-08 13:43:21'),
(64, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJOdXIgSGlrYXJpIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTc4NTQyNzIsImV4cCI6MTcxNzk0MDY3Mn0.SdTIzQGqsnti84R9UJ0b2uEbl2BcjyKdHotOVYyfoAU', '2024-06-08 13:44:32', '2024-06-08 13:44:32'),
(71, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxODAyNTQ5MywiZXhwIjoxNzE4ODg5NDkzfQ.0ZThgD6K18AkFzF9NcrbM6lH0PkJp8scQ6_-gr3RJVU', '2024-06-10 13:18:13', '2024-06-10 13:18:13'),
(78, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzE2NjcsImV4cCI6MTcxODg5NTY2N30.osPvJi9I7mE-E7fgbKZUSbSm3j7TCH9x_ZLwE4_5V7Y', '2024-06-10 15:01:07', '2024-06-10 15:01:07'),
(79, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzE4MjksImV4cCI6MTcxODg5NTgyOX0.YFkHYSW0gupH7_f1r8PHE0J36pXhvkHiy0uXj7kQzGc', '2024-06-10 15:03:49', '2024-06-10 15:03:49'),
(80, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzE5OTIsImV4cCI6MTcxODg5NTk5Mn0.1bcbuAlW2MWNLZl4I7knuE0RYofz6ihaqEmKgQ_wR4I', '2024-06-10 15:06:32', '2024-06-10 15:06:32'),
(81, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzIxMzIsImV4cCI6MTcxODg5NjEzMn0.eIosnzAHyFFTSJL34nyO1jh2VxIjwfZHSKSAYm3rkU4', '2024-06-10 15:08:52', '2024-06-10 15:08:52'),
(82, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzIzMTAsImV4cCI6MTcxODg5NjMxMH0.2fVJJwuyyklfl9GkrnDbyVGSPgHd66w-VaEmzZ3BN3I', '2024-06-10 15:11:50', '2024-06-10 15:11:50'),
(83, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzIzMTMsImV4cCI6MTcxODg5NjMxM30.LxtfLzARE3dyXElGF7-ZaBMigUS-ZSSlutaC7P20PU4', '2024-06-10 15:11:53', '2024-06-10 15:11:53'),
(84, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzIzNDMsImV4cCI6MTcxODg5NjM0M30.CnXtbiXAlWvr1d60b6lqt60Fd2oWqHSpepw8ofW7Tqg', '2024-06-10 15:12:23', '2024-06-10 15:12:23'),
(85, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzI0NjUsImV4cCI6MTcxODg5NjQ2NX0.eBH6zeGH0MgNCNkkK1OYy12jC_E0BHyfQlLkwa8S4CY', '2024-06-10 15:14:25', '2024-06-10 15:14:25'),
(86, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzI0NzEsImV4cCI6MTcxODg5NjQ3MX0.f1ZrcrnF-DX8RNXkEgtDPRzTPAtlB-3yBTo0m6xs5qc', '2024-06-10 15:14:31', '2024-06-10 15:14:31'),
(89, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgwMzI1MDMsImV4cCI6MTcxODg5NjUwM30.GAfVtomLvL7GQcmEVb10BtF8jAjlaIU8vMk3_wzUFn0', '2024-06-10 15:15:03', '2024-06-10 15:15:03'),
(118, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJGZWxpeCBLdW4iLCJyb2xlIjoidXNlciIsImlhdCI6MTcxODA5NDM4NSwiZXhwIjoxNzE4OTU4Mzg1fQ.NmFKZ56GiAMudgr1KnaE-X_eJA539HgsBk17bAuCzAI', '2024-06-11 08:26:25', '2024-06-11 08:26:25'),
(121, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJGaXJtYW4gQXJ0Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MTgxMDc4ODksImV4cCI6MTcxODk3MTg4OX0.WrM2IGdx1f-pBIW_aJzAYKaorC73Uzfi093Xp5jh0JE', '2024-06-11 12:11:29', '2024-06-11 12:11:29');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indeks untuk tabel `admintokens`
--
ALTER TABLE `admintokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indeks untuk tabel `collections`
--
ALTER TABLE `collections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_user_id` (`user_id`),
  ADD KEY `index_image_id` (`image_id`);

--
-- Indeks untuk tabel `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `countrys`
--
ALTER TABLE `countrys`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `developers`
--
ALTER TABLE `developers`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `followers`
--
ALTER TABLE `followers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_following_user_id` (`following_user_id`),
  ADD KEY `index_followed_user_id` (`followed_user_id`),
  ADD KEY `index_followed_user_id_and_following_user_id` (`followed_user_id`,`following_user_id`);

--
-- Indeks untuk tabel `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_user_id_and_image_name` (`user_id`,`image_name`),
  ADD KEY `index_status_user` (`status`);

--
-- Indeks untuk tabel `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `index_user_id_like` (`liked_by_user_id`),
  ADD KEY `index_user_id_liked` (`liked_user_id`);

--
-- Indeks untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_user_id` (`sender_user_id`),
  ADD KEY `receiver_user_id` (`receiver_user_id`),
  ADD KEY `index_message_id` (`id`,`message_room_id`),
  ADD KEY `index_receiver_user_id` (`message_room_id`,`receiver_user_id`);

--
-- Indeks untuk tabel `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `index_id_and_user_id` (`id`,`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `country` (`country`),
  ADD KEY `index_username` (`username`),
  ADD KEY `index_email_user` (`email`);

--
-- Indeks untuk tabel `usertokens`
--
ALTER TABLE `usertokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `index_token` (`token`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `admintokens`
--
ALTER TABLE `admintokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `collections`
--
ALTER TABLE `collections`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=291;

--
-- AUTO_INCREMENT untuk tabel `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `countrys`
--
ALTER TABLE `countrys`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `developers`
--
ALTER TABLE `developers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `followers`
--
ALTER TABLE `followers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT untuk tabel `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;

--
-- AUTO_INCREMENT untuk tabel `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `usertokens`
--
ALTER TABLE `usertokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `admintokens`
--
ALTER TABLE `admintokens`
  ADD CONSTRAINT `admintokens_ibfk_1` FOREIGN KEY (`admin_id`) REFERENCES `admins` (`id`);

--
-- Ketidakleluasaan untuk tabel `collections`
--
ALTER TABLE `collections`
  ADD CONSTRAINT `collections_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `collections_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `images` (`id`);

--
-- Ketidakleluasaan untuk tabel `followers`
--
ALTER TABLE `followers`
  ADD CONSTRAINT `followers_ibfk_1` FOREIGN KEY (`following_user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `followers_ibfk_2` FOREIGN KEY (`followed_user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`liked_by_user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`liked_user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`country`) REFERENCES `countrys` (`id`);

--
-- Ketidakleluasaan untuk tabel `usertokens`
--
ALTER TABLE `usertokens`
  ADD CONSTRAINT `usertokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

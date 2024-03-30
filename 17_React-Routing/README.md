# Resume React Routing

1. Router?
Router adalah komponen inti dalam React Router yang digunakan untuk menavigasi antara halaman atau komponen dalam aplikasi React.

2. Single Page Application (SPA) dan Multi Page Application (MPA)

a. Single Page Application (SPA), salah satu jenis aplikasi website yang hanya memiliki 1 halaman untuk menangani semua aktivitas yang terjadi dalam apliasi tersebut.

Multi Page Application (MPA), biasa disebut tradisional web app. Dimana perlu memuat ulang seluruh halaman web setiap kali membuat request baru

3. Hooks Routing React

React Router menyediakan beberapa hooks untuk membantu penanganan routing dalam aplikasi React:

a. useParams
Hook useParams digunakan untuk mengakses parameter URL yang didefinisikan dalam rute. Contohnya, jika rute adalah /users:id, maka useParams akan mengembalikan objek dengan properti id yang berisi nilai parameter dalam URL.

b. useHistory
Hook useHistory digunakan untuk mengakses objek history dari React Router. Objek history memungkinkan kita untuk melakukan navigasi programatik seperti push, replace, dan go.

c. seLocation
Hook useLocation mengembalikan objek yang mewakili lokasi URL saat ini. Objek ini memiliki properti seperti pathname, search, hash, dan state.

d. useRouteMatch
Hook useRouteMatch digunakan untuk mendapatkan informasi tentang rute yang cocok dengan lokasi saat ini. Ini berguna ketika Anda perlu mengakses data rute atau menentukan apakah rute saat ini cocok dengan beberapa pola.
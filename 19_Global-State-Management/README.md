# Resume Global State Management

1. Global state adalah konsep di mana data yang diakses dan dibagikan oleh berbagai komponen di seluruh aplikasi disimpan dalam satu tempat. Ini memungkinkan aplikasi memiliki sumber kebenaran tunggal, menghindari masalah sinkronisasi data, dan memudahkan manajemen state aplikasi.

2. Redux adalah sebuah library JavaScript untuk mengelola global state pada aplikasi. Redux terdiri dari tiga komponen utama: actions (objek yang mendeskripsikan apa yang terjadi di aplikasi), reducers (fungsi murni yang menentukan bagaimana state berubah berdasarkan aksi), dan store (satu-satunya sumber kebenaran, mengelola seluruh state aplikasi). Redux sangat tepat digunakan pada aplikasi dengan state yang kompleks dan sering berubah, aplikasi dengan banyak komponen yang saling berbagi data, dan aplikasi yang membutuhkan histori perubahan state.

3. Redux Persist & Redux Thunk
Redux Persist memungkinkan menyimpan state Redux di penyimpanan lokal, berguna untuk mempertahankan state aplikasi bahkan setelah aplikasi ditutup dan dibuka kembali. 

Redux Thunk adalah middleware yang memungkinkan aksi menjadi fungsi asinkron, membantu mengelola efek samping dalam aplikasi Redux.
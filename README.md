# Simple Finance Tracker
##### Author: 0xazr
##### Dibuat dengan: Node.js, gRPC, MongoDB, Express.js, Vue.js, Tailwindcss
![image](https://user-images.githubusercontent.com/54212814/229375316-34070907-8f7d-4c10-b9a8-dc920bbc76b3.png)
## Cara install
### Install mongoDB
Jalankan command dibawah untuk menginstall mongoDB menggunakan docker. 
```
$ sudo docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Install depedencies
Jalankan command dibawah untuk menginstall depedencies untuk server gRPC dan server API (express) yang diperlukan
```
$ yarn install
```
Jalankan command dibawah untuk menginstall depedencies untuk server frontend (Vue.js) yang diperlukan
```
$ cd client; yarn install
```

## Cara run program
### Menjalankan server gRPC
```
$ yarn grpc
```
### Menjalankan server API
```
$ yarn api
```
### Menjalankan server frontend
```
$ yarn client
```

## Cara menggunakan aplikasi
Setelah berhasil menjalankan aplikasi, langkah selanjutnya adalah kunjungi http://127.0.0.1:5173/ untuk menggunakan interface aplikasi. Selanjutnya, otomatis akan diarah ke halaman login page. Login dengan menggunakan akun `johndoe@example.com` dengan password `password1`. Then, explore by yourself.
## Todo
- Fitur register ❌ (Belum sempat implementasi karena deadline terlalu dekat 💀)

const client = require('./client');

client.deleteMahasiswa({
    id: "3"
}, (error, mahasiswa) => {
    if(error) throw error
      console.log(mahasiswa);
});
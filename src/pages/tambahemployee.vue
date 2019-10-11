<template>
  <div class="row">
    <div id="form" class="q-mx-auto" style="max-width: 400px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      > 
        <q-input
          filled
          v-model="nama"
          label="Nama*"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Nama anda salah']"
        />

        <q-input
          filled
          type="jeniskelamin"
          v-model="jeniskelamin"
          label="Jenis Kelamin "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Jenis Kelamin anda salah',
          ]"
        />

         <q-input
          filled
          type="status"
          v-model="status"
          label="Status Sekarang "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Masukkan status anda sekarang',
          ]"
        />


 <q-input
          filled
          type="tanggallahir"
          v-model="tanggallahir"
          label="Tanggal Lahir "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Isi tanggal lahir',
          ]"
        />


        <div>
          <q-btn label="DAFTAR" type="submit" color="black"/>
          
        </div>
      </q-form>
    </div>
  </div>
</template>

<style scoped>

  #form{
    margin-top: 15%; 
  }
  
</style>

<script>

import axios from 'axios'
export default {

  data(){
    return{
      nama : "",
      jeniskelamin : "",
    status : "",
    tanggallahir: ""


    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/employees', {
    nama: self.nama,
    jeniskelamin: self.jeniskelamin,
    status: self.status,
    tanggallahir: self.tanggallahir

    })
    .then(function (response) {
      return  self.$router.push('/tambahemployee')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>
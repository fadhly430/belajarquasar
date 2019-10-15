<template>
  <div class="row">
    <div id="form" class="q-mx-auto" style="max-width: 400px">
      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      > 
        <q-input
          filled
          v-model="username"
          label="Username*"
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
          type="email"
          v-model="email"
          label="Email"
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || '',
          ]"
        />


 <q-input
          filled
          type="password"
          v-model="password"
          label="Password "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Kata Sandi',
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
      username : "",
      jeniskelamin : "",
    email : "",
    password: ""


    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/Users', {
    username: self.username,
    jeniskelamin: self.jeniskelamin,
    email: self.email,
    password: self.password

    })
    .then(function (response) {
      return  self.$router.push('/users')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>
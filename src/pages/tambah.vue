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
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Your password "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Please enter your password',
          ]"
        />

         <q-input
          filled
          type="level"
          v-model="level"
          label="Level "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Masukkan level berapa',
          ]"
        />


 <q-input
          filled
          type="nama_admin"
          v-model="nama_admin"
          label="Nama Bos "
          lazy-rules
          :rules="[
            val => val !== null && val !== '' || 'Masukkan nama bos',
          ]"
        />


        <div>
          <q-btn label="Login" type="submit" color="primary"/>
          
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
      password : "",
    level : "",
    nama_admin: ""


    }
  },

  methods : {
    onSubmit(){
      let self = this;
      
    axios.post('http://localhost:3000/api/admins', {
    username: self.username,
    password: self.password,
    level: self.level,
    nama_admin: self.nama_admin

    })
    .then(function (response) {
      return  self.$router.push('/')
         
    })
    .catch(function (error) {
      console.log(error);
    });
    }
  }
}
</script>
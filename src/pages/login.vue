<template>
  <div id = "form" class="q-pa-md" style="max-width: 400px">
      
    <q-form
      @submit="onSubmit"
    
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="username"
        label="Your name *"
        hint="Input your username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        hint="Input your password"
        lazy-rules
        :rules="[

          val => val !== null && val !== '' || 'Please type your password',
      
        ]"
      />
      <div>
        <q-btn label="Submit" type="submit" color="info"/>
        <!--q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" /-->
        <hr>
        <div>{{username}}</div>
        <div>{{password}}</div>
      </div>

    </q-form>

  </div>
</template>
<style scoped>

#form{
    margin-left: 30%;
    margin-top: 10%;
}

</style>

<script>
import login_api from '../api/login/index';
export default {
    data(){
        return{
            username: "",
            password: ""
        }
    },

    methods : {

        onSubmit(){
            let self = this;

            login_api
                .userlogin(window, self.username, self.password)
                .then(function (result){
                    console.log(result)
                    if (result){
                        self.$router.push("/");
                    }

                })
                .catch(function(err) {
                    console.log(err);
                });
        }
    }

    
}
</script>
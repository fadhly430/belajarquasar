<template>
  <q-page class="q-pa-md">
  <div class="q-gutter-md">
  <input v-model="message" @keyup = "handleKeyup"/>
  <h1>{{message}}</h1>

   <h5 v-if="message.length" class="border-black">{{message}}</h5>
   <h6 v-else>tidak ada tulisan </h6>
   <button @click="message= ''"> hapus </button> 
   <button @click=" clearMessage= ''"> clear dengan fungsi </button>

  

  </div>
  </q-page>
</template>

<script>
export default 
{
  data() {
    return {
      message: 'mau apa ? '
    }
  },

  methods: {
  clearMessage(){
  this.message=''
  },
    handleKeyup(e) {
      if (e.keyCode == 27){
        this.message ='ESC'
      }
    }
  }
  
  
}
</script>



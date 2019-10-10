<template>
  <q-page class="q-pa-md">
  <div class="q-gutter-md">
  <input v-model="message" @keyup = "handleKeyup"/>
   <h1>{{message}}</h1>
   <button @click="message= ''"> hapus </button> 
   <button @click=" clearMessage= ''"> clear dengan methods </button>
  </div>
  </q-page>
</template>

<script>
export default 
{
  data() {
    return {
      message: 'bismillah '
    }
  },

  methods: {
    clearMessage(){
      this.message=''
    },
    handleKeyup(e) {
      if (e.keyCode == 27){
        this.message =''
      }
    }
  }
  
  
}
</script>



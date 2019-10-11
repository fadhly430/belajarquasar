<template>
  <q-page class="q-pa-md">
  <div class="q-gutter-md">
  <input v-model="message" @keyup = "handleKeyup"/>
  <h1>{{message}}</h1>

   <h5 v-if="message.length" class="border-black">{{message}}</h5>
   <h6 v-else>tidak ada tulisan </h6>
    <p> {{uppercaseMessage()}}</p>


   <button @click="message= ''"> hapus </button> 
   <button @click="clearMessage= ''"> clear dengan fungsi </button>


<ul>
<li v-for="item in tasks" :key="item.name">
<div>{{item.name}}</div>
<small> due {{item.due_date}}
        at {{item.due_time}}
</small>
</li>
</ul>
  

</div>
</q-page>
</template>

<script>
export default 
{
  data() {
    return {
      tasks: [{
  name: "Go to shop",
  due_date: "2019/02/12",
  due_time: "18:09"
},
{
  name: "set some froits",
  due_date: "2019/02/13",
  due_time: "17:00"
}
],
      message: 'mau apa ? '
    }
  },

methods: {
  clearMessage(){ 
    this.message =''
},

  handleKeyup(e){
    if(e.keyCode==27){
      this.message='ESC'
  } else if(e.keyCode==13){
      this.message='ENTER'
  }
},


uppercaseMessage(){
  return this.message.toUpperCase()
}

}
}
</script>



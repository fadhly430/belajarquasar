<template>
  <div class="q-pa-md">
      <q-btn label="TAMBAH PESERTA" color="primary" @click="navigate()" />
    
   <q-list bordered class="rounded-borders" style="max-width: 600px" >
      <q-item-label header>Google Inbox style</q-item-label>
        <!-- awal -->
        <q-item >
    
          <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">nama</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">jenis kelamin</q-item-label>
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">tanggal lahir
          </q-item-label>
        </q-item-section>

         <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">status
          </q-item-label>
        </q-item-section>

        <q-item-section top class="flex-flex-center">
          <q-item-label class="q-mt-sm"> Aksi
          </q-item-label>
        </q-item-section>

      </q-item>
        
        <!-- Tabel -->
      <q-item v-for="emp in employees" :key="emp.id">
       

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{emp.nama}}</q-item-label>
        </q-item-section>

        
          <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{emp.jeniskelamin}}</q-item-label>
        </q-item-section>


          <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{emp.tanggallahir}}</q-item-label>
        </q-item-section>

             <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">{{emp.status}}</q-item-label>
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="edit" @click="onUpdate(emp)"/>
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="onDelete(emp.id)" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </div>

  
</template>

<script>
import tabele from '../api/get/index'
export default {
  data () {
    return {
      
      employees: [ ]
    }
  },

  methods: {
      navigate(){
          this.$router.push('/tambahemployee')
      },
      onDelete(id){
      
      tabele.deleteAdmin(window, id)
      .then((res)=>{
                //  this.posts = res.data;
        tabele.getemployee(window)
        .then((res)=>{
               this.employees=res.data
               this.$router.go('/tabel')
           })
           .catch(()=>{
               alert('Error load data');
           })
        
      })
      .catch(()=>{
        alert('Error load data');
      })
      console.log("delete called");
    }
    
  },
 
  beforeCreate()
  {
    let self=this;
    tabele.getemployee(window).then(function(result)
    {
      self.employees = result
    })
  }
  // async mounted(){
  //   const response = await axios.get('http://localhost:3000/api/employees')
  //   this.employees=response.data
  }

</script>
<template>
  <div class="q-pa-md">
      <q-btn label="TAMBAH PESERTA" color="primary" @click="navigate()" />
    
    <q-table
      title="data peserta"
      :data="employees"
      :columns="columns"
      row-key="name"
    />
  </div>

  
</template>
<script>
import tabele from '../api/get/index'
export default {
  data () {
    return {
      columns: [
        {
          name: 'nama',
          required: true,
          label: 'nama',
          align: 'left',
          field: row => row.nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'jeniskelamin',
          required: true,
          label: 'jenis kelamin',
          align: 'left',
          field: row => row.jeniskelamin,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'status',
          required: true,
          label: 'status',
          align: 'left',
          field: row => row.status,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'tanggallahir',
          required: true,
          label: 'tangga lahir',
          align: 'left',
          field: row => row.tanggallahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
        
       
         ],
      employees: [ ]
    }
  },

  methods: {
      navigate(){
          this.$router.push('/tambahemployee')
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
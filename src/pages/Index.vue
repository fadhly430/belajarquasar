<template>
  <div class="q-pa-md">
    <q-table
      :data="employees"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Nama',
          align: 'left',
          field: row => row.nama,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'jenis_kelamin',
          required: true,
          label: 'Jenis Kelamin',
          align: 'left',
          field: row => row.jeniskelamin,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'tanggallahir',
          required: true,
          label: 'Tanggal Lahir',
          align: 'left',
          field: row => row.tanggallahir,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        },
        {
          name: 'status',
          required: true,
          label: 'Status',
          align: 'left',
          field: row => row.status,
          format: val => `${val}`,
          sortable: true,
          classes: 'bg-grey-2 ellipsis',
          style: 'max-width: 100px'
        }
        
         ],
      employees: [
        {
         
        }
      ]
    }
  },
  async mounted(){
    const response = await axios.get('http://localhost:3000/api/Employees')
    this.employees=response.data
  }
}
</script>
<template>
  <q-layout view="lHh tre lFf">
    <q-header elevated>
      <q-toolbar>
        
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">

  
           <template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="REGISTRASI" color="primary" @click="layout = true" />

    <q-dialog v-model="layout">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-primary">
          <q-toolbar>
          
            <q-toolbar-title>Pendaftaran</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding>
           
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
         


    </div>
  </div>
</template>

      </q-toolbar>
    </q-header>

 
    <template>
 
</template>
  
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      layout: false

     
    }
  }
}
</script>
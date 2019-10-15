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
          
            <q-toolbar-title>PENDAFTARAN</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>

        <q-page-container>
          <q-page padding>
            <p v-for="n in contentSize" :key="n">
              {{ lorem }}
            </p>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>
         
         <q-btn color="" label="AL-QUR'AN ">
        <q-menu content-class=" text-black" auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Terjemahan Indonesia</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Terjemahan Inggris</q-item-section>
            </q-item>
            <q-separator dark />
          </q-list>
        </q-menu>
      </q-btn>

       <q-btn color="" label="DZIKIR PAGI & PETANG ">
        <q-menu content-class=" text-black" auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Dzikir Pagi</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Dzikir Petang</q-item-section>
            </q-item>
            <q-separator dark />
          </q-list>
        </q-menu>
      </q-btn>

      <q-btn color="" label="WAKTU ADZAN">
      </q-btn>


     

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
      layout: false,

      moreContent: true,
      drawer: false,
      drawerR: false,
      leftDrawerOpen: false
    }
  }
}
</script>
<template>
  <q-layout view="lHh tre lFf">
    <q-header elevated>
      <q-toolbar>
        
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">

  
           
    </div>
  </div>
</template>

      </q-toolbar>
    </q-header>
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
      leftDrawerOpen: false
    }
  }
}
</script>
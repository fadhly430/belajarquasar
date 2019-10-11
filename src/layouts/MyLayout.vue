<template>
  <q-layout view="lHh tre lFf">
    <q-header elevated>
      <q-toolbar>
        
        <template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">

  
           <q-btn color="" label="TSAQOFAH ISLAMIYAH">
        <q-menu content-class="text-black" auto-close>
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>Rukun Islam</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Rukun Iman</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Imam Madzhab</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Hadits-Hadits</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Amalan Sunnah</q-item-section>
            </q-item>
            <q-separator dark />
            <q-item clickable>
              <q-item-section>Kumpulan Do'a</q-item-section>
            </q-item>
            <q-separator dark />
          </q-list>
        </q-menu>
      </q-btn>
         
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
      leftDrawerOpen: false
    }
  }
}
</script>
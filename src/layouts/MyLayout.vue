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

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-black-2"
    >
    <template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-icon-toggle
        expand-separator
        icon="perm_identity"
        label="Account settings"
        caption="John Doe"
      >
        <q-card>
          <q-card-section>
            masih kosong akunnya
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-icon-toggle
        expand-separator
        icon="signal_wifi_off"
        label="Wifi settings"
      >
        <q-card>
          <q-card-section>
            masih kosong
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        expand-icon-toggle
        expand-separator
        icon="drafts"
        label="Drafts"
        header-class="text-purple"
      >
        <q-card>
          <q-card-section>
            masih kasong
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
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
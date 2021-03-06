
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: 'index', component: () => import('pages/Index.vue') },
      { path: '', component: () => import('pages/login.vue') },
      { path: 'tambah', component: () => import('pages/tambah.vue') },
      { path: 'tambahemployee', component: () => import('pages/tambahemployee.vue') },
      { path: 'inputusers', component: () => import('pages/inputusers.vue') },
      { path: 'users', component: () => import('pages/users.vue') },
      { path: 'video', component: () => import('pages/video.vue') },
      { path: 'tabel', component: () => import('pages/tabel.vue') },
      { path: 'tabel2', component: () => import('pages/tabel2.vue') },
      { path: 'update', component: () => import('pages/update.vue') }
     
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

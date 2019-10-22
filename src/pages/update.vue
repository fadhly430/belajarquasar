<template>
<div class="q-pa-md">
    <div class="row">
        <div class="col" style="align : center">
            <!-- Qlist awal -->
            <q-list bordered class="rounded-borders q-mx-auto " style="max-width: 1100px">
                <q-item-label header>
                    <q-btn color="blue" icon="add_box" label="admin" class="sp" size="sm" @click="add()" />
                </q-item-label>

                <q-item class="bg-teal">
                    <q-item-section avatar top class="col-1 gt-xm" style="align : center">
                        <q-item-label class="q-mt-sm">No</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm" style="align : center">
                        <q-item-label class="q-mt-sm">Username</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm" style="align : center">
                        <q-item-label class="q-mt-sm">Jenis kelamin
                        </q-item-label>
                    </q-item-section>

                        <q-item-section top class="col-2 gt-xm" style="align : center">
                        <q-item-label class="q-mt-sm">Tanggal lahir
                        </q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm" style="align : center">
                        <q-item-label class="q-mt-sm">Pekerjaan
                        </q-item-label>
                    </q-item-section>
                    

                    <q-item-section top class="col-2 gt-xm">
                        <q-item-label class="q-mt-sm flex flex-center">Aksi
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <!-- Tabel -->
                <q-item v-for="(emp, index ) in employees" :key="emp.id" class="bg-grey-3" line="1">
                    <q-item-section avatar top class="col-1 gt-xm">
                        <q-item-label class="q-mt-sm">{{index+1}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm">
                        <q-item-label class="q-mt-sm">{{emp.nama}}</q-item-label>
                    </q-item-section>

                    <q-item-section top class="col-2 gt-xm">
                        <q-item-label class="q-mt-sm">{{emp.jeniskelamin}}</q-item-label>
                    </q-item-section>

                     <q-item-section top class="col-2 gt-xm">
                        <q-item-label class="q-mt-sm">{{emp.tanggallahir}}</q-item-label>
                    </q-item-section>

                     <q-item-section top class="col-2 gt-xm">
                        <q-item-label class="q-mt-sm">{{emp.status}}</q-item-label>
                    </q-item-section>


                    <q-item-section top class="col-2 gt-xm flex flex-center">
                        <q-item-label lines="1">

                            <q-btn size="12px" flat dense round icon="edit" @click="edit(emp)" />
                            <q-btn size="12px" flat dense round icon="delete" @click="onDelete(emp.id)" />
                            <q-btn size="12px" flat dense round icon="more_vert" />

                        </q-item-label>
                    </q-item-section>
                </q-item>
            </q-list>
            <!-- Qlist akhir -->

            <!-- Form popup awal  -->
            <q-dialog v-model="dialog" persistent>
                <q-card>
                    <q-card-section>
                        <div id="form" class="q-mx-auto" style="max-width: 400px">
                            <q-form @submit="onSubmit" class="q-gutter-md">
                                <q-input filled v-model="form.nama" label="Your name *" hint="Name and surname" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="form.jeniskelamin" label="Jenis Kelamin *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                <q-input filled v-model="form.status" label="Pekerjaan *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                  <q-input filled v-model="form.tanggallahir" label="Tanggal Lahir *" hint="" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
                                
          

                                <!-- Button awal -->
                                <div>
                                    <q-btn flat label="Add" type="submit" color="primary" v-close-popup v-show="!updateSubmit" />
                                    <q-btn flat label="Update" type="button" color="primary" v-close-popup v-show="updateSubmit" @click="update(form)" />
                                    <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" @click="batal()" />

                                </div>
                                <!-- Button akhir -->

                            </q-form>
                        </div>
                    </q-card-section>
                </q-card>
            </q-dialog>
            <!-- Form popup akhir  -->

        </div>
    </div>
</div>
</template>

<style lang="sass" scoped>
    .row > div
      padding: 5px 7px
</style>

<script>
import admins from '../api/get/index';
export default {
    data() {
        return {
            current: 3,
            updateSubmit: false,
            dialog: false,
            cancelEnabled: false,
            employees: [{}],
            form: {
                id: '',
                nama: '',
                jeniskelamin: '',
                status: '',
                tanggallahir: ''
            }
        }
    }, 
    // Get data dari Api
    async mounted() {
        const response = await
        admins.getemployee(window) 
            {
                this.employees = response
            }
        },
    methods: {
        // Method untuk delete data By ID
        onDelete(id) {
            if (confirm('Apakah anda yakin akan menghapus data ini ?')) {
                admins.deleteAdmin(window, id)
                    .then((res) => {
                        admins.getemployee(window)
                            .then((res) => {
                                this.employees = res.data
                                this.$router.go('/update')
                            })
                            .catch(() => {
                                alert('Error load data');
                            })
                    })
                    .catch(() => {
                        alert('Error load data');
                    })
                console.log("delete called");
            }
        },
        // Methods add untuk mengaktifkan popup
        add() {
            this.dialog = true
            this.updateSubmit = false
          },
        // method untuk Tambah data
        onSubmit() {
            const self = this
            admins.postAdmin(window, self.form.nama, self.form.jeniskelamin, self.form.status, self.form.tanggallahir)
                .then(function (result) {
                    self.$router.go('/update')
                })
                .catch(function (err) {
                    console.log(err);
                });
            },
         // method untuk Edit data
        edit(emp) {
            if (confirm('Anda akan di alihkan ke halaman Edit data, Tekan OK untuk lanjut atau Batal untuk kembali')) {
                try {
                    this.dialog = true
                    this.updateSubmit = true
                    this.form.id = emp.id
                    this.form.nama = emp.nama
                    this.form.jeniskelamin = emp.jeniskelamin
                    this.form.status = emp.status
                    this.form.tanggallahir = emp.tanggallahir
                 
                } catch (error) {
                    console.log(error.message)
                }
            }
        },
        // method Tombol batal pada popup
        batal() {
            if (confirm('Apakah Anda yakin ingin keluar proses ini !!!')) {
                this.dialog = false
            }
        },
        // method Update
        update(id) {
            const self = this
            admins.putEmployee(window, self.form.nama, self.form.jeniskelamin, self.form.status, self.form.tanggallahir)
            .then(function (result) {
                self.$router.go('/update')
            })
            .catch(function (err) {
                console.log(err);
            });
        }
    }
}
</script>
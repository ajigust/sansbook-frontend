<template>
<Sidebar />
<div class="main-panel">
  <Nav />
<div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">DATA USER</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Created At</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      <tr v-for="(user, index) in users" :key="index">
                        <td>{{ user.name}}</td>
                        <td>{{ user.email}}</td>
                        <td>{{ user.created_at}}</td>
                        <td>
                          <span v-if="user.id == 1">
                            <button @click="userDelete(user.id)" class="btn btn-danger btn-sm" disable>
                              <i class="nc-icon nc-simple-remove"></i>
                            </button>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
<Footer />
</div>
</template>

<script>
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import Footer from "./../components/Footer.vue"
  import Nav from "./../components/Nav.vue"
  import Sidebar from "./../components/Sidebar.vue"

  export default {
      name: 'indexUser',
      components: {
        Footer,
        Nav,
        Sidebar, 
      },
      setup() {

        let users = ref([])

        onMounted(() => {

            axios.get('http://localhost:8000/api/userlist')
            .then(response => {
              

              users.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        function userDelete(id) {
          axios.delete(`http://localhost:8000/api/userlist/destroy/${id}`)
          .then(() => {
              users.value.splice(users.value.indexOf(id), 1)
              location.reload()

            }).catch(error => {
                console.log(error.response.data)
            })
        
        }

        //return
        return {
            users,
            userDelete,
        }

    }

};
</script>
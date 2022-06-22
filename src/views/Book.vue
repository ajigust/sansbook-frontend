<template>
<Sidebar />
<div class="main-panel">
  <Nav />
<div class="content">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">DATA BOOK</h4>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <thead class=" text-primary">
                      <th>Name Book</th>
                      <th>Author Book</th>
                      <th>Year Book</th>
                      <th>Book Type</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      <tr v-for="(book, index) in books" :key="index">
                        <td>{{ book.name_book}}</td>
                        <td>{{ book.author_book}}</td>
                        <td>{{ book.year_book}}</td>
                        <td>{{ book.book_type}}</td>
                        <td>{{ book.description}}</td>
                        <td><img :src="book.image_book" style="width:100px !important; height: 100px !important; object-fit:cover; " alt=""></td>
                        <td>

                          <router-link :to="{name: 'EditBook', params:{id: book.id }}" class="btn btn-success btn-sm mr-1">
                            <i class="nc-icon nc-ruler-pencil"></i>
                          </router-link>
                          <!-- <a href="/editbook" class="btn btn-success btn-sm">
                            
                          </a> -->
                          <button @click.prevent="bookDelete(book.id)" class="btn btn-danger btn-sm">
                            <i class="nc-icon nc-simple-remove"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="http:/admin-addBook" class="btn btn-success"> Tambah Data </a>
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
      name: 'indexBook',
      components: {
        Footer,
        Nav,
        Sidebar, 
      },
      setup() {

        let books = ref([])
       
        onMounted(() => {

            axios.get('http://localhost:8000/api/books')
            .then(response => {
              
              books.value = response.data.data

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        function bookDelete(id) {
          axios.delete(`http://localhost:8000/api/books/destroy/${id}`)
          .then(() => {
              books.value.splice(books.value.indexOf(id), 1)
              location.reload()

            }).catch(error => {
                console.log(error.response.data)
            })
        
        }

        return {
            books,
            bookDelete,
        }

    }
};
</script>
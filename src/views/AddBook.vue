<template>
<Sidebar />
<div class="main-panel">
  <Nav />
  <div class="content">
          <div class="row">
            <div class="col-md-12">
              <div class="card card-user">
                <div class="card-header">
                  <a href="http:/book"><span class="nc-icon nc-minimal-left"></span></a>
                  <h5 class="card-title">Tambah Buku</h5>
                </div>
                <div class="card-body">
                  <form @submit.prevent="store">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Judul Buku</label>
                          <input type="text" class="form-control" v-model="book.name_book" placeholder="Tulis judul buku...">
                          <div v-if="validation.name_book" class="mt-2 alert alert-danger">
                                {{ validation.name_book[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Pengarang</label>
                          <input type="text" class="form-control" v-model="book.author_book" placeholder="Tulis pengarang buku...">
                          <div v-if="validation.author_book" class="mt-2 alert alert-danger">
                                {{ validation.author_book[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Tahun Terbit</label>
                          <input type="number" class="form-control" v-model="book.year_book" placeholder="Tulis tahun terbit buku...">
                          <div v-if="validation.year_book" class="mt-2 alert alert-danger">
                                {{ validation.year_book[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Tipe Buku</label>
                          <input type="text" class="form-control" v-model="book.book_type" placeholder="Tulis tipe buku...">
                          <div v-if="validation.book_type" class="mt-2 alert alert-danger">
                                {{ validation.book_type[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Deskripsi Buku</label>
                          <textarea class="form-control textarea" v-model="book.description" placeholder="Tulis deskripsi buku"></textarea>
                          <div v-if="validation.description" class="mt-2 alert alert-danger">
                                {{ validation.description[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Link Cover</label>
                          <input type="text" class="form-control" v-model="book.image_book" placeholder="Masukan link untuk cover buku...">
                          <div v-if="validation.image_book" class="mt-2 alert alert-danger">
                                {{ validation.image_book[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                     <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>Link Download</label>
                          <input type="text" class="form-control" v-model="book.link" placeholder="Masukan link untuk download...">
                          <div v-if="validation.link" class="mt-2 alert alert-danger">
                                {{ validation.link[0] }}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="update ml-auto mr-auto">
                        <button type="submit" class="btn btn-primary btn-round">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
  </div>
  <Footer />
</div>
</template>

<script>
  import { reactive, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  import Footer from "./../components/Footer.vue"
  import Nav from "./../components/Nav.vue"
  import Sidebar from "./../components/Sidebar.vue"
  
  export default {
      name: 'addBook',
      components: {
        Footer,
        Nav,
        Sidebar, 
      },
      setup() {

          const book = reactive({
              name_book: '',
              author_book: '',
              year_book: '',
              book_type: '',
              description: '',
              image_book: '',
              link: '',
          })

          const validation = ref([])
          const router = useRouter()

          function store() {

              let name_book = book.name_book
              let author_book = book.author_book
              let year_book = book.year_book
              let book_type = book.book_type
              let description = book.description
              let image_book = book.image_book
              let link = book.link

              axios.post('http://localhost:8000/api/books/store', {
                  name_book,
                  author_book,
                  year_book,
                  book_type,
                  description,
                  image_book,
                  link
              }).then(() => {

                  router.push({
                      name: 'Book'
                  })

              }).catch(error => {

                  validation.value = error.response.data
              })

          }

          return {
              book,
              validation,
              router,
              store
          }
      }

  }

</script>

<style>

.buttom1{
  width:100%;
}

</style>
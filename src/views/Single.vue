<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar" style="background: linear-gradient(122.52deg, #4DA8E6 -0.55%, rgba(162, 159, 244, 0.489799) 44.7%, #FD92FF 88.14%);">
    <div class="container">
      <a class="navbar-brand font-weight-bold" href="#">E-Book</a>
  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse " id="main-navbar">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Beranda </a>
          </li>

          <!-- Pages -->
          <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown4" role="button" data-delay="350"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Tentang
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown4">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Blog Single</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">404 Page</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </li><!-- /Pages -->
          <!-- / Blog -->
  
          <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-delay="350"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Kategori
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown3">
              <li><a href="#">Novel</a></li>
              <li><a href="#">Komik</a></li>
              <li><a href="#">Agama</a></li>
              <li><a href="#">Pendidikan</a></li>
              <li><a href="#">Pemrograman</a></li>
            </ul>
          </li><!-- / Blog -->
  
          <!-- Account -->
  
          <li class="nav-item">
            <a class="nav-link" href="#">Kontak</a>
          </li>
        </ul>
      </div>
      <!-- Navbar-collapse -->
  
      <ul class="top-menu list-inline mb-0 d-none d-lg-block" id="top-menu">
        <li class="list-inline-item">
          <a href="#" class="search_toggle" id="search-icon"><i class="tf-ion-android-search"></i></a>
        </li>
  
        <li class="dropdown cart-nav dropdown-slide list-inline-item">
          <a href="#" class="dropdown-toggle cart-icon" data-toggle="dropdown" data-hover="dropdown">
            <i class="tf-ion-android-cart"></i>
          </a>
          <div class="dropdown-menu cart-dropdown">
            <!-- Cart Item -->
            <div class="media">
              <a href="#">
                <img class="media-object img- mr-3" src="assets2/images/cart-1.jpg" alt="image" >
              </a>
              <div class="media-body">
                <h6>Ladies Bag</h6>
                <div class="cart-price">
                  <span>1 x</span>
                  <span>1250.00</span>
                </div>
              </div>
              <a href="#" class="remove"><i class="tf-ion-close"></i></a>
            </div><!-- / Cart Item -->
  
            <!-- Cart Item -->
            <div class="media">
              <a href="#">
                <img class="media-object img-fluid mr-3" src="assets2/images/cart-2.jpg" alt="image" >
              </a>
              <div class="media-body">
                <h6>Skinny Jeans</h6>
                <div class="cart-price">
                  <span>1 x</span>
                  <span>1250.00</span>
                </div>
              </div>
              <a href="#" class="remove"><i class="tf-ion-close"></i></a>
            </div><!-- / Cart Item -->
  
            <div class="cart-summary">
              <span class="h6">Total</span>
              <span class="total-price h6">$1799.00</span>
  
              <div class="text-center cart-buttons mt-3">
                <a href="#" class="btn btn-small btn-transparent btn-block">View Cart</a>
                <a href="#" class="btn btn-small btn-main btn-block">Checkout</a>
              </div>
            </div>
          </div>
        </li>
        <li class="list-inline-item"><a href="#"><i class="tf-ion-ios-person mr-3"></i></a></li>
      </ul>
    </div>
  </nav>

<div class="content" style="margin-top: 50px;">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-user">
              <div class="card-body">
              <img class="border-gray" :src="book.image_book" alt="...">
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card card-user">
              <div class="card-header">
                <h5 class="card-title">Info Buku</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-5 pr-1">
                      <div class="form-group">
                        <label>Judul Buku</label>
                        <input type="text" class="form-control" placeholder="Company" v-model="book.name_book" readonly>
                      </div>
                    </div>
                    <div class="col-md-3 px-1">
                      <div class="form-group">
                        <label>Tahun</label>
                        <input type="text" class="form-control" placeholder="Username" v-model="book.year_book" readonly>
                      </div>
                    </div>
                    <!-- <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Penerbit</label>
                        <input type="text" class="form-control" v-model="book.name_book">
                      </div>
                    </div> -->
                  </div>
                  <!-- <div class="row">
                    <div class="col-md-6 pr-1">
                      <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="Company" value="Chet">
                      </div>
                    </div>
                    <div class="col-md-6 pl-1">
                      <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" value="Faker">
                      </div>
                    </div>
                  </div> -->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Penulis</label>
                        <input type="text" class="form-control" placeholder="Home Address" v-model="book.author_book" readonly>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="row">
                    <div class="col-md-4 pr-1">
                      <div class="form-group">
                        <label>City</label>
                        <input type="text" class="form-control" placeholder="City" value="Melbourne">
                      </div>
                    </div>
                    <div class="col-md-4 px-1">
                      <div class="form-group">
                        <label>Country</label>
                        <input type="text" class="form-control" placeholder="Country" value="Australia">
                      </div>
                    </div>
                    <div class="col-md-4 pl-1">
                      <div class="form-group">
                        <label>Postal Code</label>
                        <input type="number" class="form-control" placeholder="ZIP Code">
                      </div>
                    </div>
                  </div> -->
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label>Deskripsi</label>
                        <textarea style="height: 150px;" class="form-control" v-model="book.description" readonly></textarea>
                      </div>
                    </div>
                  </div>
                  <a :href="book.link" class="btn btn-success"> Download </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
 

<div class="footer-btm py-4" style="background: linear-gradient(122.52deg, #4DA8E6 -0.55%, rgba(162, 159, 244, 0.489799) 44.7%, #FD92FF 88.14%);">
    <div class="container">
        <div class="row ">
            <div class="col-lg-6">
                <p class="copyright mb-0 ">@ Copyright Reserved to therichpost &amp; made by <a href="https://therichpost.com/">therichpost</a></p>
            </div>
            <div class="col-lg-6">
                <ul class="list-inline mb-0 footer-btm-links text-lg-right mt-2 mt-lg-0">
                    <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                    <li class="list-inline-item"><a href="#">Terms &amp; Conditions</a></li>
                    <li class="list-inline-item"><a href="#">Cookie Policy</a></li>
                    <li class="list-inline-item"><a href="#">Terms of Sale</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>


</template>


<script>
    import { reactive, ref, onMounted } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import axios from 'axios'
    import "bootstrap/dist/css/bootstrap.min.css"
    import "jquery/dist/jquery.slim.min.js"
    import "popper.js/dist/umd/popper.min.js"
    import "bootstrap/dist/js/bootstrap.min.js"
    import "../../public/assets2/css/style.css"
    import "../../public/assets2/fonts/style.css"

    export default {
        name: 'SingleShow',
         setup() {

        const book = reactive({
            name_book: '',
            author_book: '',
            year_book: '',
            book_type: '',
            description: '',
            image_book: '',
            link: ''
        })

        const validation = ref([])

        const router = useRouter()

        const route = useRoute()

        onMounted(() => {

            axios.get(`http://localhost:8000/api/books/show/${route.params.id}`)
            .then(response => {
              
                book.name_book = response.data.data.name_book
                book.author_book = response.data.data.author_book
                book.year_book = response.data.data.year_book
                book.book_type = response.data.data.book_type
                book.description = response.data.data.description
                book.image_book = response.data.data.image_book
                book.link = response.data.data.link

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        return {
            book,
            validation,
            router,
        }

    }
    }

</script>

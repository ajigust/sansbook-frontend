<template>
<nav class="navbar navbar-expand-lg navbar-light bg-white w-100 navigation" id="navbar" style="background: linear-gradient(122.52deg, #4DA8E6 -0.55%, rgba(162, 159, 244, 0.489799) 44.7%, #FD92FF 88.14%);">
    <div class="container">
      <a class="navbar-brand font-weight-bold" href="/">SansBook</a>
  
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
        aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse " id="main-navbar">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Beranda </a>
          </li>

          <!-- Pages -->
          <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#katalog" aria-haspopup="true" aria-expanded="false">
              Katalog
            </a>
          </li><!-- /Pages -->
          <!-- / Blog -->
  
          <li class="nav-item dropdown dropdown-slide">
            <a class="nav-link dropdown-toggle" href="#newbook" aria-haspopup="true" aria-expanded="false">
              Terbaru
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<div id="carouselExampleControls" class="carousel slide main-slider slider" data-ride="carousel">
     <div class="carousel-inner">
      <div class="slider-item carousel-item active" style="background-image:url('assets2/images/1.png')">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                <div class="slider-caption">
                    <span class="lead">Book Collections </span>
                    <h1 class="mt-2 mb-5"><span class="text-color">Gratis </span>Download</h1>
                    <a href="#katalog" class="btn btn-main">Selengkapnya</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="slider-item carousel-item" style="background-image:url('assets2/images/2.png')">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                <div class="slider-caption">
                    <span class="lead">Terlaris</span>
                    <h1 class="mt-2 mb-5"><span class="text-color">Trendy</span> Santai</h1>
                    <a href="#katalog" class="btn btn-main">Selengkapnya</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div   class="slider-item carousel-item" style="background-image:url('assets2/images/3.png');">
            <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12 offset-lg-6 offset-md-6">
                <div class="slider-caption">
                    <span class="lead">Segala jenis Kategori</span>
                    <h1 class="mt-2 mb-5"><span class="text-color">Ada </span>disini</h1>
                    <a href="#katalog" class="btn btn-main">Selengkapnya</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
    </div>
    <br>
    <section class="category section pt-3 pb-0">
    <div class="container">
        <div class="row">
        <div class="col-lg-4 col-sm-12 col-md-6">
            <div class="cat-item mb-4 mb-lg-0">
            <img src="assets2/images/001.png" alt="" class="img-fluid">
            <div class="item-info">
                <p class="mb-0">Python fo Beginners</p>
                <h4 class="mb-4"><strong>Teknologi</strong></h4>
                <a href="#" class="read-more">Shop now</a>
            </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
            <div class="cat-item mb-4 mb-lg-0">
            <img src="assets2/images/002.png" alt="" class="img-fluid">
            <div class="item-info">
                <p class="mb-0">HTML 5 & Javascript</p>
                <h4 class="mb-4"><strong>Teknologi</strong></h4>
                <a href="#" class="read-more">Shop now</a>
            </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-12 col-md-6">
            <div class="cat-item">
            <img src="assets2/images/003.png" alt="" class="img-fluid">
            <div class="item-info">
                <p class="mb-0">Development Flutter</p>
                <h4 class="mb-4"><strong>Teknologi</strong></h4>
                <a href="#" class="read-more">Shop now</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section class="section products-main" id="katalog">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="title text-center">
                        <h2>New Books</h2>
                        <p>The best Online sales to shop these weekend</p>
                    </div>
                </div>
            </div>
    
    
        <div class="row">
            <!-- in buku -->
            <div class="col-lg-3 col-12 col-md-6 col-sm-6 mb-5" v-for="(book, index) in books" :key="index">
                <div class="product">
                <div class="product-wrap">
                    <a :href="'/show/'+book.id"><img class="img-fluid w-100 mb-3 img-first" :src="book.image_book" style="height:400px; object-fit: cover;" alt="product-img"></a>
                    <a :href="'/show/'+book.id"><img class="img-fluid w-100 mb-3 img-second" :src="book.image_book" style="height:405px; object-fit: cover;" alt="product-img"></a>
                </div>
                <span class="onsale">Sale</span> 
                <div class="product-info">
                    <h2 class="product-title h5 mb-0"> <a :href="'/show/'+book.id">{{ book.name_book }}</a></h2>
                    <span class="price">
                        {{ book.year_book }}
                    </span>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    <!-- /portfolio -->
    <section class="ads section">
    <div class="container">
        <div class="row align-items-center">
        <div class="col-lg-6 offset-lg-6">
            <div class="ads-content">
            <span class="h5 deal">Deal of the day 50% Off</span>
            <h2 class="mt-3 text-white">Trendy Suit</h2>
            <p class="text-md mt-3 text-white">Hurry up! Limited time offer.Grab ot now!</p>
            <!-- syo-timer -->
                <div id="simple-timer" class="syotimer mb-5"></div>
            <a href="#" class="btn btn-main"><i class="ti-bag mr-2"></i>Shop Now </a>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section class="section products-list">
    <div class="container">
        <div class="row">
        <div class="col-lg-4 col-sm-12 col-md-12">
            <img src="assets2/images/666.jpg" alt="Product big thumb"  class="img-fluid w-100">
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="widget-featured-entries mt-5 mt-lg-0">
            <h4 class="mb-4 pb-3">Best</h4>
                <div class="media mb-3" v-for="(book, index) in books.slice(0,6)" :key="index">
                <div  v-if="book.id%2 == 0">
                        <a class="featured-entry-thumb" :href="'/show/'+book.id">
                        <img :src="book.image_book" alt="Product thumb" width="64" class="img-fluid mr-3">
                    </a>
                    <div class="media-body">
                        <h6 class="featured-entry-title mb-0"><a :href="'/show/'+book.id">{{ book.name_book }}</a></h6>
                        <p class="featured-entry-meta">{{ book.year_book }}</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="widget-featured-entries mt-5 mt-lg-0">
            <h4 class="mb-4 pb-3" id="newbook">New Book</h4>
                <div class="media mb-3" v-for="(book, index) in books.slice(0,5)" :key="index">
                        <a class="featured-entry-thumb" :href="'/show/'+book.id">
                        <img :src="book.image_book" alt="Product thumb" width="64" class="img-fluid mr-3">
                    </a>
                    <div class="media-body">
                        <h6 class="featured-entry-title mb-0"><a :href="'/show/'+book.id">{{ book.name_book }}</a></h6>
                        <p class="featured-entry-meta">{{ book.year_book }}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section class="features border-top">
    <div class="container">
        <div class="row">
        <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="feature-block">
            <i class="tf-ion-android-bicycle"></i>
            <div class="content">
                <h5>Free Shipping</h5>
                <p>On all order over $39.00</p>
            </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="feature-block">
            <i class="tf-wallet"></i>
            <div class="content">
                <h5>30 Days Return</h5>
                <p>Money back Guarantee</p>
            </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="feature-block">
            <i class="tf-key"></i>
            <div class="content">
                <h5>Secure Checkout</h5>
                <p>100% Protected by paypal</p>
            </div>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="feature-block">
            <i class="tf-clock"></i>
            <div class="content">
                <h5>24/7 Support</h5>
                <p>All time customer support </p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

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
    import axios from 'axios'
    import { onMounted, ref } from 'vue'
    import "bootstrap/dist/css/bootstrap.min.css"
    import "jquery/dist/jquery.slim.min.js"
    import "popper.js/dist/umd/popper.min.js"
    import "bootstrap/dist/js/bootstrap.min.js"
    import "../../public/assets2/css/style.css"
    import "../../public/assets2/fonts/style.css"

    export default {
        name: 'IndexFront',
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
    }

</script>
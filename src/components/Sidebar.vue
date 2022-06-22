<template>
  <div class="sidebar" data-color="white" data-active-color="danger">
    <div class="logo">
      <a href="/" class="simple-text logo-mini">
        <div class="logo-image-small">
            <img src="assets/img/logo-small.png">
        </div>
          <!-- <p>CT</p> -->
        </a>
        <a href="/" class="simple-text logo-normal">
          Admin
          <!-- <div class="logo-image-big">
            <img src="assets/img/logo-big.png">
          </div> -->
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          <li>
            <a href="/admin">
              <i class="nc-icon nc-bank"></i>
              <p>Dashboard</p>
            </a>
          </li>
          <li>
            <a href="/admin-book">
              <i class="nc-icon nc-book-bookmark"></i>
              <p>Book</p>
            </a>
          </li>
          <li>
            <a href="/admin-user">
              <i class="nc-icon nc-single-02"></i>
              <p>User</p>
            </a>
          </li>
          <li class="active-pro">
            <a href="./upgrade.html">
              <i class="nc-icon nc-spaceship"></i>
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </div>
  </div>
    
</template>

<script>
   export default {
    name: 'indexFooter'
  };
</script>

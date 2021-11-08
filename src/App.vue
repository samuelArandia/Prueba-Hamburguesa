<template>
<header class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Home</a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/Burgers">Menu de Hamburguesas</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" href="#" to="/Nueva">Agregar nuevas hamburguesas</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  <router-view/>
</header>
</template>

<style>

</style>

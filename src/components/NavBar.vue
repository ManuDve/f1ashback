<template>
<nav class="navbar navbar-expand-md" role="navigation" >
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/logo.svg" alt="Logo F1ashback">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <!--  <span class="navbar-toggler-icon"></span> -->
     <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Inicio</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/calendario">Calendario</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/clasificaciones">Clasificaciones</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/notificacion">
            <font-awesome-icon class="icon d-none d-md-inline" :icon="['fas', 'bell']" />
            <div class="d-block  d-md-none">Notificación</div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
    
</nav>
</template>


<style scoped>

.icon {
  font-size: 1.2em;
}

img {
  min-height: 18px;
  width: auto;
  transition: var(--main-transition);
}

img:hover {
  transform: scale(1.1);
}

nav {
  background-color: var(--main-bg-dark);
  padding: 1em 2em;
}

.nav-link {
  font-size: .8rem;
  color: var(--main-color)
}
.router-link-active {
  color: var(--main-active)
}

.navbar-toggler {
  color: var(--main-color-dark);
  border: 2px solid var(--main-color-dark);
  box-shadow: none;
}

.navbar-toggler:focus {
  border: 2px solid var(--main-active);
  color: var(--main-active);
  box-shadow: none;
}


.navbar-toggler-icon { 
    background-image: url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27><path stroke=%27rgba%28213, 0, 0, 1%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/></svg>");
}
</style>

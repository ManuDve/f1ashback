<template>
    <main class="container mt-5">
        <img src="../assets/sbinalla.jpeg" alt="" class="mb-3">
        <div class="row justify-content-center">
            <div class="col-6">
                <h1 class="text-center">Error 404</h1>
            <router-link class="btn" to="/">Volver al Inicio</router-link>
            </div>
            
        </div>
    </main>
</template>

<style scoped>

img {
    display: block;
    margin: auto;
    max-width: 400px;
}
.btn {
    color: var(--main-color);
    margin: auto;
    width: 100%;
    border: 1px solid var(--main-color);
}

.btn:hover, .btn-focus {
    color:  var(--main-active);
    width: 100%;
    border: 1px solid var(--main-active);
}
</style>
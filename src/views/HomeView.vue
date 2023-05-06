<template>
  <main id="inicio">
      <a href="/calendario">
        <font-awesome-icon :icon="['fas', 'calendar-days']" />
        Calendario
      </a>
      <a href="/clasificaciones">
        <font-awesome-icon :icon="['fas', 'ranking-star']" />
        Clasificaciones
      </a>
  </main>
</template>

<style scoped>
  #inicio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
    height: calc(100vh - 56px);
    width: 100%;
    background: url('../assets/portada.jpg') no-repeat fixed center;
    background-size: cover;
  }

  #inicio a {
    box-sizing: border-box;
    text-align: center;
    border: 1px solid var(--main-color);
    border-radius: 5px;
    padding: 2em;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.303);
    animation: fadeInTop calc(var(--main-transition)*2) var(--main-transition) backwards;
    cursor: pointer;
    transition: var(--main-transition)
  }

  #inicio a:hover {
    border: 1px solid var(--main-active);
  }

</style>
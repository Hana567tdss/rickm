<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>'

<template>
 <div  class="flex justify-end bg-sky-400 gap-5 text-sky-800 font-medium  nav ">

      
   
      <div><RouterLink to="/">Rick And Morty</RouterLink> </div>  
      <div class=""><RouterLink to="/episode/1">episode-I</RouterLink>  </div>
      <div class=""><RouterLink to="/location/1">location-I</RouterLink></div>
      <div class="mr-4"><RouterLink to="/character/1">character-I</RouterLink></div>
      
    </div>

  <RouterView />
</template>

<style scoped>


nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

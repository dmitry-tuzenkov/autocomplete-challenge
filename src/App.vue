<template>
  <div class="flex justify-center w-full">
    <div class="flex flex-col w-3/5">

      <h1 class="text-2xl py-5">
        <img class="w-10 h-10 inline" alt="Vue logo" src="./assets/logo.png" /> Welcome to books and cities search
      </h1>

      <BooksAutoComplete />

      <CitiesSearch />

    </div>

  </div>

</template>

<script>
import BooksAutoComplete from '@/components/BooksAutoComplete.vue'
import CitiesSearch from '@/components/CitiesSearch.vue'

export default {
  name: 'App',
  components: {
    BooksAutoComplete,
    CitiesSearch,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>

<template>
  <ol class="col-sm-6">
    <li v-for="movie in list">
      <img height="80" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="">
      <p>{{movie.title}}</p>
      <button @click="handleButtonClick(movie)">{{buttonText}}</button>
    </li>
  </ol>
</template>

<script>
  export default {
    name: 'movies-list',
    props: {
      list: {
        type: Array,
        required: true
      },
      buttonText: {
        type: String,
        required: true
      },
      handleButtonClick: {
        type: Function,
        required: true
      }
    }
  }

</script>

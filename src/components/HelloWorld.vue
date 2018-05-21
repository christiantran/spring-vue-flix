<template>
  <div class="hello">

    <div class="searchbar">
      <form @submit.prevent="findMovies">
        <input type="text" v-model="query">
      </form>
    </div>
    <div class="movies-section">

      <div class="results">
        <h4>Results for {{title}}:</h4>
        <div class="row">
          <movies :list="movies" button-text="Add to watchlist" :handle-button-click="addMovie"></movies>
        </div>
      </div>
      <hr>
      <div class="watchlist">
        <div class="row">
          <movies :list="watchlist" button-text="Remove from watchlist" :handle-button-click="removeMovie"></movies>
        </div>
      </div>
    </div>

    <div class="detailed-view">
      details here
    </div>

  </div>
</template>

<script>
  import movies from './movies.vue'

  export default {
    name: 'HelloWorld',
    components: {
      movies
    },
    data() {
      return {
        query: '',
        title: ''
      }
    },
    computed: {
      movies() {
        return this.$store.state.movies
      },
      watchlist() {
        return this.$store.state.watchlist
      },
      activeMovie() {
        return this.$store.state.activeMovie
      }
    },
    methods: {
      findMovies() {
        this.$store.dispatch('findMovies', this.query)
        this.title = this.query
        this.query = ''
      },
      addMovie(movie) {
        this.$store.dispatch('addMovie', movie)
      },
      removeMovie(movie) {
        this.$store.dispatch('removeMovie', movie)
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .movies-section {
    display: grid;
    grid-template-areas: "results watchlist"
  }

  .results {
    grid-area: results
  }

  .watchlist {
    grid-area: watchlist
  }

</style>

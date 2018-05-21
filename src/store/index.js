import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
  timeout: 3000
})

vue.use(vuex)


export default new vuex.Store({
  state: {
    movies: [],
    watchlist: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    addMovie(state, movie) {
      state.watchlist.push(movie)
    },
    removeMovie(state, indexToRemove) {
      state.watchlist.splice(indexToRemove, 1)
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie
    }
  },
  actions: {
    addMovie({
      dispatch,
      commit,
      state
    }, movie) {
      if (state.watchlist.find(m => m.id == movie.id)) {
        return dispatch('showNotification', {
          type: 'error',
          message: 'That movie is already in your list'
        })
      }
      commit('addMovie', movie)
    },
    showNotification({
      commit
    }, notification) {
      console.log(notification)
    },
    findMovies({
      commit,
      dispatch
    }, query) {
      api.get(query)
        .then(res => {
          commit('setMovies', res.data.results)
        }).catch(err => dispatch('showNotification', err))
    }
  }
})

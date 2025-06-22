import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useShowsStore = defineStore('shows', () => {
  // Listas reactivas
  const watchlist = ref([])
  const watched = ref([])
  const favorites = ref([])

  // Métodos para agregar elementos
  const addToWatchlist = (show) => {
    if (!watchlist.value.find(s => s.title === show.title)) {
      watchlist.value.push(show)
    }
  }

  const addToWatched = (show) => {
    if (!watched.value.find(s => s.title === show.title)) {
      watched.value.push(show)
    }
  }

  const addToFavorites = (show) => {
    if (!favorites.value.find(s => s.title === show.title)) {
      favorites.value.push(show)
    }
  }

  // Métodos para eliminar elementos
  const removeFromWatchlist = (title) => {
    watchlist.value = watchlist.value.filter(s => s.title !== title)
  }

  const removeFromWatched = (title) => {
    watched.value = watched.value.filter(s => s.title !== title)
  }

  const removeFromFavorites = (title) => {
    favorites.value = favorites.value.filter(s => s.title !== title)
  }

  return {
    watchlist,
    watched,
    favorites,
    addToWatchlist,
    addToWatched,
    addToFavorites,
    removeFromWatchlist,
    removeFromWatched,
    removeFromFavorites,
  }
})

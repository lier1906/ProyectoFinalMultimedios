// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Watchlist from '../views/WatchlistView.vue'
import Watched from '../views/WatchedView.vue'
import Favorites from '../views/FavoritesView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/watchlist', name: 'Watchlist', component: Watchlist },
  { path: '/watched', name: 'Watched', component: Watched },
  { path: '/favorites', name: 'Favorites', component: Favorites },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

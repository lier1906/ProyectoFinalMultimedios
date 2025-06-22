<template>
  <div>
    <h1>Watchlist</h1>
    <div v-if="watchlist.length === 0">No hay series en la lista.</div>
    <div class="my-shows-grid">
      <div class="grid-item" v-for="item in watchlist" :key="item.title">
        <img class="grid-poster" :src="item.img" :alt="item.title" />
        <h3 class="grid-title">{{ item.title }}</h3>
        <p class="grid-year">{{ item.year }}</p>
        <button @click="remove(item.title)">Quitar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useShowsStore } from '@/stores/useShowsStore'
const store = useShowsStore()
const watchlist = store.watchlist
const remove = store.removeFromWatchlist
</script>

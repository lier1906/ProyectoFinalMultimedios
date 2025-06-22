<template>
  <div>
    <h1>Favorites</h1>
    <div v-if="favorites.length === 0">No hay favoritos aún.</div>
    <div class="my-shows-grid">
      <div class="grid-item" v-for="item in favorites" :key="item.title">
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
const favorites = store.favorites
const remove = store.removeFromFavorites
</script>
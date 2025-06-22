<template>
  <div>
    <h1>Watched</h1>
    <div v-if="watched.length === 0">No hay series vistas.</div>
    <div class="my-shows-grid">
      <div class="grid-item" v-for="item in watched" :key="item.title">
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
const watched = store.watched
const remove = store.removeFromWatched
</script>
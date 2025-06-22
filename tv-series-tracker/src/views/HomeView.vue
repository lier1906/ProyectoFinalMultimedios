<template>
  <div>
    <h1>Home</h1>
    <p>Explora series populares y agrégalas a tus listas.</p>

    <ul>
      <li v-for="serie in popularSeries" :key="serie.id">
        {{ serie.name || serie.seriesName || 'Sin nombre' }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getPopularSeries } from '@/services/tvdbService'

const popularSeries = ref([])

onMounted(async () => {
  try {
    const data = await getPopularSeries()
    console.log("✅ Series populares:", data)
    popularSeries.value = data
  } catch (error) {
    console.error("❌ Error al obtener series:", error)
  }
})
</script>

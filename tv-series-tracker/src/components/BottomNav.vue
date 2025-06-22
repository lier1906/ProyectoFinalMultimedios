<template>
  <nav class="bottom-nav">
    <RouterLink to="/" class="nav-item" :class="{ active: isActive('/') }">
      <div class="nav-icon">🏠</div>
      <span>Home</span>
    </RouterLink>

    <RouterLink to="/watchlist" class="nav-item" :class="{ active: isActive('/watchlist') }">
      <div class="nav-icon">📋</div>
      <span>Watchlist</span>
    </RouterLink>

    <RouterLink to="/watched" class="nav-item" :class="{ active: isActive('/watched') }">
      <div class="nav-icon">✅</div>
      <span>Watched</span>
    </RouterLink>

    <RouterLink to="/favorites" class="nav-item" :class="{ active: isActive('/favorites') }">
      <div class="nav-icon">★</div>
      <span>Favorites</span>
    </RouterLink>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isActive = (path) => route.path === path
</script>

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #202020;
  padding: 12px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #333;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #888;
  font-size: 12px;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-item:hover {
  color: #ccc;
}

.nav-item.active {
  color: #fff;
}

.nav-icon {
  font-size: 20px;
  margin-bottom: 4px;
}
</style>

<template>
  <div class="container">
    <!-- Barra de búsqueda -->
    <div class="search-bar">
      <div class="search-container">
        <div class="search-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="Search" @click="toggleSearchExpanded">
          <div class="profile-icon">
            <img src="https://via.placeholder.com/32" alt="Profile">
          </div>
        </div>
      </div>
    </div>

    <!-- Recommended movies -->
    <div class="section-header">
      <h2 class="section-title">Recommended movies</h2>
      <span class="see-all">→</span>
    </div>
    <div class="content-grid">
      <div class="content-item" v-for="movie in movies" :key="movie.title">
        <span class="rating">{{ movie.rating }}</span>
        <img class="content-poster" :src="movie.img" :alt="movie.title">
        <h3 class="content-title">{{ movie.title }}</h3>
      </div>
    </div>

    <!-- Popular TV series -->
    <div class="section-header" id="tv-series-header">
      <h2 class="section-title">Popular TV series</h2>
      <span class="see-all">→</span>
    </div>
    <div class="content-grid">
      <div class="content-item" v-for="series in tvSeries" :key="series.title">
        <span class="rating">{{ series.rating }}</span>
        <img class="content-poster" :src="series.img" :alt="series.title">
        <h3 class="content-title">{{ series.title }}</h3>
        <p class="content-year">{{ series.year }}</p>
      </div>
    </div>

    <!-- Vista expandida de búsqueda -->
    <div id="searchExpanded" class="search-expanded">
      <div class="search-expanded-header">
        <div class="header-left">
          <button class="back-button" @click="toggleSearchExpanded">←</button>
          <span class="expanded-title">Search shows</span>
        </div>
        <button class="filter-button">≡</button>
      </div>

      <div class="tabs-container">
        <div class="tab-left active">
          <span class="tab-icon">📺</span>
          <span>TV series</span>
        </div>
        <div class="tab-right">
          <span class="tab-icon">🎬</span>
          <span>Movies</span>
        </div>
      </div>

      <div class="search-results-header">
        <span class="show-count">45K shows</span>
        <span class="selection-mode">≡ Selection mode</span>
      </div>

      <div class="my-shows-grid">
        <div class="grid-item" v-for="item in myShows" :key="item.title">
          <span v-if="item.badge" class="badge" :class="item.badgeClass">
            <span class="eye-icon">{{ item.badge }}</span>
          </span>
          <img class="grid-poster" :src="item.img" :alt="item.title">
          <h3 class="grid-title">{{ item.title }}</h3>
          <p class="grid-year">{{ item.year }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Navigation -->
  <BottomNav />
</template>

<script setup>
import { ref } from 'vue'
import BottomNav from './components/BottomNav.vue'

const movies = [
  { title: 'INFINITY WAR', rating: '8.2', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg' },
  { title: 'Beekeeper', rating: '7.3', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9eDQv0tnsrJWmqKmKLdxGxp10b7.jpg' },
  { title: 'Flash', rating: '7.8', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg' },
  { title: 'John Wick 4', rating: '8.4', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg' },
  { title: 'Knock at the cabin', rating: '7.5', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg' },
  { title: 'Knights of the Zodiac', rating: '7.9', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg' }
]

const tvSeries = [
  { title: 'House of the dragon', rating: '8.6', year: '2022', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg' },
  { title: 'La casa de papel', rating: '8.2', year: '2017', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/4lYoeY8Ukux2EIL18izTeoW8m6P.jpg' },
  { title: 'The Vampire Diaries', rating: '8.3', year: '2009', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/p9u9WyM6py2SczyxvH7DVDfVszo.jpg' },
  { title: 'The last of us', rating: '8.5', year: '2023', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/tNQWO6cNzQYCyvw36mUcAQQyf5F.jpg' },
  { title: 'Breaking Bad', rating: '8.7', year: '2008', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
  { title: 'Dark', rating: '8.3', year: '2017', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/5LoHuHWA4H8jElFlZDvsmU2n63b.jpg' }
]

const myShows = [
  { title: 'House of the dragon', year: '2022', img: 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/z2yahl2uefxDCl0nogcRBstwruJ.jpg', badge: '👁️', badgeClass: 'blue' },
  { title: 'The resident', year: '2018', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2IkYQJlT26yXef2iot7dhRtavSC.jpg' },
  { title: 'Arrow', year: '2012', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/u8ZHFj1jC384JEkTt3vNg1DfWEb.jpg', badge: '+', badgeClass: 'green' },
  { title: 'Suits', year: '2011', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/u8ZHFj1jC384JEkTt3vNg1DfWEb.jpg' },
  { title: 'S.W.A.T', year: '2017', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1rTEcLsnOoKXfDdGlbg0RHDvoaE.jpg', badge: '★', badgeClass: 'yellow' },
  { title: 'House', year: '2004', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/lW7MvZ4m49IUj2UrUu4z0xVVl81.jpg', badge: '❌', badgeClass: 'red' },
  { title: 'Dexter', year: '2006', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/q8dWfc4JwQuv3HayIZeO84jAXED.jpg', badge: '🔍', badgeClass: 'purple' },
  { title: 'PrisonBreak', year: '2005', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/oqy7vnLWIFwoKBimCQfJHoVRYTS.jpg' },
  { title: 'The Last of Us', year: '2023', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/tNQWO6cNzQYCyvw36mUcAQQyf5F.jpg' }
]

function toggleSearchExpanded() {
  const el = document.getElementById('searchExpanded')
  if (el) {
    el.style.display = (el.style.display === 'block') ? 'none' : 'block'
    window.scrollTo(0, 0)
  }
}
</script>

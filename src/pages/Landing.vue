<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
    <!-- Navbar -->
    <nav class="flex justify-between items-center p-4">
      <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
        TruthDare
      </h1>
      <router-link
        to="/login"
        class="px-4 py-2 border rounded-full hover:shadow-md transition"
      >
        Login 🔑
      </router-link>
    </nav>

    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center text-center mt-20 px-4">
      <h2
        class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"
      >
        Play Truth or Dare Anonymously 🎭
      </h2>
      <p class="text-gray-500 mt-4 max-w-xl">
        Send dares & truths to your friends without revealing yourself.
      </p>

     
       <button
        @click="proceed"
        class="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xl font-bold shadow-lg hover:scale-105 transition transform animate-pulse"
      >
      🚀 Start Game
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const nicknameInput = ref('')
const route = useRoute()
const router = useRouter()

const proceed = () => {
  
  const username = route.params.username
  router.push(`/u/${username}/nickname`)
}

</script>

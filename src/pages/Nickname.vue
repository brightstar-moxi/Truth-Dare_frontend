<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
      <h1 class="text-2xl font-bold">🎭 Choose a Nickname</h1>
      <p class="text-gray-600 mt-2">Enter any nickname, but don’t worry — it will stay anonymous 😉</p>

      <input
        v-model="nicknameInput"
        type="text"
        placeholder="Enter a nickname"
        class="mt-4 w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        @click="proceed"
        class="w-full mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Continue ➡️
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
  // Force nickname to always be "Anonymous" no matter what user types
  localStorage.setItem('nickname', 'Anonymous')

  const username = route.params.username
  router.push(`/u/${username}/submit`)
}
</script>

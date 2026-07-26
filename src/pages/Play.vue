<template>
  <div class="min-h-screen bg-[#08081b] flex items-center justify-center px-6">

    <div
      class="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center">

      <div
        class="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-pink-500 flex items-center justify-center text-5xl">

        🎮

      </div>

      <h1 class="text-5xl font-bold text-white mt-8">
        Ready to Play?
      </h1>

      <p class="text-gray-400 mt-4 text-lg">
        Send an anonymous Truth or Dare to your friend.
      </p>

      <button
        @click="startGame"
        class="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xl font-bold shadow-lg hover:scale-105 transition">

        🚀 Start Game

      </button>

    </div>

  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const startGame = () => {
  router.push(`/u/${route.params.username}/nickname`);
};
</script>
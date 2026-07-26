<template>
  <div
    class="min-h-screen bg-[#070414] relative overflow-hidden flex items-center justify-center px-6"
  >
    <!-- Background Glow -->
    <div class="absolute top-20 left-16 text-yellow-300 text-2xl animate-pulse">
  ✦
</div>

<div class="absolute top-40 right-24 text-pink-400 text-3xl animate-pulse">
  ✦
</div>

<div class="absolute bottom-32 left-24 text-cyan-400 text-xl animate-pulse">
  ✦
</div>

<div class="absolute bottom-20 right-20 text-violet-400 text-2xl animate-pulse">
  ✦
</div>
    <div class="absolute top-32 right-40 w-4 h-4 rounded-full border-2 border-pink-500"></div>

<div class="absolute bottom-44 left-32 w-6 h-6 rounded-full border-2 border-cyan-400"></div>

<div class="absolute top-60 left-10 w-3 h-3 bg-pink-500 rounded-full"></div>
<div
  class="absolute -bottom-16 -left-12 w-48 h-48 rounded-full bg-violet-500/20 blur-3xl">
</div>

<div
  class="absolute -bottom-12 right-0 w-40 h-40 rounded-full bg-pink-500/20 blur-3xl">
</div>

    <div
      class="absolute w-96 h-96 bg-pink-500/20 blur-[150px] rounded-full -bottom-24 -right-24"
    ></div>
    <div
      class="absolute w-80 h-80 bg-blue-500/20 blur-[150px] rounded-full -top-20 -left-20"
    ></div>

    <!-- Card -->
    <div
  class="game-card relative z-10 w-full  relative z-10 w-full max-w-2xl overflow-hidden
  rounded-[40px]
  border border-white/10
  bg-[#15112A]/80
  backdrop-blur-3xl
  px-14 py-16
  shadow-[0_20px_80px_rgba(0,0,0,.6)]"
>

  <!-- Top Glow -->
  <div
    class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500">
  </div>

  <!-- Left Glow -->
  <div
    class="absolute -left-24 top-24 w-60 h-60 rounded-full bg-blue-500/20 blur-[120px]">
  </div>

  <!-- Right Glow -->
  <div
    class="absolute -right-24 bottom-16 w-60 h-60 rounded-full bg-pink-500/20 blur-[120px]">
  </div>
      <!-- Controller -->
      <div class="flex justify-center relative mb-10">
  <img
    src="/controller.png"
    alt="Controller"
    class="w-56 drop-shadow-[0_0_60px_#a855f7] animate-float"
  />

  <div class="absolute -left-6 top-8 text-pink-500 text-4xl">⚡</div>

  <div class="absolute -right-6 top-2 text-pink-400 text-4xl">💬</div>

  <div class="absolute left-1/2 -bottom-4 w-40 h-6 bg-pink-500/40 blur-2xl rounded-full -translate-x-1/2"></div>
</div>

      <!-- Heading -->
  <h1 class="mt-10 text-center leading-none">

  <span class="block text-6xl font-black text-white">
    Create Your
  </span>

  <span
    class="block mt-3 text-6xl font-black bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-500 bg-clip-text text-transparent">

    Nickname

  </span>

</h1>

     

     <p class="mt-8 text-center text-xl text-gray-300 leading-8 max-w-lg mx-auto">
  Pick any nickname you like.
  Your real identity will
  <span class="text-pink-400 font-bold">
    never
  </span>
  be revealed.
</p>

      <!-- Label -->
    <div class="mt-10">

<label
class="block mb-3 text-white font-semibold">

Nickname

</label>

<input

v-model="nicknameInput"

placeholder="Enter nickname..."

class="w-full
h-14
rounded-2xl
bg-[#1D1837]
border border-white/10
px-6
text-white
placeholder:text-gray-500
outline-none
focus:border-violet-500
transition"

/>

</div>

      <!-- Random -->
      <button
        @click="randomNickname"
        class="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-white text-lg font-semibold hover:bg-white/10 transition"
      >
        🎲 Generate Random Nickname
      </button>

      <!-- Continue -->
      <button
        @click="proceed"
       class="mt-8
w-full
h-14
rounded-2xl
font-bold
text-lg
text-white
bg-gradient-to-r
from-cyan-500
via-violet-500
to-pink-500
shadow-[0_0_40px_rgba(168,85,247,.6)]
hover:shadow-[0_0_70px_rgba(168,85,247,.9)]
hover:scale-105
transition-all
duration-300"
      >
        🚀 Continue
      </button>

      <!-- Privacy -->
      <div
        class="mt-8 rounded-2xl border border-green-500/20 bg-green-500/5 p-5"
      >
        <h3 class="text-green-400 text-xl font-bold">
          🛡️ 100% Anonymous
        </h3>

        <p class="mt-2 text-gray-400">
          We don't store or reveal your identity to your friend.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }
}

@keyframes cardFloat {
  0%,100%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-8px);
  }
}

.animate-float{
  animation:float 3s ease-in-out infinite;
}

.game-card{
  animation:cardFloat 5s ease-in-out infinite;
}
</style>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const nicknameInput = ref("");
const route = useRoute();
const router = useRouter();

const names = [
  "Shadow",
  "Ghost",
  "BlueFox",
  "CyberKid",
  "NightWolf",
  "DarkKnight",
  "Mystic",
  "SilentOne",
  "Unknown",
  "Phantom",
];

const randomNickname = () => {
  nicknameInput.value =
    names[Math.floor(Math.random() * names.length)];
};

const proceed = () => {
  localStorage.setItem(
    "nickname",
    nicknameInput.value.trim() || "Anonymous"
  );

  router.push(`/u/${route.params.username}/submit`);
};
</script>
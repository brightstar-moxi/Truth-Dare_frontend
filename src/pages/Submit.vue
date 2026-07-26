<template>
  <div class="min-h-screen bg-[#070414] flex items-center justify-center px-6 relative overflow-hidden">

    <!-- Background -->
    <div class="absolute w-96 h-96 bg-cyan-500/20 blur-[140px] rounded-full -top-20 -left-20"></div>
    <div class="absolute w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full -bottom-20 -right-20"></div>

    <div class="relative w-full max-w-xl rounded-[35px] bg-[#151128]/90 border border-white/10 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,.6)]">

      <!-- Heading -->
      <div class="text-center">

        <div
          class="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(168,85,247,.5)]">
          🎭
        </div>

        <h1 class="mt-6 text-4xl font-black text-white">
          Send Anonymous
        </h1>

        <h2
          class="text-4xl font-black bg-gradient-to-r from-cyan-300 via-violet-400 to-pink-500 bg-clip-text text-transparent">
          Truth or Dare
        </h2>

        <p class="mt-4 text-gray-400">
          Choose what you want to send.
        </p>

      </div>

      <!-- Truth / Dare -->
      <div class="grid grid-cols-2 gap-5 mt-10">

        <div
          @click="type='truth'"
          :class="[
            'cursor-pointer rounded-3xl p-6 transition duration-300 border',
            type==='truth'
              ?'bg-gradient-to-br from-cyan-500/30 to-blue-600/20 border-cyan-400 shadow-[0_0_35px_rgba(59,130,246,.5)]'
              :'bg-[#1D1837] border-white/10'
          ]">

          <div class="text-5xl">
            😈
          </div>

          <h3 class="mt-4 text-2xl font-bold text-white">
            Truth
          </h3>

        </div>

        <div
          @click="type='dare'"
          :class="[
            'cursor-pointer rounded-3xl p-6 transition duration-300 border',
            type==='dare'
              ?'bg-gradient-to-br from-pink-500/30 to-violet-600/20 border-pink-400 shadow-[0_0_35px_rgba(236,72,153,.5)]'
              :'bg-[#1D1837] border-white/10'
          ]">

          <div class="text-5xl">
            🔥
          </div>

          <h3 class="mt-4 text-2xl font-bold text-white">
            Dare
          </h3>

        </div>

      </div>

      <!-- Message -->
      <div class="mt-10">

        <label class="text-white font-semibold">
          💬 Your Message
        </label>

        <textarea
          v-model="content"
          maxlength="300"
          rows="5"
          placeholder="Type your Truth or Dare..."
          class="mt-4 w-full rounded-3xl bg-[#1D1837] border border-white/10 p-5 text-white placeholder:text-gray-500 outline-none resize-none focus:border-violet-500"
        ></textarea>

        <div class="mt-2 text-right text-gray-500">
          {{ content.length }}/300
        </div>

      </div>

      <!-- Submit -->
      <button
        @click="submit"
        :disabled="loading"
        class="mt-8 w-full h-14 rounded-3xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white text-lg font-bold hover:scale-105 transition disabled:opacity-60">

        <span
          v-if="loading"
          class="flex items-center justify-center gap-3">

          <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="white" stroke-width="3" opacity=".3"/>
            <path d="M22 12a10 10 0 0 1-10 10" stroke="white" stroke-width="3"/>
          </svg>

          Sending...

        </span>

        <span v-else>
          🚀 Send Anonymously
        </span>

      </button>

      <!-- Privacy -->
      <div class="mt-8 rounded-3xl bg-[#1D1837] border border-cyan-500/20 p-5">

        <h3 class="text-cyan-400 font-bold text-lg">
          🔒 100% Anonymous
        </h3>

        <p class="text-gray-400 mt-2">
          Your identity will never be revealed to your friend.
        </p>

      </div>

    </div>

  </div>
</template>

    

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../plugins/axios'
import Swal from "sweetalert2";

const loading = ref(false);

const route = useRoute()
const router = useRouter()
const type = ref('')
const content = ref('')

const submit = async () => {
  if (!type.value || !content.value) {
    Swal.fire({
      icon: "warning",
      title: "Incomplete",
      text: "Please choose Truth/Dare and write your message.",
      background: "#16112b",
      color: "#fff",
      confirmButtonColor: "#8b5cf6",
    });

    return;
  }

  loading.value = true;

  try {
    const nickname =
      localStorage.getItem("nickname") || "Anonymous";

    await api.post("/submit", {
      username: route.params.username,
      type: type.value,
      content: content.value,
      nickname,
    });

    loading.value = false;

    await Swal.fire({
      icon: "success",
      title: "Message Sent 🎉",
      text: "Your identity remains anonymous.",
      background: "#16112b",
      color: "#fff",
      confirmButtonColor: "#8b5cf6",
    });

    content.value = "";
    type.value = "";

    localStorage.removeItem("nickname");

    router.push("/");
  } catch (err) {
    loading.value = false;

    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Unable to send your message.",
      background: "#16112b",
      color: "#fff",
      confirmButtonColor: "#ef4444",
    });

    console.error(err);
  }
};

 
</script>

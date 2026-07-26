<template>
  <div class="min-h-screen bg-[#070414] flex items-center justify-center px-6 relative overflow-hidden">

    <!-- Background -->
    <div class="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full -top-20 -left-20"></div>
    <div class="absolute w-96 h-96 bg-pink-500/20 blur-[150px] rounded-full -bottom-20 -right-20"></div>

    <!-- Card -->
    <div
      class="relative z-10 w-full max-w-md rounded-[32px] bg-[#151128]/90 border border-white/10 backdrop-blur-xl p-8 shadow-[0_20px_80px_rgba(0,0,0,.6)]">

      <!-- Logo -->
      <div class="flex justify-center">
        <div
          class="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 flex items-center justify-center text-4xl shadow-[0_0_40px_rgba(168,85,247,.5)]">
          🎮
        </div>
      </div>

      <!-- Heading -->
      <h1 class="mt-6 text-center text-4xl font-black text-white">
        Create Account
      </h1>

      <p class="mt-3 text-center text-gray-400">
        Join the game and start receiving anonymous Truth & Dare messages.
      </p>

      <!-- Form -->
      <form @submit.prevent="registerUser" class="mt-8 space-y-5">

        <!-- Username -->
        <div>
          <label class="text-gray-300 text-sm font-medium">
            Username
          </label>

          <input
            v-model="username"
            type="text"
            placeholder="Enter username"
            class="mt-2 w-full rounded-2xl bg-[#1D1837] border border-white/10 px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition"
            required
          />
        </div>

        <!-- Email -->
        <div>
          <label class="text-gray-300 text-sm font-medium">
            Email
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="Enter email"
            class="mt-2 w-full rounded-2xl bg-[#1D1837] border border-white/10 px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label class="text-gray-300 text-sm font-medium">
            Password
          </label>

         <div class="relative mt-2">
  <input
    v-model="password"
    :type="showPassword ? 'text' : 'password'"
    placeholder="Enter password"
    class="w-full rounded-2xl bg-[#1D1837] border border-white/10 px-5 py-4 pr-14 text-white placeholder-gray-500 outline-none focus:border-cyan-400 transition"
    required
  />

  <button
    type="button"
    @click="showPassword = !showPassword"
    class="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
  >
    {{ showPassword ? "🙈" : "👁️" }}
  </button>
</div>
        </div>

        <!-- Register Button -->
      <button
  type="submit"
  :disabled="loading"
  class="w-full h-14 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 text-white font-bold text-lg hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_35px_rgba(168,85,247,.45)]"
>
  <span
    v-if="loading"
    class="flex justify-center items-center gap-3"
  >
    <svg
      class="animate-spin h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="white"
        stroke-width="3"
        opacity=".3"
      />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke="white"
        stroke-width="3"
      />
    </svg>

    Creating Account...
  </span>

  <span v-else>
    🚀 Create Account
  </span>
</button>

      </form>

      <!-- Divider -->
      <div class="flex items-center my-8">
        <div class="flex-1 h-px bg-white/10"></div>
        <span class="px-4 text-gray-500 text-sm">OR</span>
        <div class="flex-1 h-px bg-white/10"></div>
      </div>

      <!-- Login -->
      <RouterLink
        to="/login"
        class="block text-center w-full rounded-2xl border border-white/10 bg-white/5 py-4 text-white font-semibold hover:bg-white/10 transition">

        Already have an account? Login →

      </RouterLink>

    </div>

  </div>
</template>


<script setup>
import { ref } from "vue";
import api from "../plugins/axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";

const router = useRouter();

const username = ref("");
const email = ref("");
const password = ref("");

const loading = ref(false);
const showPassword = ref(false);

const celebrate = () => {
  confetti({
    particleCount: 250,
    spread: 180,
    startVelocity: 35,
    origin: { x: 0.5, y: 0 },
  });

  confetti({
    particleCount: 120,
    spread: 360,
    gravity: 0.3,
    scalar: 0.9,
    ticks: 250,
    shapes: ["star"],
    colors: [
      "#06b6d4",
      "#8b5cf6",
      "#ec4899",
      "#ffffff",
      "#FFD700",
    ],
    origin: { x: 0.5, y: 0.2 },
  });
};

const registerUser = async () => {
  loading.value = true;

  try {
    const { data } = await api.post("/auth/register", {
      username: username.value,
      email: email.value,
      password: password.value,
    });

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);

    celebrate();

    await Swal.fire({
      icon: "success",
      title: "Welcome 🎉",
      text: "Your account has been created successfully!",
      background: "#151128",
      color: "#fff",
      confirmButtonColor: "#8b5cf6",
    });

    router.push("/dashboard");
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Registration Failed",
      text: err.response?.data?.message || "Something went wrong.",
      background: "#151128",
      color: "#fff",
      confirmButtonColor: "#ef4444",
    });
  } finally {
    loading.value = false;
  }
};

</script>

<template>
  <div class="min-h-screen bg-[#070414] relative overflow-hidden">

    <!-- Background -->
    <div class="absolute w-96 h-96 bg-cyan-500/20 blur-[160px] rounded-full -top-20 -left-20"></div>
    <div class="absolute w-96 h-96 bg-pink-500/20 blur-[160px] rounded-full -bottom-20 -right-20"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 py-12">

      <!-- Welcome -->
      <div class="text-center mb-10">

        <div
          class="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 flex items-center justify-center text-4xl font-bold text-white shadow-[0_0_50px_rgba(168,85,247,.5)]">

          {{ user?.username.charAt(0).toUpperCase() }}

        </div>

        <h1 class="mt-6 text-5xl font-black text-white">
          Welcome,
          <span
            class="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">

            {{ user?.username }}

          </span>
        </h1>

        <p class="mt-3 text-gray-400">
          {{ user?.email }}
        </p>

      </div>

      <!-- Cards -->
      <div class="grid lg:grid-cols-3 gap-8">

        <!-- Share Link -->
        <div
          class="lg:col-span-2 rounded-3xl bg-[#151128]/80 border border-white/10 backdrop-blur-xl p-8">

          <h2 class="text-2xl font-bold text-white">
            🔗 Your Share Link
          </h2>

          <p class="text-gray-400 mt-2">
            Share this link with your friends.
          </p>

          <div
            class="mt-6 rounded-2xl bg-[#1D1837] border border-white/10 p-5 flex justify-between items-center">

            <span class="text-cyan-400 truncate">
              {{ fullShareLink }}
            </span>

            <button
              @click="copyLink"
              class="ml-5 rounded-xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 px-6 py-3 text-white font-semibold hover:scale-105 transition">

              Copy

            </button>

          </div>

        </div>

        <!-- Quick Stats -->
        <div
          class="rounded-3xl bg-[#151128]/80 border border-white/10 backdrop-blur-xl p-8">

          <h2 class="text-xl font-bold text-white">
            📊 Stats
          </h2>

          <div class="mt-6 space-y-5">

            <div class="rounded-2xl bg-[#1D1837] p-5">

              <p class="text-gray-400">
                Inbox
              </p>

              <h3 class="text-4xl font-black text-cyan-400">
                --
              </h3>

            </div>

            <div class="rounded-2xl bg-[#1D1837] p-5">

              <p class="text-gray-400">
                Profile Status
              </p>

              <h3 class="text-green-400 font-bold">
                Active
              </h3>

            </div>

          </div>

        </div>

      </div>

      <!-- Buttons -->
      <div class="grid md:grid-cols-2 gap-6 mt-10">

        <RouterLink
          to="/inbox"
          class="rounded-3xl bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500 py-6 text-center text-white text-xl font-bold hover:scale-105 transition shadow-[0_0_40px_rgba(168,85,247,.4)]">

          📥 Open Inbox

        </RouterLink>

        <button
          @click="logout"
          class="rounded-3xl bg-red-500 py-6 text-xl text-white font-bold hover:bg-red-600 transition">

          🚪 Logout

        </button>

      </div>

    </div>

  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue'
import api from '../plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(null)

onMounted(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  } else {
    router.push('/login') // redirect if not logged in
  }
})

const fullShareLink = computed(() => {
  return user.value ? `${window.location.origin}/u/${user.value.username}` : ''
})

const copyLink = async () => {
  if (fullShareLink.value) {
    await navigator.clipboard.writeText(fullShareLink.value)
    alert('Copied ✅')
  }
}


const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  router.push("/login");
};


</script>

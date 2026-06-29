<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
      <h1 class="text-2xl font-bold text-center">Welcome, {{ user?.username }} 🎉</h1>
      <p class="mt-2 text-center text-gray-600">Email: {{ user?.email }}</p>

      <div class="mt-6 bg-gray-100 p-4 rounded-lg text-center">
        <p class="font-medium">Your Anonymous Share Link:</p>
        <div class="flex items-center justify-between mt-2 bg-white border rounded-lg px-3 py-2">
          <span class="text-blue-600 truncate">{{ fullShareLink }}</span>
          <button
            @click="copyLink"
            class="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Copy
          </button>
        </div>
      </div>

      <!-- Inbox button -->
      <router-link
        to="/inbox"
        class="w-full mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-center hover:bg-blue-600 block"
      >
        📥 Go to Inbox
      </router-link>

      <!-- Logout button -->
      <button
        @click="logout"
        class="w-full mt-4 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
      >
        🚪 Logout
      </button>
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

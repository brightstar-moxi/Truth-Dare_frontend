<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center">Login</h1>

      <form @submit.prevent="loginUser" class="mt-6">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full border p-3 rounded mb-4"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full border p-3 rounded mb-4"
          required
        />
        <button
          type="submit"
          class="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <p class="mt-4 text-center text-sm">
        Don’t have an account?
        <router-link to="/register" class="text-blue-500">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const loginUser = async () => {
  try {
    const { data } = await api.post('/auth/login', {
      email: email.value,
      password: password.value,
    })

    // ✅ save logged in user
   localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));

    // redirect to dashboard
    router.push('/dashboard')
  } catch (err) {
    alert(err.response?.data?.message || 'Login failed ❌')
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center">Register</h1>

      <form @submit.prevent="registerUser" class="mt-6">
        <input
          v-model="username"
          type="text"
          placeholder="Username"
          class="w-full border p-3 rounded mb-4"
          required
        />
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
          class="w-full bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
        >
          Register
        </button>
      </form>

      <p class="mt-4 text-center text-sm">
        Already have an account?
        <router-link to="/login" class="text-blue-500">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')

const registerUser = async () => {
  try {
    const { data } = await api.post('/auth/register', {
      username: username.value,
      email: email.value,
      password: password.value,
    })

    // ✅ save logged in user
    localStorage.setItem('user', JSON.stringify(data.user))

    // redirect to dashboard
    router.push('/dashboard')
  } catch (err) {
    alert(err.response?.data?.message || 'Registration failed ❌')
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
      <h1 class="text-2xl font-bold text-center">Send a Truth or Dare 🎭</h1>

      <div class="mt-6">
        <select
          v-model="type"
          class="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option disabled value="">Choose one...</option>
          <option value="truth">Truth</option>
          <option value="dare">Dare</option>
        </select>
      </div>

      <textarea
        v-model="content"
        placeholder="Type your truth or dare..."
        rows="4"
        class="mt-4 w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <button
        @click="submit"
        class="w-full mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
      >
        Submit ✅
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import api from '../plugins/axios'

const route = useRoute()
const router = useRouter()
const type = ref('')
const content = ref('')

const submit = async () => {
  try {
    const nickname = localStorage.getItem('nickname') || 'Anonymous'

 await api.post("/submit", {
  username: route.params.username,
  type: type.value,
  content: content.value,
  nickname,
})

    alert('Submission sent successfully 🎉')

    // ✅ Clear inputs and nickname
    content.value = ''
    type.value = ''
    localStorage.removeItem('nickname')

    // ✅ Redirect back to landing page
    router.push('/')
  } catch (err) {
    console.error(err)
    alert('Failed to send ❌')
  }
}
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
      <!-- Back Button -->
      <button
        @click="router.push('/dashboard')"
        class="mb-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        ⬅ Back to Dashboard
      </button>

      <h1 class="text-2xl font-bold text-center">📥 Your Inbox</h1>

      <div v-if="submissions.length === 0" class="mt-6 text-center text-gray-500">
        No messages yet... 📨
      </div>

      <div v-else class="mt-6 space-y-4">
        <div
          v-for="(submission, index) in submissions"
          :key="index"
          class="border rounded-lg p-4 bg-gray-50 shadow-sm"
        >
          <p class="text-sm text-gray-500">From: {{ submission.nickname || 'Anonymous' }}</p>
          <p class="mt-2"><strong>{{ submission.type.toUpperCase() }}:</strong> {{ submission.content }}</p>
          <p class="text-xs text-gray-400 mt-2">📅 {{ formatDate(submission.created_at) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../plugins/axios'
import { useRouter } from 'vue-router'

const submissions = ref([])
const router = useRouter()

const fetchInbox = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const { data } = await api.get(`/submissions/${user.username}`);

    submissions.value = data.submissions;
  } catch (err) {
    console.error(err);

    if (err.response?.status === 401) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      router.push("/login");
    }
  }
};

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString()
}

onMounted(fetchInbox)
</script>



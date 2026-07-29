<template>
  <div class="min-h-screen bg-[#070414] relative overflow-hidden">

    <!-- Background Glow -->
    <div class="absolute w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full -top-20 -left-20"></div>
    <div class="absolute w-96 h-96 bg-pink-500/20 blur-[150px] rounded-full -bottom-20 -right-20"></div>

    <div class="relative z-10 max-w-5xl mx-auto px-5 py-10">

      <!-- Top Bar -->
      <div class="flex items-center justify-between">

        <button
          @click="router.push('/dashboard')"
          class="flex items-center gap-2 rounded-xl bg-[#1D1837] px-5 py-3 text-white hover:bg-[#2A234A] transition">

          <ArrowLeft class="w-5 h-5" />

          Dashboard

        </button>

        <div class="text-right">

          <h1 class="text-4xl font-black text-white flex items-center gap-3 justify-end">

            <Inbox class="w-9 h-9 text-cyan-400" />

            Inbox

          </h1>

          <p class="text-gray-400 mt-2">

            {{ submissions.length }} Anonymous Messages

          </p>

        </div>

      </div>

      <!-- Empty -->
      <div
        v-if="submissions.length===0"
        class="mt-16 rounded-3xl border border-white/10 bg-[#151128]/80 backdrop-blur-xl py-20 text-center">

        <Inbox class="w-20 h-20 mx-auto text-gray-500" />

        <h2 class="mt-6 text-3xl font-bold text-white">

          No Messages Yet

        </h2>

        <p class="mt-3 text-gray-400">

          Share your link with friends to receive anonymous messages.

        </p>

      </div>

      <!-- Messages -->
      <div
        v-else
        class="mt-10 space-y-6">

        <div
          v-for="submission in submissions"
          :key="submission.id"
          class="rounded-3xl bg-[#151128]/80 border border-white/10 backdrop-blur-xl p-6 hover:border-cyan-500/40 transition">

          <!-- Header -->
          <div class="flex justify-between items-start gap-4">

            <div class="flex gap-4">

              <div
                class="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">

                A

              </div>

              <div>

                <h3 class="text-white font-bold">

                  Anonymous

                </h3>

                <p class="text-gray-400 text-sm">

                  {{ formatDate(submission.created_at) }}

                </p>

              </div>

            </div>

            <span
              class="px-4 py-2 rounded-full text-sm font-bold"
              :class="submission.type==='truth'
              ?'bg-cyan-500/20 text-cyan-400'
              :'bg-pink-500/20 text-pink-400'">

              {{ submission.type.toUpperCase() }}

            </span>

          </div>

          <!-- Message -->
          <div
            class="mt-6 rounded-2xl bg-[#1D1837] p-5">

            <p
              class="text-lg leading-8 text-white">

              {{ submission.content }}

            </p>

          </div>

          <!-- Actions -->
          <div
            class="grid grid-cols-2 gap-4 mt-6">

            <button
              @click="copyMessage(submission.content)"
              class="flex items-center justify-center gap-2 rounded-2xl bg-[#1D1837] py-4 text-white hover:bg-[#2A234A] transition">

              <Copy class="w-5 h-5" />

              Copy

            </button>

            <button
              @click="shareWhatsApp(submission.content)"
              class="flex items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 text-white hover:bg-green-700 transition">

              <MessageCircle class="w-5 h-5" />

              WhatsApp

            </button>

          </div>

        </div>

      </div>

    </div>

  </div>


  <div
  id="shareCard"
  class="fixed left-0 top-0 opacity-0 pointer-events-none z-[-1] w-[420px] p-10 rounded-[35px] bg-[#151128] border border-white/10">

  <h2
    class="text-3xl font-black text-center
    bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500
    bg-clip-text text-transparent">

    Anonymous 💜

  </h2>

  <p class="mt-10 text-center text-2xl text-white leading-10">
  {{ shareMessage }}
</p>

  <div class="mt-10 border-t border-white/10 pt-6">

    <p class="text-center text-gray-400">

      Sent from

    </p>

    <h3
      class="text-center text-xl font-bold text-cyan-400">

      TruthDare

    </h3>

  </div>

</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '../plugins/axios'
import { useRouter } from 'vue-router'
import {
ArrowLeft,
Inbox,
Copy,
MessageCircle
} from "lucide-vue-next";
import Swal from "sweetalert2";
import { toPng } from "html-to-image";
import { nextTick } from "vue";

const shareMessage = ref("");


const copyMessage = async (message) => {
  try {
    await navigator.clipboard.writeText(message);

    Swal.fire({
      icon: "success",
      title: "Copied!",
      text: "Message copied to clipboard.",
      timer: 1500,
      showConfirmButton: false,
      background: "#151128",
      color: "#fff",
    });
  } catch (err) {
    console.error(err);
  }
};
const shareWhatsApp = (message) => {
  const text = `🎭 Anonymous Message

${message}

https://truth-dare-frontend.vercel.app`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};





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

const formatDate = (date) => {
  return new Date(date).toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

onMounted(fetchInbox)
</script>



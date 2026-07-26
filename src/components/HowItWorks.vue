<template>
  <section
    id="how"
    class="relative py-28 px-6">

    <div class="max-w-6xl mx-auto text-center">

      <h2 class="text-5xl font-bold">
        How it Works
      </h2>

      <p class="text-gray-400 mt-4">
        It's simple. Just 3 easy steps.
      </p>

      <div
        class="grid md:grid-cols-3 gap-10 mt-20">

        <!-- Step 1 -->
        <div
          class="relative rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          p-10
          hover:-translate-y-2
          transition">

          <div
            class="w-16 h-16
            rounded-full
            bg-violet-600
            flex items-center justify-center
            text-2xl
            mx-auto">

            👤

          </div>

          <h3 class="text-2xl font-bold mt-8">
            Create your account
          </h3>

          <p class="text-gray-400 mt-4">
            Register in seconds and receive your own unique game link.
          </p>

        </div>

        <!-- Step 2 -->
        <div
          class="relative rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          p-10
          hover:-translate-y-2
          transition">

          <div
            class="w-16 h-16
            rounded-full
            bg-blue-600
            flex items-center justify-center
            text-2xl
            mx-auto">

            🔗

          </div>

          <h3 class="text-2xl font-bold mt-8">
            Share your link
          </h3>

          <p class="text-gray-400 mt-4">
            Send your link to friends on WhatsApp, Instagram or anywhere.
          </p>

        </div>

        <!-- Step 3 -->
        <div
          class="relative rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          p-10
          hover:-translate-y-2
          transition">

          <div
            class="w-16 h-16
            rounded-full
            bg-pink-600
            flex items-center justify-center
            text-2xl
            mx-auto">

            🎁

          </div>

          <h3 class="text-2xl font-bold mt-8">
            Receive anonymously
          </h3>

          <p class="text-gray-400 mt-4">
            Friends send Truths & Dares anonymously. Only you can read them.
          </p>

        </div>

      </div>

      <!-- CTA -->

      <div
        class="mt-24
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        py-16 px-10">

        <h2 class="text-4xl font-bold">
          Ready to start the game?
        </h2>

        <RouterLink
          to="/register"
          class="inline-block mt-8
          px-10 py-4
          rounded-2xl
          bg-gradient-to-r
          from-violet-600
          to-pink-500
          font-semibold
          hover:scale-105
          transition">

          Create Your Link →

        </RouterLink>

      </div>

    </div>

  </section>
</template>
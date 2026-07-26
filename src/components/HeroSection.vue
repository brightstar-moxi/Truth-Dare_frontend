<template>
  <section
    class="relative min-h-screen flex items-center overflow-hidden px-6 pt-32">

    <!-- Glow -->
    <div class="absolute w-96 h-96 bg-violet-700/30 blur-[120px] rounded-full -top-24 -left-20"></div>
    <div class="absolute w-96 h-96 bg-pink-600/20 blur-[120px] rounded-full bottom-0 right-0"></div>

    <div
      class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

      <!-- Left -->
      <div>

        <span
          class="inline-flex items-center gap-2
          border border-violet-500
          rounded-full
          px-5 py-2
          text-sm">

          🎮 PLAY • SHARE • LAUGH

        </span>

        <h1
          class="text-6xl lg:text-7xl
          font-extrabold
          mt-8
          leading-tight">

          <span
            class="bg-gradient-to-r
            from-violet-500
            to-pink-500
            bg-clip-text
            text-transparent">

            Truth

          </span>

          or

          <span
            class="bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent">

            Dare,

          </span>

          <br>

          anytime,

          anywhere.

        </h1>

        <p
          class="text-gray-300
          mt-8
          text-lg
          max-w-xl">

          Create your personal link,
          share it with friends,
          and receive anonymous Truths and Dares.

        </p>

        <div class="flex gap-5 mt-10">

          <RouterLink
            to="/register"
            class="px-8 py-4 rounded-2xl
            bg-gradient-to-r
            from-blue-500
            to-pink-500
            font-semibold
            hover:scale-105
            transition">

            Create Your Link →

          </RouterLink>

          <a
            href="#how"
            class="px-8 py-4 rounded-2xl
            border border-white/20
            hover:bg-white/10">

            How it Works

          </a>

        </div>

      </div>

      <!-- Right -->
      <div class="relative h-[520px] hidden lg:block">

        <!-- Truth Card -->
        <div
          class="absolute
          right-10
          top-0
          w-80
          rounded-3xl
          border border-violet-500/40
          bg-white/5
          backdrop-blur-xl
          p-8
          rotate-6
          animate-float">

          <h3 class="text-3xl font-bold text-violet-400">
            💬 Truth
          </h3>

          <p class="mt-6 text-2xl">
            What's your biggest secret?
          </p>

        </div>

        <!-- Dare Card -->
        <div
          class="absolute
          left-0
          bottom-0
          w-80
          rounded-3xl
          border border-pink-500/40
          bg-white/5
          backdrop-blur-xl
          p-8
          -rotate-6
          animate-float2">

          <h3 class="text-3xl font-bold text-pink-400">
            🎯 Dare
          </h3>

          <p class="mt-6 text-2xl">
            Dance for 60 seconds.
          </p>

        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
@keyframes float{
0%,100%{transform:translateY(0) rotate(6deg);}
50%{transform:translateY(-20px) rotate(6deg);}
}

@keyframes float2{
0%,100%{transform:translateY(0) rotate(-6deg);}
50%{transform:translateY(20px) rotate(-6deg);}
}

.animate-float{
animation:float 5s ease-in-out infinite;
}

.animate-float2{
animation:float2 6s ease-in-out infinite;
}
</style>
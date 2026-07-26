<template>
  <div class="min-h-screen bg-[#08081b] text-white overflow-hidden">

    <Navbar />

    <HeroSection />

    <HowItWorks />

  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import HeroSection from "../components/HeroSection.vue";
import HowItWorks from "../components/HowItWorks.vue";
</script>
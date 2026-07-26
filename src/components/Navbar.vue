<template>
<nav
class="fixed top-0 left-0 w-full z-50
backdrop-blur-xl
border-b border-white/10">

<div
class="max-w-7xl mx-auto
flex justify-between items-center
px-6 py-5">

<div
class="text-3xl font-extrabold">

<span
class="bg-gradient-to-r
from-violet-500
to-pink-500
bg-clip-text
text-transparent">

Truth

</span>

<span>&</span>

<span
class="text-white">

Dare

</span>

</div>

<div class="hidden md:flex gap-10">

<a href="#how" class="hover:text-violet-400">
How it Works
</a>

</div>

<div class="flex gap-4">

<RouterLink
to="/login"
class="text-white">

Login

</RouterLink>

<RouterLink
to="/register"
class="px-5 py-2 rounded-xl
bg-gradient-to-r
from-violet-600
to-pink-500">

Register

</RouterLink>

</div>

</div>

</nav>
</template>
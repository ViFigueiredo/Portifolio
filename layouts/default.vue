<template>
  <div>
    <NavBar />

    <slot class="min-h-screen" />

    <footer
      class="flex justify-center align-middle w-full space-x-1 py-2 bg-green-100 font-semibold"
    >
      <span>2023 &copy Desenvolvido por</span>
      <a class="hover:underline" href="https://github.com/ViFigueiredo"
        >Vinicius Figueiredo</a
      >
    </footer>
  </div>
</template>

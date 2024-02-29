<script setup></script>

<template>
  <div>
    <div class="im-container flex items-center w-full h-[500px] bg-[#222]">
      <div class="w-[40%] h-full relative">
        <BgAnimation class="" />
        <div class="w-60 h-60 rounded-full absolute top-[25%] right-0">
          <img
            src="https://avatars.githubusercontent.com/u/67883343?s=400&u=f92f196f0ced5790435c63da5e1041ff654bf194&v=4"
            alt="Vinicius Figueiredo"
          />
        </div>
      </div>
      <div class="flex flex-col w-[45%]">
        <div class="flex flex-col w-full text-center text-slate-200">
          <span class="text-6xl">Vinicius Figueiredo</span>
          <span class="text-3xl mt-5"> Sou Desenvolvedor Fullstack Web</span>
        </div>
        <div class="flex w-full justify-center mt-5 text-slate-200">
          <button class="flex border border-solid p-2">
            <UIcon name="i-heroicons-arrow-down-tray" class="text-xl mr-2" />
            <a
              href="https://www.canva.com/design/DAF5Pv1sx_c/iOV3EAGumiEg2h7JqJZzSA/edit?utm_content=DAF5Pv1sx_c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              ><span>Download CV</span></a
            >
          </button>
          <div class="mx-2"></div>
          <button class="flex border border-solid p-2">
            <UIcon name="i-heroicons-envelope" class="text-xl mr-2" />
            <span>Contate me</span>
          </button>
        </div>
      </div>
    </div>

    <div>
      <h1 id="aboutme" class="text-center text-4xl mt-10">Sobre mim</h1>
    </div>

    <div>
      <h1 id="skills" class="text-center text-4xl mt-10">Habilidades</h1>
    </div>

    <div>
      <h1 id="projects" class="text-center text-4xl mt-10">Projetos</h1>
    </div>
  </div>
</template>

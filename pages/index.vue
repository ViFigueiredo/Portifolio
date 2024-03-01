<template>
  <div class="relative">
    <div class="im-container flex items-center w-full h-[550px] bg-[#222]">
      <div class="w-[40%] h-full relative">
        <BgAnimation class="" />
        <div
          class="w-60 h-60 rounded-full absolute top-[25%] right-0 overflow-hidden"
        >
          <img
            src="../assets/img/avatar.png"
            alt="Vinicius Figueiredo"
            class="w-full h-full object-cover"
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
    <!-- header -->

    <div class="main-containter">
      <div id="aboutme"></div>
      <div
        class="flex flex-col justify-center mx-16 pb-10 border-b-2 border-gray-300"
      >
        <h1 class="text-center text-4xl mt-10">Sobre mim</h1>

        <div class="flex w-full justify-center space-x-8 mt-10">
          <div
            class="flex flex-col text-center justify-center border border-gray-400 p-5 space-y-2 hover:bg-green-300"
          >
            <UIcon name="i-heroicons-shield-check-20-solid" class="text-xl" />
            <span class="font-semibold text-sm">Experiência</span>
            <span class="text-sm">2+ anos</span>
            <span class="text-sm">Fullstack JS</span>
          </div>
          <div
            class="flex flex-col text-center justify-center border border-gray-400 p-5 space-y-2 hover:bg-green-300"
          >
            <UIcon name="i-heroicons-academic-cap-20-solid" class="text-xl" />
            <span class="font-semibold text-sm">Educação</span>
            <span class="text-sm">Tecnólogo</span>
            <span class="text-sm">Análise e Desenvolvimento de Sistemas</span>
          </div>
        </div>

        <div class="flex w-full mt-8 text-justify px-20">
          <span class=""
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            assumenda voluptatum quam consectetur quo rerum dolores. Tempore
            ullam illo perspiciatis iusto cupiditate aliquid natus odit in vel
            modi! Doloremque, eum? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Velit error suscipit placeat beatae? Ea possimus
            iure quibusdam ut temporibus blanditiis consectetur, reprehenderit
            assumenda sed placeat, ipsa perferendis vel exercitationem expedita.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            doloribus ipsa nostrum dolores, rerum consectetur fugiat aliquam
            nobis vel molestiae animi facere ducimus unde officia, quos suscipit
            ipsam. Aut, minima.</span
          >
        </div>
      </div>
      <!-- aboutme -->

      <div id="skills"></div>
      <div class="pb-10 border-b-2 border-gray-300 mx-16">
        <h1 class="text-center text-4xl mt-10">Habilidades</h1>
        <div
          class="mt-8 mx-16 @apply grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5 justify-center p-5 text-sm"
        >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >HTML5</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >CSS3</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Javascript</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Typescript</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Vue3</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Nuxt3</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >NuxtUI</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >TailwindCSS</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Nodejs</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Sequelize</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Knex.js</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Mongoose</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >SGBD</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Git/Github</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >SQL/NoSQL</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >AWS</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >GCP</span
          >
          <span
            class="@apply text-center border-solid p-2 border-2 border-gray-300 hover:bg-green-300"
            >Linux/WSL</span
          >
        </div>
      </div>
      <!-- skills -->

      <div id="projects"></div>
      <div class="flex flex-col justify-center mx-16 pb-10">
        <h1 class="text-center text-4xl mt-10">Projetos</h1>

        <div class="mt-10 flex justify-center flex-nowrap space-x-5">
          <div
            class="flex flex-col items-center max-w-sm border-2 border-gray-300 p-5 space-y-3"
          >
            <div class="flex flex-col w-full">
              <span class="font-bold">Projeto 1</span>
              <span>Jul 2023 - Dez 2023</span>
            </div>
            <img src="" alt="" class="w-[300px] h-[300px]" />
            <span class="w-full text-justify text-sm"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ad necessitatibus voluptate facilis modi, ipsum,
              accusantium excepturi, dolore nihil vitae sapiente! Culpa,
              inventore minima cumque unde quis officiis facere sint?</span
            >
            <span class="w-full text-sm font-bold">
              Tecnologias: Javascript, HTML3, CSS3...</span
            >
            <div class="buttons space-x-3 w-full flex justify-center">
              <UButton
                class="hover:bg-green-300 w-[50%] flex justify-center"
                color="gray"
                variant="solid"
                label="Visualizar"
              />
              <UButton
                class="hover:bg-green-300 w-[50%] flex justify-center"
                color="gray"
                variant="solid"
                label="Código Fonte"
              />
            </div>
          </div>

          <div
            class="flex flex-col items-center max-w-sm border-2 border-gray-300 p-5 space-y-3"
          >
            <div class="flex flex-col w-full">
              <span class="font-bold">Projeto 2</span>
              <span>Jul 2023 - Dez 2023</span>
            </div>
            <img src="" alt="" class="w-[300px] h-[300px]" />
            <span class="w-full text-justify text-sm"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ad necessitatibus voluptate facilis modi, ipsum,
              accusantium excepturi, dolore nihil vitae sapiente! Culpa,
              inventore minima cumque unde quis officiis facere sint?</span
            >
            <span class="w-full text-sm font-bold">
              Tecnologias: Javascript, HTML3, CSS3...</span
            >
            <div class="buttons justify-center space-x-3 w-full flex">
              <UButton
                class="hover:bg-green-300 w-[50%] flex justify-center"
                color="gray"
                variant="solid"
                label="Visualizar"
              />
              <UButton
                class="hover:bg-green-300 w-[50%] flex justify-center"
                color="gray"
                variant="solid"
                label="Código Fonte"
              />
            </div>
          </div>

          <div
            class="flex flex-col items-center max-w-sm border-2 border-gray-300 p-5 space-y-3"
          >
            <div class="flex flex-col w-full">
              <span class="font-bold">Projeto 3</span>
              <span>Jul 2023 - Dez 2023</span>
            </div>
            <img src="" alt="" class="w-[300px] h-[300px]" />
            <span class="w-full text-justify text-sm"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur ad necessitatibus voluptate facilis modi, ipsum,
              accusantium excepturi, dolore nihil vitae sapiente! Culpa,
              inventore minima cumque unde quis officiis facere sint?</span
            >
            <span class="w-full text-sm font-bold">
              Tecnologias: Javascript, HTML3, CSS3...</span
            >
            <div class="flex space-x-3 w-full justify-center">
              <UButton
                class="hover:bg-green-300 w-[50%] flex justify-center"
                color="gray"
                variant="solid"
                label="Visualizar"
              />
              <UButton
                class="hover:bg-green-300 w-[50%] flex justify-center"
                color="gray"
                variant="solid"
                label="Código Fonte"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- projects -->
    </div>

    <UButton
      v-show="showButton"
      class="fixed bottom-5 right-5"
      @click="scrollToTop"
    >
      Subir
      <UIcon name="i-heroicons-arrow-up-circle" />
    </UButton>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrollY = ref(0);
const showButton = ref(false);

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
  showButton.value = scrollY.value > 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

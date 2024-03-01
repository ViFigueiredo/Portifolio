<template>
  <div class="relative min-h-[100vh]">
    <div class="im-container flex items-center w-full h-[550px] bg-[#222]">
      <div class="w-[40%] h-full">
        <BgAnimation class="relative" />
        <div class="absolute top-10 h-full right-[15%] text-teal-50 max-w-md">
          <h3>Obrigado por entrar em contato comigo. 😊</h3>
          <br />
          <span class="">
            Em breve entrarei em contato para tirarmos suas ideias do papel e
            dar a luz a um grande projeto inovador. 😎</span
          >
          <form action="" class="mt-5 space-y-8">
            <UFormGroup required>
              <label for="email" class="text-sm"
                >E-mail<str class="text-red-600">*</str></label
              >
              <UInput
                id="email"
                placeholder="you@example.com"
                icon="i-heroicons-envelope"
              />
            </UFormGroup>

            <UFormGroup required>
              <label for="zap" class="text-sm"
                >Whatsapp<str class="text-red-600">*</str></label
              >
              <UInput
                id="zap"
                placeholder="you@example.com"
                icon="i-heroicons-chat-bubble-oval-left-ellipsis"
              />
            </UFormGroup>

            <UButton class="w-full h-10 mt-5 flex justify-center font-bold">
              <span>Enviar</span>
              <UIcon name="i-heroicons-paper-airplane" />
            </UButton>
          </form>
        </div>
      </div>
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

<style scoped>
/* Estilizando o label dentro do UFormGroup */
.u-form-group .u-form-group__label {
  color: red; /* ou a cor desejada */
}
</style>

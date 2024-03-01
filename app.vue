<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'FigCode | Website',
  meta: [
    {
      name: 'Site oficial do programador Vinicius Figueiredo.',
      content: 'Apresentação pessoal do programador Vinicius Figueiredo.',
    },
  ],
});

// useSeoMeta({
//   title: 'Site oficial do programador Vinicius Figueiredo.',
//   ogTitle: 'Site oficial do programador Vinicius Figueiredo.',
//   description:
//     'Que tal ter seu site ou aplicação web bem rápido e baratinho? Fale comigo ;)',
//   ogDescription:
//     'Que tal ter seu site ou aplicação web bem rápido e baratinho? Fale comigo ;)',
//   ogImage: '',
//   twitterCard: '',
// });
</script>

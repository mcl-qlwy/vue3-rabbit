<script setup>
import LayoutNavVue from './components/LayoutNav.vue';
import LayoutHeaderVue from './components/LayoutHeader.vue';
import LayoutFooterVue from './components/LayoutFooter.vue';
import LayoutFixedVue from './components/LayoutFixed.vue';

import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()

onMounted(()=>categoryStore.getCategory())
</script>
<template>
  <LayoutFixedVue />
  <LayoutNavVue />
  <LayoutHeaderVue />
  <RouterView />
  <LayoutFooterVue />
</template>
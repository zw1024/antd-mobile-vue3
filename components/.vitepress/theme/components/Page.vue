<template>
  <main class="page">
    <div class="container">
      <slot name="top" />
      <div class="content">
        <div class="flex-content">
          <Content class="md-content"/>
          <div class="mobile-wrapper">
            <iframe id="demoFrame" name="demoFrame" title="antd-mobile" :src="iframeUrl" style="width: 377px; height: 548px; border-top: none; border-right: 1px solid rgb(247, 247, 247); border-bottom: 1px solid rgb(247, 247, 247); border-left: 1px solid rgb(247, 247, 247); border-image: initial; box-shadow: rgb(235, 235, 235) 0px 2px 4px;"></iframe>
          </div>
        </div>
      </div>

      <PageFooter />

      <NextAndPrevLinks />

      <slot name="bottom" />
    </div>
  </main>
</template>

<script setup lang="ts">
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
import { computed, watch } from 'vue'
import {
  useRoute
} from 'vitepress'
const route = useRoute()
const iframeUrl = computed(() => {
  return `http://localhost:3000/#/${route.data.title}`
})
</script>

<style scoped>
.page {
  padding-top: var(--header-height);
}

@media (min-width: 720px) {
  .page {
    margin-left: 10.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 14rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  width: 100%;
  max-width: 100%;
}

.content {
  padding-bottom: 1.5rem;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
.flex-content{
   display: flex;
   width: 100%;
 }
.md-content{
  flex: auto;
}
.mobile-wrapper{
  margin: 16px;
  width: 400px;
}
</style>

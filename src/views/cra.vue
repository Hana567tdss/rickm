
<script>
import {
  VueFlux,
  FluxPreloader,
  FluxControls,
  FluxPagination,
  FluxImage,
  Img,
  
  Size,
  
  Wave,

} from 'vue-flux';
import { reactive, shallowReactive } from 'vue';

export default {
  components: {
    VueFlux,
    FluxPreloader,
    FluxControls,
    FluxPagination,
    FluxImage,
  },
  setup() {
    const options = reactive({
      allowFullscreen: false,
      allowToSkipTransition: true,
      autohideTime: 1500,
      autoplay: true,
      bindKeys: false,
      delay: 2000,
      enableGestures: false,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    });

    const rscs = shallowReactive([
      new Img('./image/1.jpg'),
      new Img('./image/a.jpg'),
      new Img('./image/b.jpg'),
      new Img('./image/d.jpg'),
      new Img('./image/zz.jpg'),
    ]);

    const rsc = new Img('./image/1.jpg');
    const a = new Img('./image/a.jpg');
    const b = new Img('./image/b.jpg');
    const c = new Img('./image/d.jpg');
    const d = new Img('./image/zz.jpg');

    const size = new Size({
      width: 500,  // Decreased width
      height: 150, // Decreased height
    });

    const transitions = shallowReactive([
      
    Wave,
      
    ]);

    return {
      options,
      rscs,
      rsc,
      size,
      transitions,
      a,
      b,
      c,
      d,
    };
  },
};
</script>




<template>
  
  
  <div class="vue-flux-container">
    <!-- <FluxImage :rsc="rsc" :size="size" />
    <FluxImage :rsc="a" :size="size" /> -->
    <!-- <FluxImage :rsc="b" :size="size" />
    <FluxImage :rsc="c" :size="size" />
    <FluxImage :rsc="d" :size="size" /> -->

    <VueFlux
      :options="options"
      :rscs="rscs"
      :transitions="transitions"
    >
      <template #preloader="preloaderProps">
        <FluxPreloader v-bind="preloaderProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>
     
      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>
    </VueFlux>
  </div>
</template>

<style scoped>
.vue-flux-container {
  max-width: 400px;  /* Ensure the container size matches the image size */
  margin: auto;
}

.vue-flux-container img {
  width: 100%;
  height: auto;
}
</style>

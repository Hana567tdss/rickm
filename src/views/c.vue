<!-- 
<script>
import {
	Blocks2,
} from 'vue-flux';
import { reactive, shallowReactive } from 'vue';

const transitions = shallowReactive([
	{
		component: Blocks2,
		options: shallowReactive({
			rows: 0,
			cols: 8,
			tileDuration: 800,
			tileDelay: 80,
			easing: 'ease',
		}),
	},
]);
</script>

<template>
  <div>
    
    <VueFlux
      :options="options"
      :rscs="rscs"
      :transitions="transitions"
    ><template>
      <FluxImage
        :rsc="rsc"
        :size="size"
      />
    </template>
       
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
 -->

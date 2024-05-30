<template>
  <div class="bg-sky-400">
    <div>
      <div class="text-sky-700 text-3xl ml-40 flex flex-row gap-10">
        <div class="text-6xl">
          <p>Rick and Morty</p>
        </div>
        <div class="text-4xl font-semibold text-sky-900 ml-0 mt-10 mr-40">
          <p>Location</p>
        </div>
        <div>
          <img src="/image/location.jpg" class="ml-30 w-350 mt-8 rounded-full">
        </div>
      </div>
    </div>

    <div id="app">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <div v-else>
        <div v-if="location" class="location">
          <h2 class="text-3xl font-semibold">{{ location.name }}</h2>
          <h2 class="text-2xl font-medium">{{ location.type }}</h2>
          <p>Dimension: {{ location.dimension }}</p>
          <p>Created: {{ location.created }}</p>
          <div>
            <h5 class="text-2xl ml-8">Residents:</h5>
            <div class="grid grid-rows-4 grid-flow-col gap-4 overflow-y-auto bg-sky-400 p-5 m-4">
              <div v-for="resident in location.residents" :key="resident.id" class="residents">
                <div class="mx-3 mt-2 border border-sky-600 w-auto p-7 pr-8">
                  <img :src="resident.image" :alt="resident.name" width="100" class="w-200 h-150 ml-15">
                  <p class="font-semibold">Name:</p><p>{{ resident.name }}</p><br>
                  <p class="font-semibold">Status:</p><p>{{ resident.status }}</p><br>
                  <p class="font-semibold">Species:</p><p>{{ resident.species }}</p><br>
                  <p class="font-semibold">Gender:</p><p>{{ resident.gender }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-8"></div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';

const LOCATION_DETAIL_QUERY = gql`
  query location($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
      created
      type
      residents {
        name
        status
        species
        gender
        image
      }
    }
  }
`;

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const locationId = ref(route.params.id);
    const { result, loading, error, refetch } = useQuery(LOCATION_DETAIL_QUERY, { id: locationId.value });
    const location = ref(null);

    watchEffect(() => {
      locationId.value = route.params.id;
      refetch({ id: locationId.value });
    });

    watchEffect(() => {
      if (result.value && result.value.location) {
        location.value = result.value.location;
      }
    });

    return {
      location,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 20px;
}

.location {
  margin-bottom: 30px;
}

.resident {
  list-style-type: none;
  margin-right: 0;
  padding: 10px;
}

.location img {
  margin-top: 0px;
  display: block;
  margin: 4px;
}
</style>

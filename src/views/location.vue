<template>
  <div class="bg-sky-400">
    <div>
      <div class="text-sky-700 text-3xl  ml-8 sm:ml-40 flex flex-row">
        <div class="text-2xl sm:text-6xl mr-30 sm:mr-0 ">
          <p>Rick and Morty</p>
        </div>
        <div class=" text-base sm:text-4xl font-semibold text-sky-900  ml-5 sm:ml-0  mt-20 sm:mt-40  mr-30 sm:mr-40">
          <p>Location</p>
        </div>
        <div>
          <img src="/image/location.jpg" class=" mr-45 sm:mr-0 ml-2 sm:ml-30 mt-9 rounded-full sm:w-max sm:h-max" width="120" height="90">
        </div>
      </div>
    </div>

    <div id="app">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <div v-else>
        <div v-if="location" class="location">
          <h2 class="text-base sm:text-3xl font-semibold">{{ location.name }}</h2>
          <h2 class=" text-base sm:text-2xl font-medium">{{ location.type }}</h2>
          <p>Dimension: {{ location.dimension }}</p>
          <p>Created: {{ location.created }}</p>
          <div>
            <h5 class=" text-base sm:text-2xl ml-8">Residents:</h5>
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
    <div>
            <div>
                  <footer class="bg-sky-600 text-white p-4 text-center mt-8 ">
          <div class="flex justify-center space-x-4">
            <a href="https://www.figma.com/design/99uqsH9kVgLfCWfk6KBhEA/Untitled?node-id=0-1&t=JM9yfOyLjaQsm6oL-1" target="_blank" rel="noopener noreferrer" class="text-sky-400 font-semibold text-sm sm:text-2xl">Figma</a>
            <a href="https://www.figma.com/proto/99uqsH9kVgLfCWfk6KBhEA/rick?node-id=1-2&t=w422Fjq1M72SMwSq-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" class="text-sky-400 font-semibold text-sm sm:text-2xl">Figma-present</a>
            <a href="https://github.com/Hana567tdss/rickm" target="_blank" rel="noopener noreferrer" class="text-sky-900 font-semibold text-sm sm:text-2xl">GitHub</a>
          </div>
          <p>&copy; 2024 , All rights reserved.</p>
        </footer>
          </div>
    </div>
    
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

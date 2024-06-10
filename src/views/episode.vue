<template>
  <div class="bg-sky-400">
    <div>
      <div class="text-sky-700 text-3xl  ml-8 sm:ml-40 flex flex-row">
        <div class=" text-2xl sm:text-6xl ">
          <p>Rick and Morty</p>
        </div>
        <div class="  text-base sm:text-4xl font-semibold text-sky-900  ml-0 sm:ml-10 mt-24 sm:mt-40 mr-50 mb-12">
          <p>Episode List</p>
        </div>
        <div class="flex justify-end">
          <div>
            <img class=" ml- sm:ml-40 rounded-3xl shadow-lg mt-5 sm:w-max sm:h-max" src="/image/ep.jpg" width="45" height="55"/>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div>
        <ul class="font-medium text-sm sm:text-2xl ml-5 sm:ml:11 cursor-pointer">
          <div class="flex flex-row cursor-pointer">
            <div>
              <li class="rounded-xl bg-sky-800 h-47  w-20 sm:w-40 p-2 pl-4 active:bg-sky-800 active mr-8">
                <a href="#">Seasons</a>
              </li>
            </div>
            <div class="ml-0 sm:ml-19 mt-2 flex flex-row gap-4 sm:gap-10">
              <div class="hover:text-sky-300"><a href="#">1</a></div>
              <div class="hover:text-sky-300"><a href="#">2</a></div>
              <div class="hover:text-sky-300"><a href="#">3</a></div>
              <div class="hover:text-sky-300"><a href="#">4</a></div>
              <div class="hover:text-sky-300"><a href="#">5</a></div>
              <div class="hover:text-sky-300"><a href="#">6</a></div>
              <div class="hover:text-sky-300"><a href="#">7</a></div>
              <div class="hover:text-sky-300"><a href="#">8</a></div>
            </div>
          </div>
          <li class="rounded-xl hover:bg-sky-800 h-47 w-40 p-2 pl-4">Year</li>
          <li class="rounded-xl hover:bg-sky-800 h-47 w-40 p-2 pl-4">Top-Rated</li>
        </ul>
      </div>
    </div>

    <div id="app">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <div v-else>
        <div v-if="episode" class="episode ">
          <div class="mt-8 ml-4 sm:ml-8">
            <h2 class=" text-1xl sm:text-3xl  font-semibold">{{ episode.name }}</h2>
            <h2 class=" text-base sm:text-2xl font-medium">{{ episode.episode }}</h2>
            <p>Air Date: {{ episode.air_date }}</p>
            <h2>Created: {{ episode.created }}</h2>
          </div>
          <div>
            <h5 class="text-base sm:text-2xl ml-8">Characters:</h5>
            <div v-for="character in episode.characters" :key="character.id" class="character">
              <div class="flex justify-evenly border h-140 w-200 border-sky-900 ml-10 sm:ml-60 mr-50 mb-6">
                <img :src="character.image" :alt="character.name" width="40" height="50" class="sm:ml-11  ml-4 rounded-3xl sm:w-max sm:h-max " />
                <div>
                  <p class=" mt-2 sm:mt-10">Name: {{ character.name }}</p>
                  <p class=" mt-2 sm:mt-10">Status: {{ character.status }}</p>
                  <p class=" mt-2 sm:mt-10">Species: {{ character.species }}</p>
                  <p class=" mt-2 sm:mt-10">Gender: {{ character.gender }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div> <div>
                  <footer class="bg-sky-600 text-white p-4 text-center mt-8 ">
          <div class="flex justify-center space-x-4">
            <a href="https://www.figma.com/design/99uqsH9kVgLfCWfk6KBhEA/Untitled?node-id=0-1&t=JM9yfOyLjaQsm6oL-1" target="_blank" rel="noopener noreferrer" class="text-sky-400 font-semibold text-sm sm:text-2xl">Figma</a>
            <a href="https://www.figma.com/proto/99uqsH9kVgLfCWfk6KBhEA/rick?node-id=1-2&t=w422Fjq1M72SMwSq-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer" class="text-sky-400 font-semibold text-sm sm:text-2xl">Figma-present</a>
            <a href="https://github.com/Hana567tdss/rickm" target="_blank" rel="noopener noreferrer" class="text-sky-900 font-semibold text-sm sm:text-2xl">GitHub</a>
          </div>
          <p>&copy; 2024 , All rights reserved.</p>
        </footer>
          </div></div>
    
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';

const EPISODE_QUERY = gql`
  query episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      created
      episode
      characters {
        id
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
    const router = useRouter();
    const episodeId = ref(route.params.id);
    const { result, loading, error, refetch } = useQuery(EPISODE_QUERY, { id: episodeId.value });
    const episode = ref(null);

    watchEffect(() => {
      episodeId.value = route.params.id;
      refetch({ id: episodeId.value });
    });

    watchEffect(() => {
      if (result.value && result.value.episode) {
        episode.value = result.value.episode;
      }
    });

    return {
      episode,
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

.episode {
  margin-bottom: 30px;
}

.character {
  list-style-type: none;
  margin-right: 0;
  padding: 0;
}

.character img {
  margin-top: 0;
  display: block;
  margin: 4px;
}
</style>

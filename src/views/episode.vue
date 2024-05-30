<template>
  <div class="bg-sky-400">
    <div>
      <div class="text-sky-700 text-3xl ml-40 flex flex-row">
        <div class="text-6xl col-span-2">
          <p>Rick and Morty</p>
        </div>
        <div class="text-4xl font-semibold text-sky-900 ml-10 mt-40 mr-50 mb-12">
          <p>Episode List</p>
        </div>
        <div class="flex justify-end">
          <div>
            <img class="ml-40 rounded-3xl shadow-lg mt-5" src="/image/ep.jpg" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div>
        <ul class="font-medium text-2xl ml-11 cursor-pointer">
          <div class="flex flex-row cursor-pointer">
            <div>
              <li class="rounded-xl bg-sky-800 h-47 w-40 p-2 pl-4 active:bg-sky-800 active mr-8">
                <a href="#">Seasons</a>
              </li>
            </div>
            <div class="ml-19 mt-2 flex flex-row gap-10">
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
          <div class="mt-8 ml-8">
            <h2 class="text-3xl font-semibold">{{ episode.name }}</h2>
            <h2 class="text-2xl font-medium">{{ episode.episode }}</h2>
            <p>Air Date: {{ episode.air_date }}</p>
            <h2>Created: {{ episode.created }}</h2>
          </div>
          <div>
            <h5 class="text-2xl ml-8">Characters:</h5>
            <div v-for="character in episode.characters" :key="character.id" class="character">
              <div class="flex justify-evenly border h-140 w-200 border-sky-900 ml-60 mr-50 mb-6">
                <img :src="character.image" :alt="character.name" width="300" height="170" class="ml-11 rounded-3xl" />
                <div>
                  <p class="mt-10">Name: {{ character.name }}</p>
                  <p class="mt-10">Status: {{ character.status }}</p>
                  <p class="mt-10">Species: {{ character.species }}</p>
                  <p class="mt-10">Gender: {{ character.gender }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-20 bg-sky-400"></div>
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

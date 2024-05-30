<template>
  <div class="bg-sky-400">
    <div>
      <div class="text-sky-700 text-3xl ml-40">
        <div class="text-6xl"><p>Rick and Morty</p></div>
        <div class="flex justify-end">
          <div class="text-4xl font-semibold text-sky-900 ml-13 mt-10">
            <p>Characters</p>
          </div>
          <div>
            <img src="/image/characters1.jpg" class="ml-36 mr-8 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
    <div id="app">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <div v-else>
        <div v-if="character" class="character">
          <div class="pl-200 char bg-sky-500 shadow-inner rounded-2xl">
            <h2 class="text-3xl font-semibold ">{{ character.name }}</h2>
            <img :src="character.image" :alt="character.name" width="100 " class="rounded-full ml-20" />
            <h2>Status: {{ character.status }}</h2>
            <p>Species: {{ character.species }}</p>
            <p>Gender: {{ character.gender }}</p>
          </div>
          <div>
            <h5 class="text-2xl mt-8">Episodes {{ character.name }} participated:</h5>
            <div class="grid gap-4 grid-cols-3 grid-rows-3 ">
              <div v-for="episode in character.episode" :key="episode.id" class="episode">
                <div class="ml-11 border-sky-900 mr-5 mb-6">
                  <div class="mt-18 mb-9">
                    <div class="pr-7 mt-10">
                      <div class="border h-15 w-60 m-3 p-4 epi bg-sky-500">
                        <p>Name: {{ episode.name }}</p>
                        <p>Air Date: {{ episode.air_date }}</p>
                        <p>Episode: {{ episode.episode }}</p>
                        <p>Created: {{ episode.created }}</p>
                      </div>
                    </div>
                  </div>
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
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';

const CHARACTER_QUERY = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      episode {
        id
        name
        air_date
        episode
        created
      }
    }
  }
`;

export default {
  name: 'App',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const characterId = ref(route.params.id);
    const { result, loading, error, refetch } = useQuery(CHARACTER_QUERY, { id: characterId.value });
    const character = ref(null);

    watchEffect(() => {
      characterId.value = route.params.id;
      refetch({ id: characterId.value });
    });

    watchEffect(() => {
      if (result.value && result.value.character) {
        character.value = result.value.character;
      }
    });

    return {
      character,
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

.character {
  margin-bottom: 30px;
}

.episode {
  list-style-type: none;
  margin-right: 0;
  padding: 0;
}

.character img {
  margin-top: 0px;
  display: block;
  margin: 4px;
}
.char {
  margin-left: 300px;
  border: 1px solid rgba(5, 5, 68, 0.904);
  width: 350px;
  height: 245px;
  padding: 7px;
  padding-left: 70px; 
}
.epi {
  border: 1px solid rgba(5, 5, 68, 0.904);
}
</style>

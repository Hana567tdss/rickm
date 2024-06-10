<template>
  <div class="bg-sky-400">
    <div>
      <div class="text-sky-700 text-3xl ml-8 sm:ml-40 ">
        <div class="text-3xl sm:text-6xl mr-30 sm:mr-0">
          <p>Rick and Morty</p>
        </div>
        <div class="flex justify-end">
          <div class="text-2xl sm:text-4xl  font-semibold text-sky-900 ml-13 mt-10">
            <p>Characters</p>
          </div>
          <div>
            <img src="/image/characters1.jpg" class=" ml-6 sm:ml-36 mr-8 rounded-lg sm:w-max sm:h-max mt-7 sm:mt-0" width="100" height="90" />
          </div>
        </div>
      </div>
    </div>
    <div id="app">
      <p v-if="error">Something went wrong...</p>
      <p v-if="loading">Loading...</p>
      <div v-else>
        <div v-if="character" class="character">
          <div class=" ml-20 sm:ml-90 pl-30 sm:pl-200 w-40 sm:w-80
     h-70 sm:h-345 char bg-sky-500 shadow-inner rounded-2xl p-4">
            <h2 class=" text-base sm:text-3xl font-semibold ">{{ character.name }}</h2>
            <img :src="character.image" :alt="character.name" width="100 " class="rounded-full ml-20" />
            <h2>Status: {{ character.status }}</h2>
            <p>Species: {{ character.species }}</p>
            <p>Gender: {{ character.gender }}</p>
          </div>
          <div>
            <h5 class=" text-1xl sm:text-2xl mt-8">Episodes {{ character.name }} participated:</h5>
            <div class="grid gap-2 sm:gap-4  grid-cols-2 sm:grid-cols-3  grid-rows-2 sm:grid-rows-3 ">
              <div v-for="episode in character.episode" :key="episode.id" class="episode">
                <div class=" ml-4 sm:ml-11 border-sky-900 mr-5 mb-6">
                  <div class="mt-18 mb-9">
                    <div class="pr-7 mt-10">
                      <div class="border h-70 sm:h-15  w-40 sm:w-60 m-3 p-4 epi bg-sky-500   ">
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
  
  border: 1px solid rgba(5, 5, 68, 0.904);
}
.epi {
  border: 1px solid rgba(5, 5, 68, 0.904);
}
</style>

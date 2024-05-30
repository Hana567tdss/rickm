<script >
import { RouterLink } from 'vue-router'

import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'
import created from './cra.vue'


const CHARACTERS_QUERY = gql`
query episode{
  episodes{
    results{
      id
      name
      air_date
      created
      episode
      characters{
       name
        status
        species
        gender
        image
      
      }
      
    
    } 
  }
 
  characters{
    results{
        id
       name
        status
        species
        gender
        image

      episode{
        name
        air_date
        episode
        created
        
      
      }
      
    
    } 
  }
  
  
  
    locations{
    results{
      id
      name
      dimension
      created
      type
      residents{
         name
        status
        species
        gender
        image
      
      }
      
    
    } 
  }
}
`
export default {
  methods: {
    checkEnter(event) {
      if (event.key === "Enter") {
        alert("Thank you");
      }
    }
  },
  name: 'App',
  
  components: {
    created, // Register the created component
  },
  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading, 
      error
    }
   {
  
    }
  }
}
</script>

<template class=" bg-sky-500">

  <div class="bg-sky-400">
      <div class="flex flex-row">
        <div><img src="/image/episode.jpg"  class="rounded-full ml-10 "/></div>
        <h1 class="font-bold text-7xl  item-center mx-auto p-10 pr-0 shadow-inner shadow-black mt-3 rounded-sm"><span class=" text-sky-700">Rick</span> <span class="text-sky-900">and </span><span class="text-sky-950 mr-4 ">Morky</span></h1>
        <div class="mt-40
        mr-80 font-bold text-sky-900 "><span >Tv-show ,</span> 2013</div>
      </div>  
      
<div>


</div>


<div class=" flex justify-end mt-4">
      <div class="border  rounded-full flex justify-end border-sky-900 pr-9  ">
        <svg class="cursor-pointer mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>  
        <input type="text" class="w-full outline-none text-base  bg-sky-400 text-sky-900  font-bold placeholder-sky-900 pr-7 pl-3" placeholder=" search episode number"/> 
      
    </div>
    </div>
<!--  -->
<div>
        <created></created>
      </div>
<!--  -->

        <div class="flex justify-start gap-5  pt-4  flex-row mt-15">
          <div class="text-sky-950 font-semibold  text-3xl pr-5 pl-6 pt-4 ">IMDB Rating <br>
              <div classs=" flex justify-normal " >
                <div> <img  src="/image/star.jpg" class="w-8 h-8 mt-4 ml-10  rounded-lg"/> </div>
                <div class="text-2xl ml-5">  9.1/10</div>
              </div> 

          </div>

          <div><img  src="/image/z.jpg" class="rounded-2xl"/></div>
          <div class="w-40 h-36"></div>
          <div><img  src="/image/rr.jpg" class="rounded-2xl"/></div>
           <div><div class="text-sky-950 font-semibold  text-3xl pr-5 pl-6 pt-4 ">YOUR Rating <br>
              <div classs=" flex justify-normal " >
                <div> <img  src="/image/star.jpg" class="w-8 h-8 mt-4 ml-10  rounded-lg"/> </div>
                <div class="text-1xl ">
                  <div class="border  rounded-sm flex justify-end border-sky-900 mt-3   ">
                    <svg  @keydown="checkEnter"class="mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                    <input type="text" class="w-25 outline-none text-base rounded-lg bg-sky-400 text-sky-900  font-bold placeholder-sky-900  pl-3" placeholder=" Your Rating please!  " /> 
                    </div>  
                </div>
              </div> 

          </div></div>
        </div>   
  

      <div>
          <div class="p-4 flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg>
           <div> <h3 class="font-bold text-xl mb-2  text-sky-800 ml-6">Storyline <br/></h3></div>
            <p class="ml-14 mt-4 pb-8"> Rick Sanchez, an alcoholic, nihilistic super-scientist, and his easily distressed grandson, Morty Smith to parallel <br>dimensions and exotic planets with extraterrestrials. These adventures commonly cause trouble for Morty's family<br> -Jerry, Beth,and Summer -who are often dragged along as well.</p>
          </div>
      </div>


   <div  class="flex  flex-row ml-7 mx-auto ">

    <div class="max-w-sm rounded overflow-hidden shadow-lg ml-60  bg-sky-600">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-sky-800">Genres</div>
      <p class="text-gray-700 text-base">
                    Animation    Science-Fiction   Comedy   Adventure  
                    Fantasy
      </p>
             
      </div>
      
      
    </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg ml-10  bg-sky-600 ">
        <div class="px-6 py-4">
          <div class="flex flex-row">
          <div class="font-bold text-xl mb-2  text-sky-800">Stars </div>
          <div> <svg class="ml-5 mt-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M21.886 5.536A1.002 1.002 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13a.998.998 0 0 0 1.644 0l9-13a.998.998 0 0 0 .064-1.033zM12 17.243 4.908 7h14.184L12 17.243z"></path></svg> </div>
        </div>
      
          <p class="text-gray-700 text-base">
                      Rick Sanchez, Spaner 
                      Grammer,
                        chris parenll
          </p>
        </div>
    

      
</div class="flex  flex-row">
    <div class="max-w-sm rounded overflow-hidden shadow-lg ml-10  bg-sky-600">
    <div class="px-6 py-4">
      <div class="flex flex-row">
        
      <div class="font-bold text-xl mb-2  text-sky-800">Creators </div>
      <div>  <svg class="ml-5 mt-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M21.886 5.536A1.002 1.002 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13a.998.998 0 0 0 1.644 0l9-13a.998.998 0 0 0 .064-1.033zM12 17.243 4.908 7h14.184L12 17.243z"></path></svg>
      </div>
    </div>

      <p class="text-gray-700 text-base">
        Dan Harmon  Justin
        roiland
      </p>
      </div>
    </div>
  </div>
     
   <div>
    <div class="flex flex-row mt-7  ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg>

      <RouterLink to="/episode/1"> <div><a href=#><h2 class="font-bold text-xl mb-2  text-sky-800 ml-6  cursor-pointer">Episodes</h2></a></div></RouterLink>

      <RouterLink to="/episode/1"> 
        <div ><img src="/image/tv.jpg" alt="tv" class="w-15 h-10 rounded-full ml-6 cursor-pointer"></div>
     </RouterLink> 

      <div  class="font-normal text-xl mb-2  text-sky-800 ml-14  cursor-pointer"> Go To</div>

     <RouterLink to="/episode/1"> 
              <ul class="ml-12 mt-4 cursor-pointer">
                    <li>>> Last Episode</li><br>
                     <li>>>Top-Rated</li>
                </ul>
         </RouterLink> 

      <RouterLink to="/episode/1">
        <div ><img src="/image/h5.jpg" class="ml-40 rounded-lg"/></div>
      </RouterLink><br> 
    </div>
       <!-- episodes list -->
       <div></div>
       <div id="app">
    <p v-if="error">Something went wrong...</p>
    <p v-if="loading">Loading...</p>
    <div v-else>
      <div class="mt-7 mb-12">
          <div class="  flex justify-start overflow-y-auto" >
              <div v-for="episode in result.episodes.results" :key="episode.id" class="episode">
              <div  class=" border h-15 w-60 m-3 p-4 shadow-sm shadow-sky-950 bg-sky-400"> 
                    <RouterLink :to="{ name: 'episode', params: { id: episode.id }}">
                    <div>
                  <h2 class="text-2xl">{{ episode.episode }}</h2>
                  <h2 class="text-1xl ">{{ episode.name }}</h2>
                    </div>
                    </RouterLink>
              </div> 
            </div>
          </div>
      </div>


    </div>
  </div>
<!-- episodes -->

       
     






    
      



   </div>
   
      
   <div>
    <div class="mt-1">
      <div class="flex flex-row mt-5  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg>
        <RouterLink to="/character/1">
        <div><a href=#><h2 class="font-bold text-xl mb-2  text-sky-800 ml-6  cursor-pointer">Characters</h2></a></div>
        </RouterLink>

        <RouterLink to="/character/1">
        <div > <img src="/image/cattr.jpg" alt="tv" class="w-15 h-10 rounded-full ml-6 cursor-pointer"></div>
      </RouterLink>

      <RouterLink to="/character/1"><div  class="font-normal text-xl mb-2  text-sky-800 ml-5 cursor-pointer">
         Top Casts</div>
        </RouterLink>

         <RouterLink to="/character/1">
      <div ><img src="/image/characters1.jpg" class="ml-40 rounded-lg "/></div>
        </RouterLink>
      
       
      
    </div>
  <!-- characcters -->
  
  <div  class="mt-8 mb-12">
  <div class="  flex justify-start overflow-y-auto" >
        <div v-for="character in result.characters.results" :key="character.id" class="character">
          <div  class=" border-none rounded-md h-18 w-40 m-3 p-2 shadow-sm bg-sky-500">
            <RouterLink :to="{ name: 'character', params: { id: character.id }}">
        <img :src="character.image" :alt="character.name" width="100" class=" ml-4 rounded-2xl">
        <h2 class="text-1xl ml-4">{{ character.name }}</h2> 
        </RouterLink>
       
      </div>
      </div>
    </div>
  </div>
  
  <!-- chargfg -->
    </div>
   </div>



   <div>
    <div class="mt-3">
      <div class="flex flex-row mt-5  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path></svg>
        <RouterLink to="/location/1">
          <div><h2 class="font-bold text-xl mb-2  text-sky-800 ml-6  cursor-pointer">Location</h2></div>
        </RouterLink>
        <RouterLink to="/location/1">
          <div > <img src="/image/loca.jpg" alt="tv" class="w-15 h-10 rounded-full ml-6 cursor-pointer"></div>
        </RouterLink>
        <RouterLink to="/location/1">
          <div ><img src="/image/liveplace.jpg" class="ml-40 rounded-lg"/></div>
        </RouterLink>
       
      
    </div>
    </div>
<!-- locatiom -->
<div class="mb-30 mt-8">
    <div class="  flex justify-start overflow-y-auto" >
      <div v-for="location in result.locations.results" :key="location.id" class="location">
        <div  class=" border-none h-15 w-60 m-3 p-4 bg-sky-500 rounded-3xl ">
          <RouterLink :to="{ name: 'location', params: { id: location.id }}">
              <h2 class="text-2xl ">{{ location.name }}</h2>
            <h2 class=" ">{{ location.type }}</h2>
          </RouterLink>
        </div>
      </div>
    </div>
</div>
<!-- locatiom -->



   </div>



    <div>
      <div class="flex justify-end mt-14 gap-5  mb-3 mr-8">
        <div class="inline-block bg-sky-800 rounded-full px-4 py-1 text-sm font-semibold text-sky-400 mr-2 cursor-pointer"> More</div>
        <div class="inline-block bg-sky-800 rounded-full px-4 py-1 text-sm font-semibold text-sky-400 mr-2 cursor-pointer">FQT</div>
        <div class="inline-block bg-sky-800 rounded-full px-4 py-1 text-sm font-semibold text-sky-400 mr-2 cursor-pointer">User review</div>
      </div>
    </div>




   <div class="border  border-sky-900  w-100% mb-7">
     </div>

     <div>

          <div class="flex justify-center  gap-2">
     
            <div class=" font-normal text-xl mb-2  text-sky-800 ml-14 pt-3  cursor-pointer"><p> Follow Us :</p></div>
              <div class="pt-7 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform:msFilter"><path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path></svg></div>

              <div class=" pb-8 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: msFilter"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg></div>

              <div class="pt-7 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform:msFilter"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path></svg></div>
           </div>
     </div>



     <div class="flex justify-end">
      <div class="font-normal  pr-8">   &copy; ,2024</div>
     </div>

</div>

</template>

<style scoped>
.episode{
  display: block;
  
}
</style>

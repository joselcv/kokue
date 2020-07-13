<template>
   <v-layout row wrap
       style="background-image: url(img/WEBP/background@2x.webp);
            background-size: cover; padding-top:100px"
   >
      
        <v-layout justify-start style="margin-top:50px; padding-left:30px">
          <v-flex xs11 md4  mt-5>
            <label  style="font-family: 'DM Sans', sans-serif !important; ">Categoria:</label>
              <v-select
              v-model="seleccion"
              @change="hola"
              style="margin-top:10px; font-family: 'DM Sans', sans-serif !important;"
              :items="itemSelect"
              label="--Seleccionar"
              solo
            ></v-select>
          </v-flex>
        </v-layout>

       <Caruseles v-if="seleccion == 'Todo'" />
       <FiltradoCategoria  v-if="seleccion != 'Todo' && seleccion != ''" />

   </v-layout>
</template>
<script>

import Caruseles from '@/components/Caruseles.vue';
import FiltradoCategoria from '@/components/FiltradoCategoria.vue';
import {mapMutations} from 'vuex';
// import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
   data:()=>({
     seleccion:'Todo',
     itemSelect:['Todo','Frutas','Verduras','Hierbas y Especias']
   }),
   components:{
      Caruseles,
      FiltradoCategoria
      
   },
   methods: {
     ...mapMutations(['changeStateCategoria']),
     hola(){
       console.log(this.seleccion)
       this.changeStateCategoria(this.seleccion)
     }
   },
}
</script>



<template>
    <v-layout row wrap>
                 <v-layout row wrap v-if="categoria==='Frutas'">
                 <v-flex xs12 sm6 md4 
                  v-for="(item,index1) in frutas"
                          :key="index1"
                 >
                        <Catalogo
                          :imagen="item.img"
                          :title="item.title"
                         />
                  </v-flex>   
                  </v-layout>   

                  <v-layout row wrap v-if="categoria==='Verduras'">         
                 <v-flex xs12 sm6 md4 
                  v-for="(item,index2) in verduras"
                          :key="index2"
                 >
                        <Catalogo
                          :imagen="item.img"
                          :title="item.title"
                         />
                  </v-flex>              
                  </v-layout>              
                  <v-layout row wrap v-if="categoria === 'Hierbas y Especias'">
                 <v-flex xs12 sm6 md4 
                  v-for="(item,index3) in hiervas_especias"
                          :key="index3"
                 >
                        <Catalogo
                          :imagen="item.img"
                          :title="item.title"
                         />
                  </v-flex>
                  </v-layout>                  
    </v-layout>
</template>
<script>
import Catalogo from '@/components/Catalogo.vue';
import frutas from '@/components/listados/ListOfFrutas.js';
import verduras from '@/components/listados/ListOfVerduras.js';
import HiervasEspecias from '@/components/listados/ListOfHierbasEspecias.js';
import {mapState} from 'vuex';
export default {
    data:() =>({
       frutas:frutas,    
       verduras:verduras,
       hiervas_especias:HiervasEspecias
    }),
    computed: {
      ...mapState(["categoria"])
    },
    components:{
        Catalogo,
        
    }
}
</script>
<template>
    <v-layout row wrap>
        <v-flex xs12 style="margin-bottom:100px; padding:0px 20px 0px 20px">

          <v-flex layout justify-center>
            <h3 
            style="
             
            font-size:40px;
            font-family: 'DM Sans', sans-serif !important;
            color:#539284;">Frutas</h3>
          </v-flex>     
                <carousel 
                  class="carusel1"
                        
                        :nav="true" 
                        :responsive="{
                          0:{items:1,nav:true },
                          600:{items:2,nav:true,margin:15 },
                           830:{items:3,nav:true,margin:15 },
                        }"
                        > 
                        <Catalogo 
                          v-for="(item,index) in frutas"
                          :key="index"
                          :imagen="item.img"
                          :title="item.title"
                          
                          />
                
                        </carousel>
          </v-flex>
      <v-flex xs12 style="margin-bottom:100px; padding:0px 20px 0px 20px">
        <v-flex layout justify-center>
            <h3 
            style="
            margin-top:50px; 
            font-size:40px;
            font-family: 'DM Sans', sans-serif !important;
            color:#539284;">Verduras</h3>
                </v-flex>  
                    <carousel 
                    class="carusel1"
                             
                          :nav="true" 
                          :responsive="{
                            0:{items:1,nav:true },
                            600:{items:2,nav:true,margin:15 },
                             830:{items:3,nav:true,margin:15 },
                          }"
                          > 
                          <Catalogo 
                            v-for="(item,index) in verduras"
                            :key="index"
                            :imagen="item.img"
                            :title="item.title"
                            
                            />
                  
                          </carousel>
      </v-flex>
      <v-flex xs12 style="margin-bottom:100px; padding:0px 20px 0px 20px">
            <v-flex layout justify-center>
                <h3 
                style="
                margin-top:50px; 
                font-size:40px;
                font-family: 'DM Sans', sans-serif !important;
                color:#539284;">Hierbas y Especias</h3>
              </v-flex>  
                      <carousel 
                      class="carusel1"
                               
                            :nav="true" 
                            :responsive="{
                              0:{items:1,nav:true },
                              600:{items:2,nav:true,margin:15 },
                              830:{items:3,nav:true,margin:15 },
                            }"
                            > 
                            <Catalogo 
                              v-for="(item,index) in HiervasEspecias"
                              :key="index"
                              :imagen="item.img"
                              :title="item.title"
                              
                              />
                    
                            </carousel>
          </v-flex>
    </v-layout>
</template>

<script>
import carousel from 'vue-owl-carousel';
import Catalogo from '@/components/Catalogo.vue';
import frutas from '@/components/listados/ListOfFrutas.js';
import verduras from '@/components/listados/ListOfVerduras.js';
import HiervasEspecias from '@/components/listados/ListOfHierbasEspecias.js';
export default {
    data:()=>({
        frutas:frutas,
        verduras:verduras,
        HiervasEspecias:HiervasEspecias
    }),
    components:{
        carousel,
      Catalogo,
    }
}
</script>
<style>
     .carusel{
       margin-top: 50px;
     }
     .carusel1{
       margin-top: 50px;
     }
</style>
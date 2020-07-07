<template>
   <v-layout row wrap
       style="background-image: url(img/WEBP/background@2x.webp);
            background-size: cover; padding-top:100px"
   >
      
      <v-flex xs12 style="margin-bottom:100px; padding:0px 20px 0px 20px">
          <v-flex layout justify-center>
            <h3 
            style="
            margin-top:100px; 
            font-size:40px;
            font-family: 'DM Sans', sans-serif !important;
            color:#539284;">Frutas</h3>
          </v-flex>     
                <carousel 
                  class="carusel1"
                        loop
                        :nav="false" 
                        :responsive="{
                          0:{items:1,nav:false },
                          600:{nav:false,margin:15 },
                        }"
                        > 
                        <Catalogo 
                          v-for="(item,index) in items"
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
                          loop   
                          :nav="false" 
                          :responsive="{
                            0:{items:1,nav:false },
                            600:{items:3,nav:false,margin:15 },
                          }"
                          > 
                          <Catalogo 
                            v-for="(item,index) in items"
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
                            loop   
                            :nav="false" 
                            :responsive="{
                              0:{items:1,nav:false },
                              600:{items:3,nav:false,margin:15 },
                            }"
                            > 
                            <Catalogo 
                              v-for="(item,index) in items"
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
export default {
   data:()=>({
       items: [
      {
        title: "Pimentón",
        img: "img/WEBP/product_1@2x.webp"
      },
      {
        title: "Limón Amarillo",
        img: "img/WEBP/product_2@2x.webp"
      },
      {
        title: "Lechuga",
        img: "img/WEBP/product_3@2x.webp"
      },
    ],
       items1: [
      {
        title: "Pimentón",
        img: "img/WEBP/product_1@2x.webp"
      },
      {
        title: "Limón Amarillo",
        img: "img/WEBP/product_2@2x.webp"
      },
      {
        title: "Lechuga",
        img: "img/WEBP/product_3@2x.webp"
      },
    ]
   }),
   components:{
      carousel,
      Catalogo
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


<template>
       <v-layout class="contenedor" row wrap 
       style="background-image: url(img/WEBP/background@2x.webp);
            background-size: cover; ">
          <v-flex xs12 layout justify-center>
        <div>
         <v-card color="transparent" elevation="0">
                    <v-card-title> 
                        <v-flex layout justify-center>
                            <h3 style="font-size:30px; color:#FF7F00">{{products.Hierbas_y_especias}}</h3>
                        </v-flex>
                    </v-card-title>
                    <v-card-text>
                        <v-flex layout justify-center>
                            <img src="img/WEBP/ESPECIAS 1.png" alt="no hay imagenes" width="80%">
                        </v-flex>
                    </v-card-text>
                    <v-card-text>
                         Creemos en nuestros productores y en su casta ancestral hecha arte. 
                         La intención de Kokue es edificar y promover los altos estándares de 
                         calidad con los que se cosecha en el campo. Queremos para ti alimentos 
                         frescos y saludables. Por eso trabajamos en crear una consciencia de vida
                          sostenible mediante una filosofía virtual. Imagínate poder realizar tus 
                          compras desde la comodidad de tu hogar con la libertad que facilitan las 
                          plataformas virtuales. El valor agregado que ofrecemos es que puedas apreciar 
                          la estética de cada producto. La belleza de los alimentos se hace viva cuando 
                          tienes una experiencia física de compra.
                    </v-card-text>
                </v-card>
         </div>
         </v-flex>
          <v-flex xs12 layout justify-center>
        <div>
         <v-card color="transparent" elevation="0">
                    <v-card-title> 
                        <v-flex layout justify-center>
                            <h3 style="font-size:30px; color:#FF7F00">{{products.Durazno}}</h3>
                        </v-flex>
                    </v-card-title>
                    <v-card-text>
                        <v-flex layout justify-center>
                            <img src="img/WEBP/DURAZNO 3.png" alt="no hay imagenes" width="80%">
                        </v-flex>
                    </v-card-text>
                    <v-card-text>
                         Creemos en nuestros productores y en su casta ancestral hecha arte. 
                         La intención de Kokue es edificar y promover los altos estándares de 
                         calidad con los que se cosecha en el campo. Queremos para ti alimentos 
                         frescos y saludables. Por eso trabajamos en crear una consciencia de vida
                          sostenible mediante una filosofía virtual. Imagínate poder realizar tus 
                          compras desde la comodidad de tu hogar con la libertad que facilitan las 
                          plataformas virtuales. El valor agregado que ofrecemos es que puedas apreciar 
                          la estética de cada producto. La belleza de los alimentos se hace viva cuando 
                          tienes una experiencia física de compra.
                    </v-card-text>
                </v-card>
         </div>
         </v-flex>
          <v-flex xs12 layout justify-center>
        <div>
         <v-card color="transparent" elevation="0">
                    <v-card-title> 
                        <v-flex layout justify-center>
                            <h3 style="font-size:30px; color:#FF7F00">{{products.Fresa}}</h3>
                        </v-flex>
                    </v-card-title>
                    <v-card-text>
                        <v-flex layout justify-center>
                            <img src="img/WEBP/FRESA 1.png" alt="no hay imagenes" width="80%">
                        </v-flex>
                    </v-card-text>
                    <v-card-text>
                         Creemos en nuestros productores y en su casta ancestral hecha arte. 
                         La intención de Kokue es edificar y promover los altos estándares de 
                         calidad con los que se cosecha en el campo. Queremos para ti alimentos 
                         frescos y saludables. Por eso trabajamos en crear una consciencia de vida
                          sostenible mediante una filosofía virtual. Imagínate poder realizar tus 
                          compras desde la comodidad de tu hogar con la libertad que facilitan las 
                          plataformas virtuales. El valor agregado que ofrecemos es que puedas apreciar 
                          la estética de cada producto. La belleza de los alimentos se hace viva cuando 
                          tienes una experiencia física de compra.
                    </v-card-text>
                </v-card>
         </div>
         </v-flex>
         </v-layout>
</template>

<script>
import { labels, paragraphs } from "@/lang/lang.js";
import products from '../lang/ListOfProducts.js'
export default {
    data:()=>({
        labels:labels,
        products:products
    }),mounted(){
        console.log("produc ",this.products)
    }
   
}
</script>

<style >
    .indice{
        font-family: 'DM Sans', sans-serif !important;
        font-weight: 600;
        margin-top: 50px;
        color:#539284;

    }
    .contenedor{
        padding-left:8%;
        padding-right:8%;
        margin-top:150px;
    }
    .titulo{
        font-family: 'DM Sans', sans-serif !important;
        margin-top: 50px;
        margin-bottom: 20px;
        font-size: 40px;
        color:#539284;
        
    }
    .parrafo{
         font-family: 'DM Sans', sans-serif !important;
         margin-top: 20px;
    }
</style>
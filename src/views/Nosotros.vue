<template>
       <v-layout class="contenedor" row wrap 
       style="background-image: url(img/WEBP/background@2x.webp);
            background-size: cover; ">
          <v-flex xs12>
        <div>
         <h3 class="titulo">Misión</h3>
         <p class="parrafo">  
            Creemos en nuestros productores y en su casta ancestral hecha arte. 
            La intención de Kokue es edificar y promover los altos estándares de calidad 
            con los que se cosecha en el campo. Queremos para ti alimentos frescos y saludables. 
            Por eso trabajamos en crear una consciencia de vida sostenible mediante una filosofía virtual. 
            Imagínate poder realizar tus compras desde la comodidad de tu hogar con la 
            libertad que facilitan las plataformas virtuales. El valor agregado que ofrecemos es que 
            puedas apreciar la estética de cada producto. La belleza de los alimentos se hace viva cuando 
            tienes una experiencia física de compra.
         </p>
         </div>
        <div>
         <h3 class="titulo">Visión </h3>
         <p class="parrafo">  
            Para el 2025, Kokue se proyecta como una empresa líder en conciencia sostenible
            y comercialización de productos agrícolas a nivel local y nacional. 
            Nuestros estándares de calidad ofrecerán un servicio óptimo, pues tenemos el interés de mantener
            un mejoramiento constante. Es por eso que Kokue tiene el propósito de permitirle
            a los productores edificar un futuro prominente de la mano de la innovación.
            Para cumplir con nuestras metas, Kokue ofrece mantener un servicio E-Commerce 
            con las mejores condiciones tecnológicas del momento. 
            Queremos brindar una experiencia atractiva y única de compra, por lo que iremos 
            de la mano con el progreso regional. Nuestras instalaciones físicas se convertirán 
            en un espacio para disfrutar de la elegancia, la creatividad y la simpatía que las 
            bondades del campo tienen para ofrecerle a nuestros visitantes.
            </p>
         </div>
        <div>
         <h3 class="titulo">Valores corporativos  </h3>
            <h4 class="indice"> 3.1. Estética</h4>
         <p class="parrafo">
               Lo bello se percibe en la esencia y arte cada producto de nuestra compañía. 
         </p>
         
            <h4 class="indice"> 3.2. Innovación </h4>
         <p class="parrafo">
               Lo bello se percibe en la esencia y arte cada producto de nuestra compañía. 
         </p>

            <h4 class="indice"> 3.4. Creatividad  </h4>
         <p class="parrafo">
               Kokue se interesa en tu bienestar, por eso buscamos nuevas ideas que nos permitan reinventar el 
               desarrollo nuestra empresa para ofrecerte solo lo mejor.  
         </p>
            <h4 class="indice"> 3.5. Conciencia ambiental  </h4>
         <p class="parrafo">
               Kokue tiene el ideal de preservar el medio ambiente. Es una de las más importantes 
               responsabilidades que asumimos, pues, con cada aporte positivo que damos a la naturaleza, 
               permitimos que las futuras generaciones tengan un mejor lugar para vivir. 
         </p>
            <h4 class="indice"> 3.6. Pasión   </h4>
         <p class="parrafo">
               Tenemos amor por el campo, por sus productos y por nuestros clientes. Queremos ofrecer 
               cada día un mejor servicio para mantener vivo ese cariño por lo nuestro. 
         </p>
            <h4 class="indice"> 3.7. Calidad    </h4>
         <p class="parrafo">
               Es importante que nuestros productos cumplan con los mejores estándares de calidad, para eso, 
               impulsamos a nuestros productores en el desarrollo buenas prácticas agrícolas; 
               así le cumplimos a nuestros clientes con los productos de mayor prestigio de la región.  
         </p>
         </div>
         </v-flex>
         </v-layout>
</template>

<script>
import { labels, paragraphs } from "@/lang/lang.js";
export default {
    data:()=>({
        labels:labels
    }),
   
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
        margin-top:150px
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
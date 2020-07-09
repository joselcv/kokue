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
import {mapState} from 'vuex';
export default {
    data:() =>({
       
    frutas: [
      {
        title: "AGUACATE",
        img: "img/prodctos/Frutas/AGUACATE.png"
      },
      {
        title: "AGUACATE HASS",
        img: "img/prodctos/Frutas/AGUACATE_HASS.png"
      },
      {
        title: "ARANDANO",
        img: "img/prodctos/Frutas/ARANDANO.png"
      },
      {
        title: "AUYAMA",
        img: "img/prodctos/Frutas/AUYAMA.png"
      },
      {
        title: "BANANO",
        img: "img/prodctos/Frutas/BANANO.png"
      },
      {
        title: "BOCADILLO",
        img: "img/prodctos/Frutas/BOCADILLO.png"
      },
      {
        title: "CARAMBOLA",
        img: "img/prodctos/Frutas/CARAMBOLA.png"
      },
      {
        title: "CIRUELA ROJA",
        img: "img/prodctos/Frutas/CIRUELAROJA.png"
      },
      {
        title: "COCO",
        img: "img/prodctos/Frutas/COCO.png"
      },
      {
        title: "CURUBA",
        img: "img/prodctos/Frutas/CURUBA.png"
      },
      {
        title: "DURAZNO",
        img: "img/prodctos/Frutas/DURAZNO.png"
      },
      {
        title: "FEIJOA",
        img: "img/prodctos/Frutas/FEIJOA.png"
      },
      {
        title: "FRESA",
        img: "img/prodctos/Frutas/FRESA.png"
      },
      {
        title: "GRANADILLA",
        img: "img/prodctos/Frutas/GRANADILLA.png"
      },
      {
        title: "GUANABANA",
        img: "img/prodctos/Frutas/GUANABANA.png"
      },
      {
        title: "GUATILA",
        img: "img/prodctos/Frutas/GUATILA.png"
      },
      {
        title: "GUAYABA",
        img: "img/prodctos/Frutas/GUAYABA.png"
      },
      {
        title: "GULUPA",
        img: "img/prodctos/Frutas/GULUPA.png"
      },
      {
        title: "KIWI",
        img: "img/prodctos/Frutas/KIWI.png"
      },
      {
        title: "LIMON",
        img: "img/prodctos/Frutas/LIMON.png"
      },
      {
        title: "LULO",
        img: "img/prodctos/Frutas/LULO.png"
      },
      {
        title: "MANDARINA",
        img: "img/prodctos/Frutas/MANDARINA.png"
      },
      {
        title: "MANGO",
        img: "img/prodctos/Frutas/MANGO.png"
      },
      {
        title: "MANGOSTINO",
        img: "img/prodctos/Frutas/MANGOSTINO.png"
      },
      {
        title: "MANZANA ROJA",
        img: "img/prodctos/Frutas/MANZANAROJA.png"
      },
      {
        title: "MANZANA VERDE",
        img: "img/prodctos/Frutas/MANZANAVERDE.png"
      },
      {
        title: "MARACUYA",
        img: "img/prodctos/Frutas/MARACUYA.png"
      },
      {
        title: "MELON",
        img: "img/prodctos/Frutas/MELON.png"
      },
      {
        title: "MORA",
        img: "img/prodctos/Frutas/MORA.png"
      },
      {
        title: "NARANJA",
        img: "img/prodctos/Frutas/NARANJA.png"
      },
      {
        title: "PAPAYA",
        img: "img/prodctos/Frutas/PAPAYA.png"
      },
      {
        title: "PERA",
        img: "img/prodctos/Frutas/PERA.png"
      },
      {
        title: "PIÑA",
        img: "img/prodctos/Frutas/PINA.png"
      },
      {
        title: "PITAYA",
        img: "img/prodctos/Frutas/PITAYA.png"
      },
      {
        title: "PLATANO VERDE",
        img: "img/prodctos/Frutas/PLATANO VERDE.png"
      },
      {
        title: "PLATANO COLICERO",
        img: "img/prodctos/Frutas/PLATANOCOLICERO.png"
      },
      {
        title: "SANDIA",
        img: "img/prodctos/Frutas/SANDIA.png"
      },
      {
        title: "TAMARINDO",
        img: "img/prodctos/Frutas/TAMARINDO.png"
      },
      {
        title: "TOMATE DE ARBOL",
        img: "img/prodctos/Frutas/TOMATEDEARBOL.png"
      },
      {
        title: "TORONJA ROSADA",
        img: "img/prodctos/Frutas/TORONJAROSADA.png"
      },
      {
        title: "UCHUVA",
        img: "img/prodctos/Frutas/UCHUVA.png"
      },
      {
        title: "UVA MORADA",
        img: "img/prodctos/Frutas/UVAMORADA.png"
      },
      {
        title: "UVA ROJA",
        img: "img/prodctos/Frutas/UVAROJA.png"
      },
      {
        title: "UVA VERDE",
        img: "img/prodctos/Frutas/UVAVERDE.png"
      },
      ],
    verduras: [
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
    hiervas_especias: [
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
    
    }),
    computed: {
      ...mapState(["categoria"])
    },
    components:{
        Catalogo,
        
    }
}
</script>
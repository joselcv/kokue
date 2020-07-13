
<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout row wrap>
    <v-layout>
    <v-flex xs6 style="margin-left:3%; margin-top:1%;  margin-right:5px; width:580px; background-image:url(img/WEBP/logoKokue.jpeg); background-size:150px">
      <!-- <v-img  src="../../public/img/WEBP/logoKokue.jpeg" width="60%" height="80%"  id="img" /> -->
     </v-flex>
<!--  -->
<v-flex xs2 layout justify-center style="margin:30px 0px 0px 10%;">
               <v-btn id="btnIcon" icon>
                 <img src="../../public/img/WEBP/icon_search@2x.webp" id="imgIcon">
               </v-btn>
               <v-btn id="btnIcon" icon>
                 <img src="../../public/img/WEBP/icon_list@2x.webp" id="imgIcon">
               </v-btn>
               <v-btn  id="btnIcon1" icon>
                 <img src="../../public/img/WEBP/icon_market_empty@2x.webp" id="imgIcon1">
               </v-btn>
               <v-btn class="hidden-md-and-up" id="btnIcon2" @click.stop="drawer = !drawer" icon large>
                  <v-icon style="margin-left:-20px;"> fas fa-bars</v-icon>
              </v-btn>
               <!-- <v-btn class="hidden-sm-and-down" id="btnIcon2" @click.stop="drawer = !drawer" icon >
                  <v-icon> fas fa-bars</v-icon>
              </v-btn> -->
               </v-flex>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
         @change="setVariable"
          v-model="group1"
          active-class="colorSelect text--accent-4"
        >
          <v-list-item >
            <v-list-item-title>{{ labels.start }}</v-list-item-title>
          </v-list-item>

          <v-list-item >
            <v-list-item-title>{{ labels.us }}</v-list-item-title>
          </v-list-item>

          <v-list-item >
            <v-list-item-title>{{ labels.products }}</v-list-item-title>
          </v-list-item>

          <v-list-item >
            <v-list-item-title>{{ labels.contacts }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      
    </v-navigation-drawer>  
</v-layout>
    <v-layout>
      <LandingPage v-if="group1===0"/>
      <Nosotros v-if="group1===1"/>
      <Productos v-if="group1===2"/>
      <Contactos v-if="group1===3"/>
    </v-layout>
<!-- ///////////////////////////////////////////////////////// -->

        </v-layout>
</template>

<script>
import {labels} from '@/lang/lang';
import {mapState,mapMutations} from 'vuex';
import LandingPage from '../views/LandingPage.vue'
import Nosotros from '../views/Nosotros.vue'
import Productos from '../views/Productos.vue'
import Contactos from '@/views/Contactos';
export default {
  data:() =>({
    labels:labels,
    drawer: false,
    group:0
  }),
  components:{
    LandingPage,
    Nosotros,
    Productos,
    Contactos
  },
  watch: {
      group () {
        this.drawer = false
      },
    },computed: {
      ...mapState(["group1"])
    },
    methods: {
   ...mapMutations(["redirect","changeStateTabToolbar"]),
   setVariable(obj){
      this.changeStateTabToolbar(obj)
   }
   
  },
}
</script>
<style scoped>
.colorSelect{
  background-color: #FF7F00;
  color: white;
}
  #toolbar{
    margin-top:20px; 
    margin-bottom:25px; 
    margin-right:20px !important;
  }
  .btnToolbar{
    font-size:18px !important;
    text-transform: capitalize !important;
    font-family: 'Roboto' !important;
    font-weight: 600;
  }
  #img{
    color:#FF7F00; 
    margin-top:20px; 
    height:50%; 
    width:170px
  }

    #imgIcon{
      width:30px
  }
     #imgIcon1{
        width:40px
    }
  #btnIcon{
    margin-top: 10px;
    width:50px; 
    height:50px
  }
  #btnIcon1{
    margin-top: 10px;
    margin-left: 10px;
    width:50px; 
    height:50px
  }
  #btnIcon2{
    margin-top: 10px;
    margin-right: 10px;
    width:30px; 
    height:30px
  }
  @media (max-width: 960px) {
     #btnIcon2{
      margin-top: 15px;
      margin-left: 10px;
      width:40px; 
      height:40px
  }
  }
  @media (max-width: 380px) {
     #img{
    color:#FF7F00;
    height:40%; 
    width:130px;
    margin-top: 25px;
  }
     #imgIcon{
        width:20px
    }
     #imgIcon1{
        width:25px
    }
  #btnIcon{
    margin-top: 10px;
    width:30px; 
    height:30px
  }
  #btnIcon2{
    margin-top: 10px;
    margin-left: 10px;
    width:30px; 
    height:30px
  }
  #btnIcon1{
    margin-top: 10px;
    margin-left: 10px;
    width:30px; 
    height:30px
  }
  }
</style>
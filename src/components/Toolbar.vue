
<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout fluid>
    <v-tabs id="toolbar"  color="#FF7F00" height="110" v-model="group1" @change="hola">
      <v-tabs-slider color="#FF7F00"></v-tabs-slider>
      <v-tab style="margin-left:-50px;padding-left:50px">
        <v-img  src="../../public/img/WEBP/logoKokue.jpeg" height="40" width="170" />
      </v-tab>
     
             <v-tab
             v-for="item in items"
             :key="item"
             class="btnToolbar" >
                  {{item}}
                </v-tab>
                
               <div id="textField">
                <v-text-field solo flat background-color="transparent" prepend-icon="search" style="font-size:18px; margin-top:-5px">
                </v-text-field>
               </div>
               <v-flex xs2 layout justify-center style="margin:auto">
               <v-btn style="width:80px; height:80px" icon>
                 <img src="../../public/img/WEBP/icon_list@2x.webp" width="40">
               </v-btn>
               <v-btn  icon style="margin-left:5px; width:80px; height:80px">
                 <img src="../../public/img/WEBP/icon_market_empty@2x.webp" width="45">
               </v-btn>
               </v-flex>
              </v-tabs>
              <v-tabs-items v-model="group1">
                  <v-tab-item>
                       <LandingPage  />
                    </v-tab-item>
                  <v-tab-item>
                       <Nosotros  />
                    </v-tab-item>
                  <v-tab-item>
                       <Productos  />
                    </v-tab-item>
                  <v-tab-item>
                       <Contactos  />
                    </v-tab-item>
                </v-tabs-items>
        </v-layout>
</template>

<script>
import {labels} from '@/lang/lang';
import {mapState,mapMutations} from 'vuex';
import Nosotros from '@/views/Nosotros.vue';
import LandingPage from '@/views/LandingPage';
import Productos from '@/views/Productos';
import Contactos from '@/views/Contactos';


export default {
  data:() =>({
    labels:labels,
    group:0,
    items: [
          labels.us, labels.products, labels.contacts
        ],
  }),
  computed:{
    ...mapState(["group1"])
  },
  components:{
    Nosotros,
    LandingPage,
    Productos,
    Contactos
  },
  methods: {
   ...mapMutations(["redirect",'changeStateTabToolbar']),
   hola(obj){
    this.changeStateTabToolbar(obj)
   }
  }
}
</script>
<style >
  #toolbar{
    margin-bottom:25px; 
    position: fixed;
    z-index: 2;
    width: 100%;
  }
  .btnToolbar{
    font-size:25px !important;
    text-transform: capitalize !important;
    font-family: 'DM Sans', sans-serif !important;
    font-weight: 700;

  }
  #textField{
    width:35%;
    height:40px; 
    margin:auto; 
    margin-left:70px; 
    border-radius:50px; 
    border-color:#539284 !important; 
    border:2px solid
  }
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
    color:#539284 !important;
}
.theme--light.v-icon {
    color: #539284 !important;
}

.v-icon.v-icon {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-font-feature-settings: "liga";
    font-feature-settings: "liga";
    font-size: 35px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    letter-spacing: normal;
    line-height: 1;
    text-indent: 0;
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 20px;
   
}
</style>

<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout>
    <v-flex xs6 style="margin-left:3%;  margin-right:5px; width:580px">
      <v-img  src="../../public/img/WEBP/logoKokue.jpeg" height="115"  id="img" />
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
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>{{ labels.products }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ labels.education }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ labels.events }}</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>{{ labels.contacts }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

<!-- ///////////////////////////////////////////////////////// -->
        </v-layout>
</template>

<script>
import {labels} from '@/lang/lang';
export default {
  data:() =>({
    labels:labels,
    drawer: false,
      group: null,
  }),
  watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>
<style scoped>
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
<!-- Desarrollado por: José luis casanova -->
<template>
  <v-layout row wrap >
       <toolbar class="hidden-sm-and-down" />
       <toolbarResponsive class="hidden-md-and-up" />
    <v-layout id="container"  row wrap layout justify-center>
      <v-flex xs12 layout justify-center>
              <p 
              id="pHead"
              align="center">
            Frutas realmente frescas, traídas
              directamente del campo.</p>
             
      </v-flex>


      <v-flex xs12 md7 layout justify-center style="display:flex; margin-top:30px;" class="hidden-sm-and-down">
        <div style="display:flex; background-color:white; border-radius:10px; width:950px; height:60px; margin:0px 80px 0px 80px" >
        <v-flex xs3 style="margin-top:5px;display:flex;">
         <img src="../../../public/img/WEBP/col_flag@2x.webp" width="35px" style="margin:12px 10px 15px 10px">
         
            <v-select
          :items="itemSelect"
          label="Solo field"
          solo
          flat
        ></v-select>
          
        </v-flex>
        <div style="background:gray; width:2px; height:40px; margin:auto; margin-left:30px;"></div>
        <v-flex xs6  style="margin-top:5px; display:flex;">
        <v-text-field solo flat  label="Agrega tu dirección y te avisamos cuando estemos listos en tu zona" style="margin-right:30px; margin-left:-100px"></v-text-field>
        <v-flex class="hidden-md-and-down" xs4 style="display:flex; background-color:#FEEDDB; border:1px; border-size:0.4px;  border-style:solid; border-color:#539284; border-radius:10px; height:40px; margin-top:5px; margin-right:30px">
             <img src="../../../public/img/WEBP/location@2x.png" width="15px" height="25px" style="margin:6px 4px 0px 25px">
             <v-text-field  color="orange darken-2"   label="Ubicación actual" solo flat background-color="transparent" style="margin-top:-5px"></v-text-field>
        </v-flex>
        <v-flex layout justify-center class="hidden-lg-and-up" xs2 style="background-color:#FEEDDB; border-radius:10px; height:40px; margin-top:5px; margin-right:30px; padding-right:20px">
              <img src="../../../public/img/WEBP/location@2x.png" width="15px" height="25px" style="margin:6px 4px 0px 25px">
        </v-flex>
        </v-flex>
        </div>
      </v-flex>

      <v-flex xs12 layout justify-center style="display:flex; margin-top:30px;" class="hidden-md-and-up">
        <div style="display:flex; background-color:white; border-radius:10px; width:950px; height:60px;" >
        <v-flex xs4 style="margin-top:5px;display:flex;">
         <img src="../../../public/img/WEBP/col_flag@2x.webp" width="20px" height="20px" style="margin:12px 0px 15px 5px">
         
          <v-select
          :items="itemSelect"
          label="Solo field"
          solo
          flat
        ></v-select>
          
        </v-flex>
        <div style="background:gray; width:2px; height:40px; margin:auto; margin-left:30px;"></div>
        <v-flex xs5  style="margin-top:5px; display:flex;">
        <v-text-field solo flat  label="Agrega tu dirección y te avisamos cuando estemos listos en tu zona" style="margin-right:10px; margin-left:-50px"></v-text-field>
        <v-flex class="hidden-md-and-down" xs4 style="display:flex; background-color:#FEEDDB; border-radius:10px; height:40px; margin-top:5px; margin-right:20px">
              <img src="../../../public/img/WEBP/location@2x.png" width="15px" height="25px" style="margin:6px 4px 0px 25px">
             <v-text-field  label="Ubicación actual" solo flat background-color="transparent" style="margin-top:-5px"></v-text-field>
        </v-flex>
        <v-flex layout justify-center class="hidden-lg-and-up" xs3 style="background-color:#FEEDDB; border-radius:10px; height:40px; margin-top:5px; margin-right:30px; padding-right:20px">
               <img src="../../../public/img/WEBP/location@2x.png" width="15px" height="25px" style="margin:6px 4px 0px 25px">
        </v-flex>
        </v-flex>
        </div>
      </v-flex>



      <v-flex xs12 md2 layout justify-center style="margin-top:30px;" class="hidden-md-and-down">
        <v-btn color="#FF7F00" dark id="btnWatch">
          Registrarme
        </v-btn>
      </v-flex>
      <v-flex xs12 layout justify-center style="margin-top:30px;" class="hidden-lg-and-up">
        <v-btn color="#FF7F00" dark id="btnWatchResponsive">
          Registrarme
        </v-btn>
      </v-flex>
    </v-layout>
    
    <div class="hidden-md-and-down" style="padding:40px 100px 0px 0px; display:flex; height:180px; width:1200px; background:#E6E6E6; margin:auto; border-radius: 100px; z-index:1; margin-top:-90px; margin-bottom:15px">
              <v-card
                   v-for="(itemCard,index) in itemsCardCenter"
                  :key="index"
                  class="mx-auto"
                  max-width="200"
                  flat
                  color="transparent"
                >
            <v-list-item three-line style="width:310px;">        
              <v-btn style="width:25%; height:10%; margin-right:10px" icon>
                 <img :src="itemCard.img" width="50%">
               </v-btn>          
              <v-flex xs4 md6 lg8>
                <v-list-item-title class="mb-1" style="color:#539284; font-weight:600;">{{itemCard.title}}</v-list-item-title>
                <v-list-item-subtitle style="color:#539284;">{{itemCard.text}}</v-list-item-subtitle>
              </v-flex>
            </v-list-item>
          </v-card>
    </div>
    <v-layout id="container2" row wrap>
      <v-flex xs12>
      <v-flex class="hidden-sm-and-down" xs12 layout justify-center style="height:5px; margin:80px 0px 100px 0px">
      
          <p align="center" id="titleH2">Compra como si estuvieras en
            el market pero mejor
            </p>
      
     </v-flex>
      <v-flex class="hidden-md-and-up" xs12 layout justify-center style="height:5px; margin:30px 15px 150px 15px">
      
          <p align="center" id="titleH2">Compra como si estuvieras en
            el market pero mejor
            </p>
      
     </v-flex>
     <v-flex xs12 class="hidden-sm-and-down">
     <v-layout mt-5>
       <v-flex xs12 md6 layout justify-end style="margin-top:-280px">
         <img src="../../../public/img/WEBP/DURAZNO 4.png" alt="" width="63%" height="400px" style="margin-right:20px">
       </v-flex> 
     <v-flex xs12 md6 style="padding-left:20px;margin-top:-250px">
       <p id="titleContainer2">
         Frutas
       </p>
       <p id="paragraphContainer2">
         Aquí puedes encontrar todas las frutas frescas que con el 
         talento de nuestros productores y sus conocimientos 
         relevados de generación en generación traemos para ti. Haz tu kokupedido.
       </p>
     </v-flex> 
     </v-layout> 
     <v-layout mt-5 >
     <v-flex xs12 md6 style="margin-top:30px" layout justify-end>
        <v-flex xs12 flex-column>
          <div style="text-align: -webkit-right;">
          <p align="left" id="titleContainer2Left">
            Verduras
          </p>
          <p id="paragraphContainer2Left">
            Te ofrecemos la frescura de las mejores verduras del mercado que con amor, 
            son cultivadas por las personas que surcan la tierra día a día. 
          </p>
          </div>
          </v-flex>
        </v-flex>  
        <v-flex xs12 md6 layout justify-start >
          <img id="imgCenter" src="../../../public/img/WEBP/BROCOLI 2.png" alt="" width="63%" height="350px">
        </v-flex>
    </v-layout>
    <v-layout mt-5>
    <v-flex xs12 md6 layout justify-end>
         <img src="../../../public/img/WEBP/ESPECIAS 1.png" alt="" width="64%" height="250px" style="margin:15px 20px 0px 0px ">
       </v-flex> 
     <v-flex xs12 md6 style="padding-left:20px; margin-top:15px">
       <p id="titleContainer2">
         Hiervas y especias.
       </p>
       <p id="paragraphContainer2">
         Dale sabor a tus comidas y disfruta de todos los matices nuestras especias pueden ofrecerte.
         Mantén la  creatividad, Kokue te da los ingredientes. 
       </p>
     </v-flex>  
     </v-layout>
     </v-flex>

    <v-layout class="hidden-md-and-up" row wrap >
         <v-flex xs12 layout justify-center style="margin-top:-400px">
         <img src="../../../public/img/WEBP/DURAZNO 4.png" alt="" width="90%" height="300px" >
       </v-flex> 
     <v-flex xs12 style="padding-left:20px;margin-top:-50px">
       <p align="center" id="titleContainer2Responsive">
         Frutas
       </p>
       <p align="center" id="paragraphContainer2Responsive">
         Aquí puedes encontrar todas las frutas frescas que con el 
         talento de nuestros productores y sus conocimientos 
         relevados de generación en generación traemos para ti. Haz tu kokupedido.
       </p>
     </v-flex> 
     
     <v-flex xs12  layout justify-start >
          <img id="imgCenter" src="../../../public/img/WEBP/BROCOLI 2.png" alt="" width="90%" height="300px">
      </v-flex>
        <v-flex xs12 style="padding-left:20px;margin-top:50px">
          <p align="center" id="titleContainer2Responsive">
            Verduras
          </p>
          <p align="center" id="paragraphContainer2Responsive">
            Te ofrecemos la frescura de las mejores verduras del mercado que con amor, 
            son cultivadas por las personas que surcan la tierra día a día.
          </p>
          </v-flex>

        
    <v-flex xs12 layout justify-center>
         <img src="../../../public/img/WEBP/ESPECIAS 1.png" alt="" width="90%" height="300px" >
       </v-flex> 
     <v-flex xs12 md6 style="padding-left:20px; margin-top:50px;">
       <p align="center" id="titleContainer2Responsive">
         Hiervas y especias.
       </p>
       <p align="center" id="paragraphContainer2Responsive">
         Dale sabor a tus comidas y disfruta de todos los matices nuestras especias pueden ofrecerte.
         Mantén la  creatividad, Kokue te da los ingredientes.
       </p>
     </v-flex>  
    </v-layout>


     </v-flex>
    </v-layout>

    <v-layout style="padding:50px 50px 0px 50px;
    padding-bottom:5%; background-color:#eceeed" row wrap >
    <v-flex xs12 layout justify-center style="height:5px; margin-bottom:200px" row wrap>
   
          <p align="center"  id="titleH2Products">Algunos de nuestros prodctos
            </p>

      <v-flex xs12 layout justify-center style="margin-bottom:300px">
        <p id="paragraphCenter">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
labore et dolore magna aliquyam erat, sed diam voluptua.</p>
      </v-flex>
     </v-flex>
     <v-flex xs12>
     <carousel 
          :autoplay="true" 
          loop 
          autoplayHoverPause  
          :nav="false" 
          center
          :responsive="{
            0:{items:1,nav:false },
            600:{items:2,nav:false,margin:5 },
          }"
          style="margin-top:300px"
          >
           <Products 
             v-for="(item,index) in items"
            :key="index"
            :imagen="item.img"
            :title="item.title"
             />
  
          </carousel>
          </v-flex>
      <!-- <VuePerfectScrollbar class="scroll-area" :settings="settings" style="margin:280px 10px 0px 0px;">
        <v-layout>
          <v-card
            color="transparent"
            style="margin:0px 10px 0px 0px; margin-left:10px; border-radius:0%"
            width="700"
            height="550"
            v-for="(item,index) in items"
            :key="index"
          >
            <img width="700px" height="550" :src="item.img" alt="Esta imagen esta rota" />
            <p align="right" id="pCard">{{item.title}}</p>
          </v-card>
        </v-layout>
      </VuePerfectScrollbar> -->
    </v-layout>

   <!-- <v-layout style="padding-bottom:5%; padding-top:50px; background-color:#eceeed; " row wrap class="hidden-md-and-up">
    <v-flex xs12 layout justify-center style="height:5px; margin-bottom:200px" row wrap>
          <p align="center"  id="titleH2Products">Productos y descuentos destacados de la semana 
            </p>

      <v-flex xs12 layout justify-center style="padding:0px 15px 0px 15px">
        <p align="center" id="paragraphCenterResponsive">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
      </v-flex>
     </v-flex>
      <VuePerfectScrollbar class="scroll-area" :settings="settings" style="margin:300px 10px 100px 0px;">
        <v-layout>
          <v-card
            color="transparent"
            style="margin:0px 10px 0px 10px; border-radius:0%"
            width="400"
            height="450"
            v-for="(item,index) in items"
            :key="index"
          >
            <img width="400px" height="100%" :src="item.img" alt="Esta imagen esta rota" />
            <p align="right" id="pCardResponsive">{{item.title}}</p>
          </v-card>
        </v-layout>
      </VuePerfectScrollbar>
    </v-layout> -->
    
    <v-layout row wrap style="background-color:#eceeed; padding-top:10px; height:1050px">
        <v-flex xs12 layout justify-center>
              <p align="center"  id="titleH2Carrousel">Nuestros productores y sus marcas</p>
        </v-flex>
   
      <v-flex xs12 style="background-color:#eceeed; padding-top:2%;  padding-bottom:5%" class="hidden-md-and-down">
          <v-flex xs12 style=" display:flex;" layout justify-center>
            <v-card 
            style="margin-left:1%;background-color:#eceeed;" width="20%" height="100%" elevation="0"  
            v-for="(item,index) in itemSpeakers"
            :key="index">
              <v-card-title style="justify-content: space-around">
                <v-list-item-avatar width="80%" height="80%">
                  <img :src="item.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:0">
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:#539284; font-size:35px;font-weight:500;line-height: 110%; ">{{item.title}}</p>
                     <v-flex layout justify-center><img :src="item.img2" width="200"  height="50" /></v-flex>
                   <p id="paragraphContainer3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab, 
                    </p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
      </v-flex>

      <v-flex row wrap xs12 style="background-color:#eceeed; padding-top:2%;  padding-bottom:5%" class="hidden-lg-and-up" layout justify-center>
          <v-flex xs12 layout justify-center>
          <v-flex xs12 v-for="(item,index) in itemSpeakers1" :key="index" style=" display:flex;" layout justify-center>
            <v-card 
            style="margin-left:1%;background-color:transparent;" width="400px" height="100%" elevation="0"  
            :key="index">
              <v-card-title  style="justify-content: space-around">
                <v-list-item-avatar width="80%" height="80%">
                  <img :src="item.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:10px">
             <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:#539284; font-size:25px;font-weight:500;line-height: 110%; ">{{item.title}}</p>
                     <v-flex layout justify-center><img :src="item.img2" width="100"  height="30" /></v-flex>
                   <p id="paragraphContainer4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab, 
                    </p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
          </v-flex>
          <v-flex xs12 layout justify-center>
          <v-flex xs12 style=" display:flex;" layout justify-center  v-for="(item,index) in itemSpeakers2" :key="index">
            <v-card 
            style="margin-left:1%;background-color:transparent;" width="400px" height="100%" elevation="0"  
           >
              <v-card-title style="justify-content: space-around">
                <v-list-item-avatar width="80%" height="80%">
                  <img :src="item.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:10px">
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:#539284; font-size:25px;font-weight:500;line-height: 110%; ">{{item.title}}</p>
                     <v-flex layout justify-center><img :src="item.img2" width="100"  height="30" /></v-flex>
                   <p id="paragraphContainer4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab, 
                    </p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
          </v-flex>
         <v-flex xs12 layout justify-center>
          <v-flex xs12 style=" display:flex;" layout justify-center  v-for="(item,index) in itemSpeakers3" :key="index">
            <v-card 
            style="margin-left:1%;background-color:transparent;" width="400px" height="100%" elevation="0"  
           >
              <v-card-title style="justify-content: space-around">
                <v-list-item-avatar width="80%" height="80%">
                  <img :src="item.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:10px">
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:#539284; font-size:25px;font-weight:500;line-height: 110%; ">{{item.title}}</p>
                     <v-flex layout justify-center><img :src="item.img2" width="100"  height="30" /></v-flex>
                   <p id="paragraphContainer4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab, 
                    </p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
          </v-flex>
          <v-flex xs12 layout justify-center>
          <v-flex xs12 style=" display:flex;" layout justify-center  v-for="(item,index) in itemSpeakers4" :key="index">
            <v-card 
            style="margin-left:1%;background-color:transparent;" width="400px" height="100%" elevation="0"  
           >
              <v-card-title style="justify-content: space-around">
                <v-list-item-avatar width="80%" height="80%">
                  <img :src="item.img" />
                 </v-list-item-avatar>
              </v-card-title>
              <v-card-text style="padding-left:10px">
                <v-flex xs12 flex-column  layout justify-center>
                    <p align="center" style=" color:#539284; font-size:25px;font-weight:500;line-height: 110%; ">{{item.title}}</p>
                     <v-flex layout justify-center><img :src="item.img2" width="100"  height="30" /></v-flex>
                   <p id="paragraphContainer4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab, 
                    </p>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-flex>
          </v-flex>
      </v-flex>
      <v-layout row wrap style="padding-top:20px; background-color:#eceeed;">
      <v-flex xs12 md5 flex-column mt-5>     
            <p align="center" id="titleH2Footer">Si eres productor del campo,este el mejor sitio para
vender.</p>
 <p id="paragraphFooter">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab, 
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Totam mollitia vitae, ab
                  
                    </p>
<v-flex flex-column id="social" class="hidden-sm-and-down">
            <p style="font-size:25px; font-weight:500; color:#FF7F00">Siguenos en:</p>
            <div style="display:flex; margin-top:-1%;">
              <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                  <v-icon style="margin-left:-20px" dark large >fab fa-instagram</v-icon>
              </v-btn>
              <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                  <v-icon  style="margin-left:-20px" dark large >fab fa-facebook-f</v-icon>
              </v-btn>
              <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                  <v-icon style="margin-left:-20px" dark large >fab fa-linkedin-in</v-icon>
              </v-btn>
              <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                  <v-icon style="margin-left:-20px" dark large >fab fa-twitter</v-icon>
              </v-btn>
            </div>
          </v-flex>
      </v-flex>
      <v-flex id="footerCard" xs12 md7 style=" padding-left:4%; padding-right:1%; margin-top:-50px;" layout justify-center>
        <v-flex flex-column >
          <v-card width="80%" color="white" style="margin-top:50px; padding:8% 10% 8% 10%" elevation="0" class="hidden-sm-and-down" >
                          <v-form v-model="valid">
                            <v-text-field
                              v-model="firstname"
                              :rules="nameRules"
                              
                              label="Nombres*"
                              color="#FF7F00"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="lastname"
                              :rules="nameRules"
                              
                              label="Apellidos*"
                              required
                            ></v-text-field>
                     
                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Teléfono celular o fijo*"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Correo electrónico"
                              required
                            ></v-text-field>
                         
                    </v-form>
              </v-card>
          <v-card width="96%" color="white" style="margin-top:50px; padding:8% 10% 8% 10%" elevation="0" class="hidden-md-and-up">
                          <v-form v-model="valid">
                            <v-text-field
                              v-model="firstname"
                              :rules="nameRules"
                              label="Nombres*"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="lastname"
                              :rules="nameRules"
                              label="Apellidos*"
                              required
                            ></v-text-field>
                     
                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Teléfono celular o fijo*"
                              required
                            ></v-text-field>

                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Correo electrónico"
                              required
                            ></v-text-field>
                         
                    </v-form>
              </v-card>
          <v-flex class="hidden-sm-and-down">
            <v-btn elevation="0" x-large color="#FF7F00" dark  style="margin:20px 0px 0px 0px; text-transform:none; font-size:25px; font-weight:600; width:200px; height:60px">
              Enviar
            </v-btn>
          </v-flex>
          <v-flex layout justify-center class="hidden-md-and-up">
            <v-btn elevation="0" x-large color="#FF7F00" dark  style="margin:30px 0px 40px 0px; text-transform:none; font-size:25px; font-weight:600; width:200px; height:60px">
              Enviar
            </v-btn>
          </v-flex>
          <v-flex xs12 layout justify-center>
                <v-flex xs12 flex-column id="socialResponsive" class="hidden-md-and-up">
                  <p align="center" style="font-size:25px; font-weight:500; color:#FF7F00">Siguenos en:</p>
                  <v-flex xs12 style="display:flex; margin-top:-1%; margin-bottom:50px" layout justify-center>
                    <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                        <v-icon style="margin-left:-20px" dark large>fab fa-instagram</v-icon>
                    </v-btn>
                    <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                        <v-icon  style="margin-left:-20px" dark large >fab fa-facebook-f</v-icon>
                    </v-btn>
                    <v-btn fab  dark color="#FF7F00" style="margin-right:15px" elevation="0">
                        <v-icon style="margin-left:-20px" dark large >fab fa-linkedin-in</v-icon>
                    </v-btn>
                    <v-btn fab  dark color="#FF7F00" elevation="0">
                        <v-icon style="margin-left:-20px" dark large >fab fa-twitter</v-icon>
                    </v-btn>
                  </v-flex>
                </v-flex>
          </v-flex>
        </v-flex>
      </v-flex>
      </v-layout>
      <v-layout row wrap style="background-color:white">
      <v-flex xs12 md6 style="margin:2% 0% 2% 0% ">
        <div style="display:flex; margin-left:5%;" class="hidden-sm-and-down">
          <p class="footer">{{labels.información}}</p>
          <p class="footer">{{labels.privacy_policies}}</p>
          <p class="footer">Cookies</p>
          <p class="footer">Contáctenos</p>
        </div>
            <v-flex flex-column class="hidden-md-and-up" >
              <p align="center" class="footer">{{labels.información}}</p>
              <p align="center" class="footer">{{labels.privacy_policies}}</p>
              <p align="center" class="footer">Cookies</p>
              <p align="center" class="footer">Contáctenos</p>
            </v-flex>
      </v-flex>
      <v-flex xs12 md6 style="margin:2% 0% 2% 0% " >
        <div style="font-weight:500; padding-right:2%; padding-left:4%" class="hidden-sm-and-down">
        <!-- <p align="right" class="footer">Creado por nammu.io . Todos los derechos reservados © 2020</p> -->
        </div>
        <v-flex xs12  class="hidden-md-and-up">
        <!-- <p align="center" class="footer">Creado por nammu.io . Todos los derechos reservados © 2020</p> -->
        </v-flex>
      </v-flex>
    </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
import { labels, paragraphs } from "@/lang/lang.js";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import toolbar from "@/components/Toolbar.vue";
import toolbarResponsive from "@/components/ToolbarResponsive.vue";
import {mapState,mapMutations} from 'vuex';
import carousel from 'vue-owl-carousel';
import Products from '@/components/Products.vue';


export default {
  data: () => ({
    valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    labels: labels,
    paragraphs: paragraphs,
    settings: {
      suppressScrollY: true,
      maxScrollbarLength: 800
    },itemsCardCenter:[
      {
        img:"img/WEBP/icon_search@2x.webp",
        title:"Busca tus productos",
        text:"Integramos búsqueda tradicional o por lista."
      },
      {
        img:"img/WEBP/icon_market@2x.webp",
        title:"Agrega al carrito",
        text:"Observa la suma en dinero de tus productos."
      },
      {
        img:"img/WEBP/icon_money@2x.webp",
        title:"Selecciona como pagar",
        text:"Recibimos todas las tarjetas y efectivo."
      },
      {
        img:"img/WEBP/icon_house@2x.webp",
        title:"Esperalo en tu hogar",
        text:"Vamos hasta la puerta de tu casa."
      }
    ],
    itemSelect: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
    itemsSelect:[
          "Saludo"
    ],
    itemSpeakers: [
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_1@2x.webp",
        img2: "img/WEBP/asgardia@2x.webp"
      },
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_2@2x.webp",
        img2: "img/WEBP/liva@2x.webp"
      },
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_3@2x.webp",
        img2: "img/WEBP/earth-2.0@2x.webp"
      },
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_4@2x.webp",
        img2: "img/WEBP/utosia-2@2x.webp"
      }
    ],
    itemSpeakers1: [
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_1@2x.webp",
        img2: "img/WEBP/asgardia@2x.webp"
      },
    ],
    itemSpeakers2: [
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_2@2x.webp",
        img2: "img/WEBP/liva@2x.webp"
      }
    ],
    itemSpeakers3: [
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_3@2x.webp",
        img2: "img/WEBP/earth-2.0@2x.webp"
      }
    ],
    itemSpeakers4: [
      {
        title: "Name Farmer",
        img: "img/WEBP/photo_farmer_4@2x.webp",
        img2: "img/WEBP/utosia-2@2x.webp"
      }
    ],
  }),computed:{
    ...mapState(["day","hour","minutes","seconds"])
  },
  components: {
    Products,
    carousel,
    VuePerfectScrollbar,
     toolbar,
     toolbarResponsive
  },methods:{
    ...mapMutations(["getDate"])
  },beforeMount(){
    setInterval(() => {
      this.getDate();
    }, 1000);
  }
};
</script>
<style>
#imgCenter{
  margin:-20% 0px 0px 20px
}
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot {
    border-color: #FF7F00 !important;
    border-radius: inherit;
}
.v-application--is-ltr .v-list-item__avatar:first-child {
    margin-right: 0px !important;
}

#pHead{
            width: 800px;
            font-size:50px;
            color:#539284; 
            font-family: 'DM Sans', sans-serif !important;
            font-weight: 900
}
#titleContainer2{
  width: 67%;
  font-size: 30px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif !important;
  line-height: 120%;
  color: #539284;
}

#titleContainer2Responsive{
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif !important;
  line-height: 120%;
  color: #539284;
}
#titleContainer2Left{
  width: 65%;
  padding-right: 25px;
  font-size: 30px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif !important;
  line-height: 120%;
  color: #539284;
  text-align: justify;
}
#paragraphContainer2Left{
  padding-right: 25px;
  width: 65%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: justify;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphContainer2{
  padding-right: 25px;
  width: 67%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: justify;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphContainer2Responsive{
  padding-right: 25px;
  width: 100%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphContainer3{
  margin: 20px 0px 0px 15px;
  width: 100%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphContainer4{
  margin-top:10px;
  width: 100%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphCenter{
  width: 1200px;
  margin-top: 1%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphCenterResponsive{
  margin-top: 1%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#footerCard{
  background-image:url(../../../public/img/WEBP/vegetables@2x.webp);
  background-size:490px;
  background-repeat: no-repeat;
  background-position: right; 
  background-color:#eceeed;
  height: 865px;
}
.footer{
  margin-left:2%;
  font-size:25px; 
  font-weight:400;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#social{
  margin-left:190px; 
  margin-top:20px
}
#socialResponsive{
  margin-top:20px
}
#paragraphFooter{
  margin: 20px 0px 0px 190px;
  width: 75%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: justify;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
.scroll-area {
  width: 100%;
  padding-bottom: 5%;
  position: relative;
  
}
#container {
  padding-top: 200px;
  background-image: url(../../../public/img/WEBP/hero.webp);
  background-size: cover;
  position: relative;
  background-position: center;
}
#container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:1450px;
}

#promotionalVideo {
  font-size: 25px;
  font-weight: 300;
  color: white;
  position: absolute;
  bottom: 18px;
  right: 90px;
}

#pCard {
  width: 250px;
  margin-left: 55%;
  padding-right: 1%;
  margin-top: -15%;
  color: white;
  font-size: 30px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif !important;
  z-index: 1;
}
#pCardResponsive {
  width: 95%;
  margin-top: -15%;
  color: white;
  font-size: 30px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif !important;
  z-index: 1;
}
#btnWatch {
  font-size: 18px;
  margin-left: -180px;
  margin-bottom: 230px;
  border-radius: 5;
  text-transform: none !important;
  font-family: 'DM Sans', sans-serif !important;
  width: 190px;
  height: 60px;
}
#btnWatchResponsive {
  font-size: 18px;
  margin-bottom: 230px;
  border-radius: 5;
  text-transform: none !important;
  font-family: 'DM Sans', sans-serif !important;
  width: 190px;
  height: 60px;
}
#titleH2 {
  margin-top:-350px;
  width: 670px;
  font-weight: 600;
  font-size: 45px;
  color: #FF7F00;
  line-height: 90%;
  font-family: 'DM Sans', sans-serif !important;
}
#titleH2Products {
  width: 700px;
  font-weight: 600;
  font-size: 45px;
  color: #FF7F00;
  line-height: 90%;
  font-family: 'DM Sans', sans-serif !important;
}

#titleH2Carrousel {
  width: 500px;
  font-weight: 600;
  font-size: 45px;
  color: #FF7F00;
  line-height: 90%;
  font-family: 'DM Sans', sans-serif !important;
}
#titleH2Footer {
  text-align: start;
  padding-left: 190px;
  padding-right: 60px;
  padding-top: 40px;
  width: 110%;
  margin-top:-70px;
  font-weight: 600;
  font-size: 40px;
  color: #FF7F00;
  line-height: 115%;
  font-family: 'DM Sans', sans-serif !important;
}

#face {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
#academy {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 300;
}
#bec {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
.inscriptionTime {
  font-size: 55px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 900;
}
.textTimes {
  margin-top: -10%;
  font-size: 18px;
  font-family: "Roboto" !important;
  color: black;
  font-weight: 600;
  line-height: 120%;
}
#verticalLine {
  font-size: 170px;
  font-weight: 200;
  color: black;
  margin-top: -4.2%;
}
#conference {
  font-size: 65px;
  color: black;
  font-family: "Roboto" !important;
  font-weight: 300;
}
#secretProducts {
  font-size: 28px;
  font-family: "Roboto" !important;
  font-weight: 300;
  margin: auto;
  margin-top: -1.5%;
}
#secretProductsParagraph {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  width: 800px;
  margin: auto;
  margin-top: 1%;
  margin-bottom: 4%;
  line-height: 120%;
}
#paragraphFaceAcademy {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  padding-left: 12%;
  padding-right: 12%;
  width: 100%;
  line-height: 120%;
}
#paragraphBecConference {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
  text-align: justify;
  line-height: 120%;
}
#paragraphColage {
  margin-top: 2%;
  font-size: 25px;
  font-family: "Roboto" !important;
  color: black;
  font-weight: 500;
  width: 100%;
  text-align: justify;
  line-height: 120%;
}
.listFaceAcademy {
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 400;
  margin: auto;
  line-height: 120%;
}
#paragraphTime{
  font-size: 25px;
  font-family: "Roboto" !important;
  font-weight: 800;
  margin: auto;
  color: black;
  text-align: justify;
  line-height: 120%;
}
h2 {
  font-size: 55px;
  font-family: "Roboto", sans-serif !important;
  padding-top: 60px;
  margin: auto;
  width: 1000px;
  text-align: center;
  line-height: 120%;
}
@media(max-width: 1623px){
 #paragraphContainer2{
  padding-right: 25px;
  width: 67%;
  font-size: 18px;
  font-weight: 400;
  line-height: 170%;
  text-align: justify;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphContainer2Left{
  padding-right: 25px;
  width: 65%;
  font-size: 18px;
  font-weight: 400;
  line-height: 170%;
  text-align: justify;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#titleContainer2{
  width: 67%;
  font-size: 25px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif !important;
  line-height: 120%;
  color: #539284;
}
#titleContainer2Left{
  width: 65%;
  padding-right: 25px;
  font-size: 25px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif !important;
  line-height: 120%;
  color: #539284;
  text-align: initial;
}
}
@media(max-width: 1150px){
  #imgCenter{
  margin:-10% 0px 0px 20px
}
#paragraphContainer3{
  margin: 20px 0px 0px 15px;
  width: 80%;
  font-size: 18px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
#paragraphContainer4{
  width: 100%;
  margin-top:10px;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
}
@media (max-width: 1200px) {
  #container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:1700px;
  background-position: absolute;
}

}
@media (max-width: 1024px) {
 
  #container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:1800px;
  background-position: absolute;
}

#titleH2Footer {
  text-align: start;
  padding-left: 90px;
  padding-right: 60px;
  width: 100%;
  margin-top:-70px;
  font-weight: 600;
  font-size: 40px;
  color: #FF7F00;
  line-height: 115%;
  font-family: 'DM Sans', sans-serif !important;
}

#paragraphFooter{
  margin: 20px 0px 0px 90px;
  width: 75%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: justify;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}

#social{
  margin-left:15px; 
  margin-top:20px;
  padding-bottom: 40px;
}

#pHead{
  font-size: 35px;
  width: 700px;
  color:#539284; 
  font-family: 'DM Sans', sans-serif !important;
  font-weight: 900
}
}
@media (max-width: 1039px) {
  #imgCenter{
  margin:8% 0px 0px 20px
}
 #container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:1600px;
  background-position: absolute;
}
}

@media (max-width:960px) {
#container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:2100px;
  background-position: absolute;
}
}
@media (max-width: 745px) {
  #pHead{
  font-size: 30px;
  width: 700px;
  color:#539284; 
  font-family: 'DM Sans', sans-serif !important;
  font-weight: 900
}
  #titleH2 {
  margin-top:-350px;
  width: 670px;
  font-weight: 600;
  font-size: 30px;
  color: #FF7F00;
  line-height: 90%;
  font-family: 'DM Sans', sans-serif !important;
}
#titleH2Products {
  width: 500px;
  font-weight: 600;
  font-size: 30px;
  color: #FF7F00;
  line-height: 90%;
  font-family: 'DM Sans', sans-serif !important;
}

#titleH2Carrousel {
  margin-top:-50px;
  width: 500px;
  font-weight: 600;
  font-size: 30px;
  color: #FF7F00;
  line-height: 90%;
  font-family: 'DM Sans', sans-serif !important;
}

#titleH2Footer {
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top:-70px;
  font-weight: 600;
  font-size: 30px;
  color: #FF7F00;
  line-height: 115%;
  font-family: 'DM Sans', sans-serif !important;
}

#paragraphFooter{
  margin: 20px 0px 0px 43px;
  width: 75%;
  font-size: 25px;
  font-weight: 400;
  line-height: 170%;
  text-align: center;
  font-family: 'DM Sans', sans-serif !important;
  color: #8F8D9A;
}
/* #footerCard{
  background-image:url(../../../public/img/WEBP/vegetables@2x.webp);
  background-size:60%;
  background-repeat: no-repeat;
  background-position: right; 
  height: 905px;
} */
}
@media (max-width:695px) {
#container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:2300px;
  background-position: absolute;
}
}
@media (max-width:467px) {
#container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:2600px;
  background-position: absolute;
}
}
@media (max-width:386px) {
#container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:2800px;
  background-position: absolute;
}
}
@media (max-width:338px) {
#container2 {
  margin-top: -120px;
  padding-top: 480px;
  background-image: url(../../../public/img/WEBP/background@2x.webp);
  background-size: cover;
  width: 100%;
  height:3200px;
  background-position: absolute;
}
}
</style>
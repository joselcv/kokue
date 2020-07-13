<template>
    <v-layout>
        <v-card width="350px"  elevation="20"  style=" margin:20px 20px 20px 20px; border-radius:10px">
            <v-card-text>
                  <v-card-title>
                    <v-flex layout justify-center >
                   <h4 style="color:#FF7F00"> {{title}} </h4>
                   </v-flex>
                </v-card-title>
                <v-flex layout justify-center>
                    <v-card elevation="20">
                        <img   :src="imagen" alt="Esta imagen esta rota" style="width:200px; height:200px; border-radius:5px"/>
                    </v-card>
                </v-flex>
            </v-card-text>
            <v-card-text>
           
                    <v-flex layout justify-center >
                   <h3> Cantidad </h3>
                   </v-flex>
               
            </v-card-text>
            <v-card-actions>
                <v-flex layout justify-center  mb-5 row wrap>
                 <div style="display:flex; margin-bottom:30px">
                     <v-flex xs3>
                         <v-btn block dark color="#FF7F00" style="font-size:30px; font-weight:300" @click="coutnt > 0 ? coutnt-- : 0">-</v-btn>
                     </v-flex>
                     <v-flex xs6 style="margin:0px 30px 0px 30px">
                         <v-card width="85px" height="35px">
                             <v-flex layout justify-center style="padding-top:5px">
                                     {{coutnt}}
                                 </v-flex>
                         </v-card>
                     </v-flex>
                     <v-flex xs3>
                        <v-btn block dark color="#FF7F00" style="font-size:20px; font-weight:300" @click="coutnt++">+</v-btn>
                     </v-flex>
                     
                 </div>
                 <v-btn block dark color="#539284" style="margin-bottom:10px">Agregar al pedido</v-btn>
                 <v-btn block dark color="#FF7F00">Ver mas</v-btn>
                </v-flex>
            </v-card-actions>
        </v-card>

    </v-layout>
</template>
<script>
export default {
    data: ()=>({
        coutnt:0
    }),
    props:["imagen","title"],
    
}
</script>
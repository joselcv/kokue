<template>
    <v-layout>
        <v-card width="400px"  elevation="0" style="height:500px">
            <v-card-text>
                <v-flex >
                    <img   :src="imagen" alt="Esta imagen esta rota" style="width:100%;"/>
                </v-flex>
            </v-card-text>
            <v-card-text>
                <v-card-title>
                    <v-flex layout justify-center >
                   <h3> {{title}} </h3>
                   </v-flex>
                </v-card-title>
            </v-card-text>
            <!-- <v-card-actions>
                <v-btn>nuevo</v-btn>
            </v-card-actions> -->
        </v-card>

    </v-layout>
</template>
<script>
export default {
    data: ()=>({

    }),
    props:["imagen","title"]
}
</script>
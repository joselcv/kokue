<template>
    <div>
        <v-card width="100%" style="width:700px; background-color:transparent" elevation="0">
            <v-card-title>
                <img width="50%" height="450" :src="imagen" alt="Esta imagen esta rota" />
            </v-card-title>
            <v-card-text>
                <v-card-title>
                    <v-flex layout justify-center>
                      <h3> {{title}} </h3>
                    </v-flex>
                </v-card-title>
            </v-card-text>
            <!-- <v-card-actions>
                <v-btn>nuevo</v-btn>
            </v-card-actions> -->
        </v-card>
    </div>
</template>
<script>
export default {
    data: ()=>({

    }),
    props:["imagen","title"]
}
</script>
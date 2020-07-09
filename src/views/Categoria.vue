<template>
    <v-layout>
         <v-card>
         <VuePerfectScrollbar class="scroll-area" :settings="settings" style="margin:80px 10px 0px 0px;">
          <FiltradoCategoria />
        </VuePerfectScrollbar>
        </v-card>
    </v-layout>
</template>
<script>
export default {
    data:() =>({
        settings: {
                    suppressScrollY: false,
                    maxScrollbarLength: 800
            }
    }),
    components:{
        FiltradoCategoria,
      VuePerfectScrollbar
    }
}
</script>
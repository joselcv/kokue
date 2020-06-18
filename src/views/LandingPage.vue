<!-- Desarrollado por: José luis casanova -->
<template>
    <v-layout fluid>
      <bodyPage/>
    </v-layout>
</template>
<script>
import bodyPage from "@/components/landingPage/bodyPage.vue";
import {labels} from "@/lang/lang"
export default {
  components: {
    bodyPage,
  },
  data: () => ({
    labels:labels
  }) 
};
</script>

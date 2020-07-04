<template>
    <div >
        <toolbar class="hidden-sm-and-down" />
        <toolbarResponsive class="hidden-md-and-up" />
    </div>
</template>
<script>
import toolbar from '@/components/Toolbar';
import toolbarResponsive from '@/components/ToolbarResponsive';

export default {
    data:()=>({
        
    }),
    components:{
            toolbar,
            toolbarResponsive
        }
}
</script>
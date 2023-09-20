

<template>
    <div class="customize">
      <!--Component "Toolbox" for Customization containing drag&drop objects
         to insert text, links and -->
      <CustomizationComp/>
    </div>
  </template>
  
  <script>
  import CustomizationComp from '@/components/CustomizationComp.vue'
  
  export default {
    name: 'CustomizationView',
    components: {
      CustomizationComp
      
  }
  }
  </script>
  
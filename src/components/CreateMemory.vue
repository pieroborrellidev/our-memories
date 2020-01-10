<template>
  <div class="travel-info">
      <div class="container">
          <app-image-upload />
      </div>
  </div>
</template>

<script>
    import ImageUpload from './ImageUpload.vue'
    export default {
        components: {
            appImageUpload: ImageUpload
        }
    };
</script>

<style scoped>
    .travel-info {
        height: 200px;
    }
</style>
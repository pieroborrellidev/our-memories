<template>
  <div class="slider-area">
    <b-carousel
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="memory in memories"
        :key="memory._id"
        :caption="memory.title"
        :text="memory.title"
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                memories: []
            }
        },
        created() {
            this.$http.get('').then(response => { return response.json() }).then(memories => {
                this.memories = memories;
            });
        }
    };
</script>

<style scoped>
</style>
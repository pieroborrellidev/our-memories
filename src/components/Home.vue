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
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
    export default {
        created() {
            console.log(this.$http);
            this.$http.get('http://localhost:3000/memories').then(response => {
                console.log("inside");
                return response.json();
            }).then(memories => {
                console.log(memories);
            })
        }
    };
</script>

<style scoped>
</style>
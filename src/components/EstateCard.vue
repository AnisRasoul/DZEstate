<template>
  <div class="bg-white shadow rounded-lg mt-3" style="width: 20rem;">
    <img :src="cardImage" class="w-full h-auto rounded-t-lg" alt="Card Image">
    <div class="p-4">
      <h4 class="text-xl font-light">{{ cardDesc }}</h4>
      <p class="text-lg">{{ cardPrice }}</p>
    
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardImage: String,
    cardDesc: String,
    cardPrice: String,

  }
}
</script>

<style>
/* Additional styles if needed */
</style>

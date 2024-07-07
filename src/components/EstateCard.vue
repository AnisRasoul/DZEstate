<template>
  <div class="bg-white shadow rounded-lg mt-3" style="width: 20rem;">
    <img :src="cardImage" class="w-full h-auto rounded-t-lg" alt="Card Image">
    <div class="p-4">
      <h4 class="text-xl font-bold">{{ cardDesc }}</h4>
      <p class="text-lg">{{ cardPrice }}</p>
      <div class="my-3">
         <p>{{ cardOwner }}</p>
      <p>{{ cardLocation }}</p>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardImage: String,
    cardDesc: String,
    cardPrice: String,
    cardOwner: String,
    cardLocation: String

  }
}
</script>

<style>
/* Additional styles if needed */
</style>

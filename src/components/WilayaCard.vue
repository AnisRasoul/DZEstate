<template>
    <div class="relative rounded-[25px] p-4"> <!-- Parent with relative positioning -->
      <img :src="WilayaImg" alt="Wilaya Image" class="rounded-[10px] shadow-2xl shadow-black" /> <!-- Image to be overlaid -->
      <h1
        class="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-4xl uppercase tracking-[15px]"
      >
        {{ WilayaName }}
      </h1> <!-- Text overlaying the image, centered -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      WilayaImg: {
        type: String, // Explicitly define the type
        required: true, // Set as required, or provide a default value
      },
      WilayaName: {
        type: String, // Define the type
        required: true, // Set as required
      },
    },
  }
  </script>
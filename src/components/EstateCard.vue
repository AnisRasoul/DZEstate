<template>
     <div class="bg-white md:flex items-center space-x-6 justify-center px-5 py-5 w-fit rounded-[35px] mx-auto transition-transform duration-300 ease-in-out hover:scale-105">
            <img :src="EstateImg" class="md:h-70 w-60 h-40 rounded-[20px]" alt="">
            <div>
              <h1 class="md:text-2xl font-bold my-3">{{ EstateTitle }}</h1>
              <div class="flex items-center justify-around space-x-14">
                <p>{{ EstateType }}</p>
                <p>{{EstateSpace}} m</p>
              </div>
              <div class="flex items-center justify-around">
                <p>Posted by {{ SellerName }}</p>
                <button class="bg-[#7C7C7C] text-white rounded-[20px] text-sm md:px-5 md:py-2 px-2 py-1">{{ EstatePrice }} DZD</button>
              </div>
            </div>
          </div>
</template>

<script>
export default {
    props: {
        id: Number,
        EstateImg: String,
        EstateTitle: String,
        EstateType: String,
        EstateSpace: String,
        SellerName: String,
        EstatePrice: Number,
    }

}
</script>

<style>

</style>
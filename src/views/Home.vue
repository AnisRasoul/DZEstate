<template>
    <div class="max-h-full bg-gradient-to-b from-[#A1B2D0] to-[#D5D9E4]">
        <navbar/>
        <!-- Hero -->
        <div class="md:grid md:grid-cols-2 md:gap-40 items-center">
            <div>
                <div class="flex flex-col justify-center items-center text-center mx-14">
                    <h1 class="text-5xl font-bold text-white">Welcome to <span class="text-primary">DZEstate:</span> Your Gateway
                    to Exceptional <span class="text-primary">Properties</span></h1> 
                    <div class="flex space-x-10 my-10">
                        <button class="bg-primary md:py-3 md:px-6 py-2 px-3 rounded-[25px] text-white">Test our model</button>
                        <button class=" border border-primary md:py-3 md:px-10 py-2 px-5 rounded-[25px] hover:bg-primary text-white">Join us</button></div>
                    
                </div>
            </div>
            <img src="../assets/hero/algeria.png" class="hidden md:block">
        </div>
        <!-- Title -->
        <div class="flex md:flex-col items-center justify-center md:text-6xl text-2xl text-center font-bold text-white hover:text-primary cursor-pointer">
            <h1>We are available in many well-known wilayas</h1>
        </div>
       <!-- Wilayas -->
        <div class="md:flex md:justify-around my-10">
        <WilayaCard v-for="wilaya in this.WilayaCards" :key="wilaya.id" :WilayaImg="wilaya.WilayaImg" :WilayaName="wilaya.WilayaName" />
        </div>
         <!-- Title -->
          <div class="flex my-20 ">
          <h1 class="ml-[40%] text-5xl font-bold text-white ">Recently Added</h1>
          <router-link to="" class="ml-[25%] mt-8 text-primary font-bold text-2xl hover:underline cursor-pointer">See all</router-link>
        </div>
          <!-- Houses -->
        <div class="grid md:grid-cols-3 grid-cols-1 gap-3">
         <EstateCard  class="my-5"
         v-for="Estate in this.EstateCards"
      :key="Estate.id"
      :EstateImg="Estate.EstateImg"
      :EstateTitle="Estate.EstateTitle"
      :EstateType="Estate.EstateType"
      :EstatePrice="Estate.EstatePrice"
      :EstateSpace="Estate.EstateSpace"
      :SellerName="Estate.SellerName"
       />
        </div>
          <!-- Ad -->
        <div class="md:mx-40 mx-2 bg-gradient-to-b from-[#7799B8] to-[#CBD1E0] rounded-[30px] my-20 border-b ">
          <div class="px-20 py-10">
             <h1 class="text-white md:text-5xl text-3xl md:w-[30%] my-3 font-bold">Find your best Real Estate</h1>
          <p class="text-primary md:my-5 text-2xl font-semibold">We provide a complete service for the sale, purchase or rental of real estate</p>
          <button class="md:px-8 md:py-4 py-2 px-6 text-white bg-primary rounded-[30px] font-semibold my-5">Contact us</button>
          </div>
        </div>

        <Footing/>
 
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Footing from '@/components/Footing.vue'
import navbar from '@/components/navbar.vue';
import EstateCard from '@/components/EstateCard.vue'
import WilayaCard from '@/components/WilayaCard.vue'
import alger from '@/assets/hero/alger.png'
import batna from '@/assets/hero/batna.png'
import oran from '@/assets/hero/oran.png'
import store from '@/store';
export default {
components:{navbar,WilayaCard,EstateCard,Footing,alger,batna,oran},

computed: {
    ...mapState({
      WilayaCards: state => state.WilayaCards ,
      EstateCards: state => state.EstateCards,
    })
  }


}
</script>

<style>
body{
    background-color: #A1B2D0 ;
}
</style>
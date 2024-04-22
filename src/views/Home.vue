<template>
    <div class="max-h-full bg-[#A1B2D0]">
        <navbar/>

        <div class="grid grid-cols-2 gap-40 items-center">
            <div>
                <div class="flex flex-col justify-center items-center text-center mx-14">
                    <h1 class="text-5xl font-bold text-white">Welcome to <span class="text-primary">DZEstate:</span> Your Gateway
                    to Exceptional <span class="text-primary">Properties</span></h1> 
                    <div class="flex space-x-10 my-10">
                        <button class="bg-primary py-3 px-6 rounded-[25px] text-white">Test our model</button>
                        <button class=" border border-primary py-3 px-10 rounded-[25px] hover:bg-primary text-white">Join us</button></div>
                    
                </div>
            </div>
            <img src="../assets/hero/algeria.png">
        </div>

        <div class="flex flex-col items-center justify-center text-6xl font-bold text-white">
            <h1>We are available in many</h1>
            <h1>well-known wilayas</h1>
        </div>

        <div class="flex justify-around my-10">

        <WilayaCard
      v-for="wilaya in this.WilayaCards"
      :key="wilaya.id"
      :WilayaImg="wilaya.WilayaImg"
      :WilayaName="wilaya.WilayaName"
    />
        </div>
       
          <div class="flex my-20">
          <h1 class="ml-[40%] text-5xl font-bold text-white">Recently Added</h1>
          <router-link to="" class="ml-[25%] mt-8 text-primary font-bold text-2xl">See all</router-link>
        </div>
        
        

        <div class="grid grid-cols-3 gap-3">
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
          
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
import navbar from '@/components/navbar.vue';
import EstateCard from '@/components/EstateCard.vue'
import WilayaCard from '@/components/WilayaCard.vue'
import alger from '@/assets/hero/alger.png'
import batna from '@/assets/hero/batna.png'
import oran from '@/assets/hero/oran.png'
import store from '@/store';
export default {
components:{navbar,WilayaCard,EstateCard,alger,batna,oran},

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
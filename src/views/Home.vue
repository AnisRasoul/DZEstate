<template>
    <div class="max-h-full bg-[#A1B2D0]">
        <navbar/>
        <div class="grid grid-cols-2 gap-3 items-center">
            <div>
                <div class="flex flex-col justify-center items-center text-center">
                    <h1 class="text-5xl font-bold text-white">Welcome to <span class="text-[#033C71]">DZEstate:</span> Your Gateway
                    to Exceptional <span class="text-[#033C71]">Properties</span></h1> 
                    <div class="flex space-x-10 my-5">
                        <button>Test our model</button>
                        <button>Join us</button></div>
                    
                </div>
            </div>
            <img src="../assets/hero/algeria.png" alt="">
        </div>
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
export default {
components:{navbar}
}
</script>

<style>
body{
    background-color: #A1B2D0 ;
}
</style>
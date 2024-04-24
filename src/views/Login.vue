<template>
  <div class="min-h-screen grid grid-cols-2">
    <!-- Left Panel with Gradient Background -->
    <div class="Login p-20 text-white flex flex-col justify-center space-y-10">
      <h1 class="text-8xl font-bold -tracking-tighter">DZEstate</h1>
      <p class="text-3xl mt-3 tracking-[5px] uppercase">The most popular estate website of DZ</p>
      <Button class="mt-6 bg-white text-primary w-[20%] text-xl py-6 rounded-[30px] hover:bg-primary hover:text-white">
        Read More
      </Button>
    </div>

    <!-- Right Panel with Form -->
    <div class="bg-white p-12 flex flex-col justify-center">

      <h2 class="text-5xl font-bold mb-3 mx-auto text-primary uppercase">Login into your account</h2>
      <div class="space-y-12 w-[50%] mx-auto my-10">
        <div class="flex items-center space-x-3">
          <Mail/>
          <Input placeholder="Your email" type="email" class="text-xl"/>
        </div>
        <div class="flex items-center space-x-3">
          <Lock/>
          <Input placeholder="Password" type="password" class="text-xl" />
        </div>
        <div class="flex flex-col space-y-5">
        <Button class=" bg-primary text-white rounded-[30px] py-6 text-xl font-semibold">Login</Button>
        

        <h1 class="text-2xl font-semibold">Don't Have account?</h1>
        <router-link to="register" class="text-xl text-primary text-center hover:underline">
            Register here
        </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue';
import { Input } from "@/components/ui/input";
import { Mail } from 'lucide-vue-next';
import { Lock } from 'lucide-vue-next';
export default {
components:{Button,Input,Mail,Lock}
}
</script>

<style>
.Login{
    background-image: url('../assets/Login/BG.png');
    background-repeat: no-repeat ;
    background-size: cover;
    
}
</style>
<template>
  <div class="md:min-h-screen md:grid md:grid-cols-2">
    <!-- Left Panel with Gradient Background -->
    <div class="Login md:p-20 md:text-white md:flex md:flex-col md:justify-center md:space-y-10 hidden">
      <h1 class="text-8xl font-bold -tracking-tighter">DZEstate</h1>
      <p class="text-3xl mt-3 tracking-[5px] uppercase">The most popular estate website of DZ</p>
      <Button class="mt-6 bg-white text-primary w-[20%] text-xl py-6 rounded-[30px] hover:bg-primary hover:text-white">
        Read More
      </Button>
    </div>

    <!-- Right Panel with Form -->
    <div class="bg-white p-12 flex flex-col justify-center">

      <h2 class="text-5xl font-bold mb-3 mx-auto text-primary uppercase text-center">Login into your account</h2>
      <form class="space-y-12 md:w-[50%] w-full mx-auto my-10" @submit.prevent="Login">
        <div class="flex items-center space-x-3">
          <Mail/>
          <Input placeholder="Your email" type="email" class="text-xl" v-model="email"/>
        </div>
        <div class="flex items-center space-x-3">
          <Lock/>
          <Input placeholder="Password" type="password" class="text-xl" v-model="password" />
        </div>
        <div class="flex flex-col space-y-5">
        <Button class=" bg-primary text-white rounded-[30px] py-6 text-xl font-semibold" type="submit">Login</Button>
        

        <h1 class="text-2xl font-semibold">Don't Have account?</h1>
        <router-link to="register" class="text-xl text-primary text-center hover:underline">
            Register here
        </router-link>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/button/Button.vue';
import { Input } from "@/components/ui/input";
import axios from 'axios';
import { Mail } from 'lucide-vue-next';
import { Lock } from 'lucide-vue-next';
export default {
components:{Button,Input,Mail,Lock},
data() {
    return {
      email: '',
      password: ''
    };
  },
methods: {
 async Login(){
  try {
  const res = await axios.post('https://dzestate-back.azurewebsites.net/api/auth/login', {
    email: this.email,
    password: this.password,
   
  });
  console.log('Post test successful:', res.data);
  this.$router.push('/')
  } 
  catch (error) {
    alert(error);
  }
  }
}
}
</script>

<style>
.Login{
    background-image: url('../assets/Login/BG.png');
    background-repeat: no-repeat ;
    background-size: cover;
    
}
</style>
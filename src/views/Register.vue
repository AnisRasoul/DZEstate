<template>
  <div class="md:min-h-screen md:grid md:grid-cols-2">
    <div class="Login md:p-20 md:text-white md:flex md:flex-col md:justify-center md:space-y-10 hidden">
      <h1 class="text-8xl font-bold -tracking-tighter">DZEstate</h1>
      <p class="text-3xl mt-3 tracking-[5px] uppercase">The most popular estate website of DZ</p>
      <Button class="mt-6 bg-white text-primary w-[20%] text-xl py-6 rounded-[30px] hover:bg-primary hover:text-white">
        Read More
      </Button>
    </div>

    <div class="bg-white p-12 flex flex-col justify-center">
      <h2 class="text-5xl font-bold mb-3 mx-auto text-primary uppercase text-center">Create an account</h2>

      <form class="space-y-12 md:w-[50%] w-full mx-auto my-10" @submit.prevent="register">
        <div class="flex items-center space-x-3">
          <User />
          <Input placeholder="Username" type="text" class="text-xl" v-model="username" />
        </div>
        <div class="flex items-center space-x-3">
          <Mail />
          <Input placeholder="Your email" type="email" class="text-xl" v-model="email" />
        </div>
        <div class="flex items-center space-x-3">
          <Lock />
          <Input placeholder="Password" type="password" class="text-xl" v-model="password" />
        </div>
        <div class="flex flex-col space-y-5">
          <Button class="bg-primary text-white rounded-[30px] py-6 text-xl font-semibold" type="submit">Sign Up</Button>
          <h1 class="text-2xl font-semibold">Already have account?</h1>
          <router-link to="login" class="text-xl text-primary text-center hover:underline">
            Login here
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Button from '@/components/ui/button/Button.vue';
import { Input } from "@/components/ui/input";
import { Mail, Lock, User } from 'lucide-vue-next';

export default {
  components: { Button, Input, Mail, Lock, User },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
  try {
    const res = await axios.post('https://dzestate-back.azurewebsites.net/api/auth/register', {
      username: this.username,
      email: this.email,
      password: this.password
    });

    console.log('Post test successful:', res.data);
  } catch (error) {
    alert(error);
  }
}
  },
};
</script>

<style>
.Login {
  background-image: url('../assets/Login/BG.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<template>
  <div class="py-10 bg-primary text-white">
    <div class="md:flex md:space-x-56 md:mx-56 my-16 px-4 md:px-0 md:space-y-0 space-y-10">
      <div class="flex flex-col md:items-center space-y-6 text-lg md:my-5">
        <a href="#" class="hover:font-bold text-xl font-bold">Take a tour</a>
        <a href="#" class="hover:font-bold">Features</a>
        <a href="#" class="hover:font-bold">Partners</a>
        <a href="#" class="hover:font-bold">Pricing</a>
        <a href="#" class="hover:font-bold">Support</a>
      </div>
      <div class="flex flex-col md:items-center text-lg space-y-6 md:my-5">
        <a href="#" class="hover:font-bold text-xl font-bold">Our Company</a>
        <a href="#" class="hover:font-bold">About Us</a>
        <a href="#" class="hover:font-bold">Media</a>
        <a href="#" class="hover:font-bold">Blog</a>
        <a href="#" class="hover:font-bold">Contact Us</a>
      </div>
      <div class="flex flex-col md:items-center text-lg space-y-6 md:my-5">
        <a href="#" class="hover:font-bold text-xl font-bold">Product</a>
        <a href="#" class="hover:font-bold">Employee</a>
        <a href="#" class="hover:font-bold">Payroll</a>
        <a href="#" class="hover:font-bold">Recruiting</a>
        <a href="#" class="hover:font-bold">Shift Planner</a>
      </div>
      <div class="flex flex-col space-y-6 bg-[#ffffff29] p-10 mt-10 md:mt-0">
        <h1 class="text-xl font-bold">Subscribe</h1>
        <div class="flex">
          <input type="email" placeholder="Email address" class="py-4 px-3 w-full md:w-auto"> 
          <button class="bg-[#0081FE] px-3"><ChevronRight/></button>
        </div>  
        <p class="w-full md:w-60">Hello, we are DZEstate. Our goal is to make Algerian estates business easier and better.</p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-56 border-t border-white pt-5">
      <router-link to=""> 
        <div class="flex items-center justify-center py-5">
          <img src="../assets/hero/logo.svg" class="h-10 md:h-50">
          <h1 class="text-2xl md:text-5xl font-extrabold ml-2">DZEstate</h1> 
        </div>
      </router-link>
      <div class="flex  text-white justify-center items-center space-y-0 md:space-x-14 space-x-8 font-medium uppercase">
        <p>Terms</p>
        <p>Privacy</p>
        <p>Cookies</p>
      </div>
      <div class="flex justify-center items-center space-x-4 md:space-x-10 mt-4 md:mt-0">
        <Instagram class="md:border md:border-white md:rounded-full md:p-1"/>
        <Twitter class="md:border md:border-white md:rounded-full md:p-1"/>
        <Youtube class="md:border md:border-white md:rounded-full md:p-1"/>
        <Facebook class="md:border md:border-white md:rounded-full md:p-1"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Instagram, Youtube, Twitter, Facebook, ChevronRight } from 'lucide-vue-next';

export default {
  components: {
    Instagram,
    Youtube,
    Twitter,
    Facebook,
    ChevronRight
  }
}
</script>

<style scoped>

</style>

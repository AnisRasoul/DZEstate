<template>
  <div class="py-10 bg-primary text-white">
    
  <div class="flex space-x-56 mx-56 my-16">

    <div class="flex flex-col md:items-center space-y-6 md:text-lg md:my-5">
      <a href="#" class="hover:font-bold    text-xl font-bold  ">Take a tour</a>
      <a href="#" class="hover:font-bold     ">Features</a>
      <a href="#" class="hover:font-bold    ">Partners</a>
      <a href="#" class="hover:font-bold    ">Pricing</a>
      <a href="#" class="hover:font-bold    ">support</a>
    </div>
    <div class="flex flex-col md:items-center md:text-lg space-y-6 md:my-5">
      <a href="#" class="hover:font-bold   text-xl font-bold  ">Our Company</a>
      <a href="#" class="hover:font-bold    ">About Us</a>
      <a href="#" class="hover:font-bold    ">Media</a>
      <a href="#" class="hover:font-bold    ">Blog</a>
      <a href="#" class="hover:font-bold    ">Contact Us</a>
    </div>
    <div class="flex flex-col md:items-center md:text-lg space-y-6 md:my-5">
      <a href="#" class="hover:font-bold   text-xl font-bold  ">Product</a>
      <a href="#" class="hover:font-bold    ">Employee</a>
      <a href="#" class="hover:font-bold    ">Payroll</a>
      <a href="#" class="hover:font-bold    ">Recruiting</a>
      <a href="#" class="hover:font-bold    ">Shift planner</a>
    </div>
    <div class="flex flex-col space-y-6 bg-[#ffffff29] p-10">
      <h1>Subscribe</h1>
      <div class="flex">
       <input type="email" placeholder="Email address" class="py-4 px-3"> 
       <button class="bg-[#0081FE] px-3"><chevron-right/></button>
      </div>  
       <p class="w-60">Hello, we are DZEstate. Our goal is to make algerian estates business easier and better.</p>
      
    </div>
  </div>
  <div class="flex justify-between items-center mx-56 border-t border-white">

    <router-link to=""> 
    <div class="flex items-center justify-center py-5 space-y-24">
    <img src="../assets/hero/logo.svg" class="h-50">
   <h1 class="text-5xl font-extrabold">DZEstate</h1> 
   </div>
   </router-link>
   <div class="flex text-white justify-center items-center space-x-14 font-medium uppercase">
    <p>terms</p>
    <p>privacy</p>
    <p>cookies</p>
   </div>
   <div class="flex justify-center items-center space-x-10">
    <instagram class="border border-white rounded-full size-10 p-2"/>
  <twitter class="border border-white rounded-full size-10 p-2"/>
  <youtube class="border border-white rounded-full size-10 p-2"/>
    <facebook class="border border-white rounded-full size-10 p-2"/>
   </div>
  </div>

        </div>
</template>

<script>
import { Instagram, } from 'lucide-vue-next';
import { Youtube } from 'lucide-vue-next';
import { Twitter } from 'lucide-vue-next';
import { Facebook } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
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

<style>

</style>
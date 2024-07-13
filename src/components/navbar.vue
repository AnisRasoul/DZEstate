<template>
  <div class="flex justify-around items-center md:space-x-32">
     <div class="flex items-center">
      <router-link to="/">
        <img src="../assets/hero/logo.svg" class="h-24" alt="DZEstate Logo" />
      </router-link>
      <h1 class="text-4xl font-extrabold text-white">DZEstate</h1>
    </div>
    
    <div class="md:flex md:items-center md:space-x-20 hidden">
      <router-link to="/" class="uppercase text-white hover:text-primary font-sans font-bold">Home</router-link>
      <router-link to="/buy" class="uppercase text-white hover:text-primary font-sans font-bold">Buy</router-link>
      <router-link to="/sell" class="uppercase text-white hover:text-primary font-sans font-bold">Sell</router-link>
      <router-link to="/rent" class="uppercase text-white hover:text-primary font-sans font-bold">Rent</router-link>
    </div>
 <div class="md:flex md:items-center md:space-x-5 hidden">
      <button v-if="!isLoggedIn" class="bg-primary text-white px-10 py-2 rounded-[20px]">
        <router-link to="login" >Login</router-link>
        
      </button>
      <button v-else class="bg-primary text-white px-10 py-2 rounded" @click="logout">
        Logout
      </button>
      <router-link v-if="isLoggedIn" to="/dashboard" class="bg-primary text-white px-10 py-2 rounded">
        <User/>
      </router-link>

    </div>
  </div>
</template>

<script>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';

export default {
  components: {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    ChevronDown,
    User,
  },
  data() {
    return {
      isLoggedIn: localStorage.getItem('token') !== null, // Checks if token exists
    };
  },
  methods: {
    logout() {
      // Remove token to simulate logout
      localStorage.removeItem('token');
      this.isLoggedIn = false; // Update login status
    },
  },
};
</script>

<style>
/* Add necessary styling for your components */
</style>

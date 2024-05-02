<template>
  <div class="flex justify-around items-center bg-white space-x-20">
    <!-- Logo and Site Name -->
    <div class="flex items-center bg-white">
      <router-link to="/">
        <img src="../assets/hero/logo.svg" class="h-24" alt="DZEstate Logo" />
      </router-link>
      <h1 class="text-4xl font-extrabold">DZEstate</h1>
    </div>
    
    <!-- Navigation Links -->
    <div class="flex items-center space-x-40">
      <router-link to="/" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Home</router-link>
      <router-link to="/buy" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Buy</router-link>
      <router-link to="/sell" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Sell</router-link>
      <router-link to="/rent" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Rent</router-link>
    </div>

    <!-- User Options and Language Selector -->
    <div class="flex items-center space-x-5">
      <button v-if="!isLoggedIn" class="bg-primary text-white px-10 py-2 rounded">
        <router-link to="login" >Login</router-link>
        
      </button>
      <button v-else class="bg-primary text-white px-10 py-2 rounded" @click="logout">
        Logout
      </button>
      
      <!-- Dashboard Button only when logged in -->
      <router-link v-if="isLoggedIn" to="/dashboard" class="bg-primary text-white px-10 py-2 rounded">
        <User/>
      </router-link>

      <DropdownMenu>
        <DropdownMenuTrigger class="bg-primary text-white py-2 px-6 rounded flex items-center">
          Lang <ChevronDown class="size-4 ml-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>French</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Arabic</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>English</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
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

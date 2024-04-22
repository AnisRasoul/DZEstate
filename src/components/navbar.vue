<template>
  <div class="flex justify-around items-center bg-white space-x-20">
    <div class="flex items-center bg-white">
   <router-link to=""> <img src="../assets/hero/logo.svg" class="h-24"></router-link>
   <h1 class="text-4xl font-extrabold">DZEstate</h1>
    </div>
    
    <div class="flex items-center space-x-40">
        <a href="#" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold" >Home</a>
        <a href="#" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Buy</a>
        <a href="#" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Sell</a>
        <a href="#" class="uppercase text-[#235D76] hover:text-primary font-sans font-bold">Rent</a>
    </div>

    <div class="flex items-center space-x-5">
        <button class="bg-primary text-white px-10 py-2 rounded">login</button>
        <DropdownMenu>
    <DropdownMenuTrigger class="bg-primary text-white py-2 px-6 rounded flex items-center">Lang <ChevronDown class="size-4 ml-1"/></DropdownMenuTrigger>
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
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-vue-next';

export default {
components:{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  ChevronDown,
}
}
</script>

<style>

</style>
<template>
  <div class="flex justify-around items-center bg-white space-x-20">
    <div class="flex items-center bg-white">
   <router-link to=""> <img src="../assets/hero/logo.svg" class="h-24"></router-link>
   <h1 class="text-4xl font-extrabold">DZEstate</h1>
    </div>
    
    <div class="flex items-center space-x-40">
        <a href="#" class="uppercase text-[#235D76] hover:text-[#033C71] font-sans font-bold" >Home</a>
        <a href="#" class="uppercase text-[#235D76] hover:text-[#033C71] font-sans font-bold">Buy</a>
        <a href="#" class="uppercase text-[#235D76] hover:text-[#033C71] font-sans font-bold">Sell</a>
        <a href="#" class="uppercase text-[#235D76] hover:text-[#033C71] font-sans font-bold">Rent</a>
    </div>

    <div class="flex items-center space-x-5">
        <button class="bg-[#033C71] text-white px-10 py-2 rounded">login</button>
        <DropdownMenu>
    <DropdownMenuTrigger class="bg-[#033C71] text-white py-2 px-6 rounded">Lang</DropdownMenuTrigger>
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

export default {
components:{
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,}
}
</script>

<style>

</style>
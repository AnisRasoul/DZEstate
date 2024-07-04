<template>
  <div>
    <div class="hero">
      <navbar/>
      <div class="flex flex-col justify-center items-center space-y-10 h-screen">
        <h1 class="text-white text-8xl font-bold">Find your dream house</h1>
        <p class="text-white text-2xl">Discover the Advantages of Pocket-Friendly Homes with DZ Estate</p>
        <div class="relative w-3/4 max-w-lg">
          <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
            <span class="text-black font-semibold">For Sale</span>
          </div>
          <input type="text" class="block w-full pl-24 pr-20 py-4 rounded-full outline-none sm:text-sm" placeholder="Enter an address, city, neighborhood, or ZIP code">
          <div class="absolute inset-y-0 right-3 flex items-center">
            <button type="submit" class="p-2 text-primary">
              <Search class="size-6"/>
            </button>
          </div>
        </div>
        <button class="text-white text-2xl bg-primary px-12 py-3 rounded-[25px]">Join us</button>
      </div>
    </div>
      
    <!-- Title -->
    <div class="flex md:flex-col items-center justify-center md:text-9xl text-2xl text-center font-bold text-primary mx-80 my-28">
      <h1>We are available in </h1>
      <span class="text-primary">Popular wilayas</span>
    </div>
    
    <!-- Wilayas -->
    <div class="md:flex md:justify-around my-10">
      <WilayaCard v-for="wilaya in WilayaCards" :key="wilaya.id" :WilayaImg="wilaya.WilayaImg" :WilayaName="wilaya.WilayaName" />
    </div>
    
    <!-- Title -->
    <div class="flex items-center my-20 space-x-96 justify-around">
      <h1 class="text-5xl font-bold text-black">Recently Added</h1>
      <div class="flex items-center space-x-12 font-bold">
        <button class="bg-white text-primary border-2 border-primary px-5 py-2 rounded-[20px]" @click="showHouseCards">House</button>
        <button class="bg-white text-primary border-2 border-primary px-5 py-2 rounded-[20px]" @click="showVillaCards">Villa</button>
        <button class="bg-white text-primary border-2 border-primary px-5 py-2 rounded-[20px]" @click="showApartmentCards">Apartment</button>
        <div class="flex items-center space-x-4">
          <button class="bg-white text-primary border-2 border-primary p-2 rounded-full">
            <ChevronLeft class="size-6"/>
          </button>
          <button class="bg-white text-primary border-2 border-primary p-2 rounded-full">
            <ChevronRight class="size-6"/>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Houses -->
    <div class='flex flex-wrap space-x-48 justify-center items-center'>
      <EstateCard
        class="my-5"
        v-for="card in filteredCards"
        :key="card.id"
        :card-image="card.cardImage"
        :card-desc="card.cardDesc"
        :card-price="card.cardPrice"
        :author-image="card.authorImage"
      />
    </div>
    
    <!-- Ad -->
    <div class="md:mx-40 mx-2 bg-gradient-to-b from-[#7799B8] to-[#CBD1E0] rounded-[30px] my-20 border-b">
      <div class="px-20 py-10">
        <h1 class="text-white md:text-5xl text-3xl md:w-[30%] my-3 font-bold">Find your best Real Estate</h1>
        <p class="text-primary md:my-5 text-2xl font-semibold">We provide a complete service for the sale, purchase, or rental of real estate</p>
        <button class="md:px-8 md:py-4 py-2 px-6 text-white bg-primary rounded-[30px] font-semibold my-5">Contact us</button>
      </div>
    </div>

    <Footing/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Footing from '@/components/Footing.vue'
import navbar from '@/components/navbar.vue';
import EstateCard from '@/components/EstateCard.vue'
import WilayaCard from '@/components/WilayaCard.vue'
import { Search, ChevronLeft, ChevronRight } from 'lucide-vue-next';

export default {
  components: {
    navbar,
    WilayaCard,
    EstateCard,
    Footing,
    Search,
    ChevronLeft,
    ChevronRight
  },
  computed: {
    ...mapState({
      WilayaCards: state => state.WilayaCards,
    })
  },
  data() {
    return {
      cards: [
        { id: "1", cardImage: "https://i.imgur.com/m6zNa2M.png", cardDesc: "Roselands House", cardPrice: "$ 35.000.000", authorImage: "https://i.imgur.com/XyGcWhT.png" },
        { id: "2", cardImage: "https://i.imgur.com/0noTBCy.png", cardDesc: "Woodlandside", cardPrice: "$ 20.000.000", authorImage: "https://i.imgur.com/MuJdT0U.png" },
        { id: "3", cardImage: "https://i.imgur.com/xBA3Wnr.png", cardDesc: "The Old Lighthouse", cardPrice: "$ 44.000.000", authorImage: "https://i.imgur.com/Y8BlYcG.png" },
        { id: "4", cardImage: "https://i.pinimg.com/564x/4e/eb/f7/4eebf76e28e11ed1236436bde506a32b.jpg", cardDesc: "Los santos villa", cardPrice: "$ 60.000.000", authorImage: "https://i.imgur.com/Y8BlYcG.png" },
        { id: "5", cardImage: "https://i.pinimg.com/564x/37/a0/3f/37a03fa1fe6e4a034daf2d5994139a54.jpg", cardDesc: "New York villa", cardPrice: "$ 25.000.000", authorImage: "https://i.imgur.com/MuJdT0U.png" },
        { id: "6", cardImage: "https://i.pinimg.com/564x/7f/dd/c1/7fddc173fa462b5346f07c8a6155068e.jpg", cardDesc: "Chicago villa", cardPrice: "$ 25.000.000", authorImage: "https://i.imgur.com/XyGcWhT.png" },
        { id: "7", cardImage: "https://i.pinimg.com/564x/a9/8a/0a/a98a0ac85812d1f15585ad0d532dc177.jpg", cardDesc: "miami appartment", cardPrice: "$ 6.000.000", authorImage: "https://i.imgur.com/Y8BlYcG.png" },
        { id: "8", cardImage: "https://i.pinimg.com/564x/12/03/a5/1203a5b0a01f302d6b4a6f65216158a5.jpg", cardDesc: "vegas appartment", cardPrice: "$ 5.000.000", authorImage: "https://i.imgur.com/MuJdT0U.png" },
        { id: "9", cardImage: "https://i.pinimg.com/564x/60/22/d0/6022d07fc9bd655b14133901a6363cbd.jpg", cardDesc: "broklyn appartment", cardPrice: "$ 2.000.000", authorImage: "https://i.imgur.com/XyGcWhT.png" }
      ],
      filteredCards: []
    };
  },
  created() {
    // Show house cards by default
    this.filteredCards = this.cards.filter(card => ['1', '2', '3'].includes(card.id));
  },
  methods: {
    showHouseCards() {
      this.filteredCards = this.cards.filter(card => ['1', '2', '3'].includes(card.id));
    },
    showVillaCards() {
      this.filteredCards = this.cards.filter(card => ['4', '5', '6'].includes(card.id));
    },
    showApartmentCards() {
      this.filteredCards = this.cards.filter(card => ['7', '8', '9'].includes(card.id));
    }
  }
};
</script>


<style>
.hero {
  background-image: url('../assets/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

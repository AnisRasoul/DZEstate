<template>
  <div>
    <section class="hero">
      <navbar/>
      <div class="flex flex-col justify-center items-center space-y-10 h-screen">
        <h1 class="text-white md:text-8xl text-4xl font-bold">Find your dream house</h1>
        <p class="text-white md:text-2xl">Discover the Advantages of Pocket-Friendly Homes with DZ Estate</p>
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
    </section>
      
  <section class="my-32 h-screen">
     <div class="flex flex-col items-center justify-center md:text-9xl text-4xl text-center font-bold text-primary md:mx-80 md:my-28">
      <h1>We are available in </h1>
      <span class="text-primary">Popular wilayas</span>
    </div>

    <div class="md:flex md:justify-around my-10 md:ml-0 ml-3">
      <WilayaCard v-for="wilaya in WilayaCards" :key="wilaya.id" :WilayaImg="wilaya.WilayaImg" :WilayaName="wilaya.WilayaName" />
    </div>
  </section>
   

  <section class="h-screen md:mt-0 mt-[200%]">
    <div class="md:flex items-center my-20 md:space-x-96 justify-around md:space-y-0 space-y-6">
      <h1 class="text-5xl font-bold text-black">Recently Added</h1>
      <div class="md:flex items-center md:space-x-12 font-bold md:space-y-0 space-y-6 md:mx-0 mx-2">
        <div class="flex items-center md:space-x-12 space-x-5 mx-auto" >
        <button class="bg-white text-primary border-2 border-primary px-5 py-2 rounded-[20px] hover:bg-primary hover:text-white" @click="showHouseCards">House</button>
        <button class="bg-white text-primary border-2 border-primary px-5 py-2 rounded-[20px] hover:bg-primary hover:text-white" @click="showVillaCards">Villa</button>
        <button class="bg-white text-primary border-2 border-primary px-5 py-2 rounded-[20px] hover:bg-primary hover:text-white" @click="showApartmentCards">Apartment</button>
        </div>
      </div>
    </div>
     <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="10"
        :auto-height="true"
        :navigation="true"
        :pagination="true"
        :breakpoints="{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
        }"
        :loop="true"
      >
        <SwiperSlide v-for="card in filteredCards" :key="card.id" class="flex justify-center items-center mx-20">
          <EstateCard
            :card-image="card.cardImage"
            :card-desc="card.cardDesc"
            :card-price="card.cardPrice"
            :card-owner="card.cardOwner"
            :card-location="card.cardLocation"
          />
        </SwiperSlide>
      </Swiper>
  </section>
     <section class="mb-32">
      <div class="text-center">
         <h1 class="text-primary text-6xl font-bold">Frequently Asked Questions</h1>
      <p class="text-xl w-[80%] mx-auto font-medium my-10">Find answers to common questions about DZEstate’s services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
     
      </div>
        <Accordion type="single" class="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-3 md:max-w-[70%] md:text-base max-w-[90%] mx-auto text-black  text-xs">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value" class="bg-white text-black border border-[#033C71] md:py-10 py-4 px-10 rounded-[15px]">
          <AccordionTrigger class="md:text-2xl">{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
     </section>
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
import { Navigation, Pagination,  Autoplay, Scrollbar, A11y } from "swiper/modules";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    navbar,
    WilayaCard,
    EstateCard,
    Footing,
    Search,
    ChevronLeft,
    ChevronRight,
    Swiper,
    SwiperSlide,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  },
  setup() {
      return {
        modules: [Navigation, Pagination, Scrollbar, A11y , Autoplay],
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      };
    },
  computed: {
    ...mapState({
      WilayaCards: state => state.WilayaCards,
    })
  },
  data() {
    return {
      cards: [
        {
    id: "1",
    type: "house",
    cardImage: "https://i.imgur.com/m6zNa2M.png",
    cardDesc: "Maison des Roses",
    cardPrice: "35.000.000 DZD",
    cardOwner: "Anis Rasoul",
    cardLocation: "Alger"
  },
  {
    id: "2",
    type: "house",
    cardImage: "https://i.imgur.com/0noTBCy.png",
    cardDesc: "Maison de la Forêt",
    cardPrice: "20.000.000 DZD",
    cardOwner: "Mohamed Ben Ahmed",
    cardLocation: "Oran"
  },
  {
    id: "3",
    type: "house",
    cardImage: "https://i.imgur.com/xBA3Wnr.png",
    cardDesc: "Le Vieux Phare",
    cardPrice: "44.000.000 DZD",
    cardOwner: "Karim Boushra",
    cardLocation: "Bejaia"
  },
  {
    id: "4",
    type: "villa",
    cardImage: "https://i.pinimg.com/564x/4e/eb/f7/4eebf76e28e11ed1236436bde506a32b.jpg",
    cardDesc: "Villa de Tizi Ouzou",
    cardPrice: "60.000.000 DZD",
    cardOwner: "Said Lahmar",
    cardLocation: "Tizi Ouzou"
  },
  {
    id: "5",
    type: "villa",
    cardImage: "https://i.pinimg.com/564x/37/a0/3f/37a03fa1fe6e4a034daf2d5994139a54.jpg",
    cardDesc: "Villa de Constantine",
    cardPrice: "25.000.000 DZD",
    cardOwner: "Nadia Hamdi",
    cardLocation: "Constantine"
  },
  {
    id: "6",
    type: "villa",
    cardImage: "https://i.pinimg.com/564x/7f/dd/c1/7fddc173fa462b5346f07c8a6155068e.jpg",
    cardDesc: "Villa de Annaba",
    cardPrice: "25.000.000 DZD",
    cardOwner: "Amine Zerguine",
    cardLocation: "Annaba"
  },
  {
    id: "7",
    type: "apartment",
    cardImage: "https://i.pinimg.com/564x/a9/8a/0a/a98a0ac85812d1f15585ad0d532dc177.jpg",
    cardDesc: "Appartement de Blida",
    cardPrice: "6.000.000 DZD",
    cardOwner: "Farid Belhadi",
    cardLocation: "Blida"
  },
  {
    id: "8",
    type: "apartment",
    cardImage: "https://i.pinimg.com/564x/12/03/a5/1203a5b0a01f302d6b4a6f65216158a5.jpg",
    cardDesc: "Appartement de Setif",
    cardPrice: "5.000.000 DZD",
    cardOwner: "Zohra Mehdi",
    cardLocation: "Setif"
  },
  {
    id: "9",
    type: "apartment",
    cardImage: "https://i.pinimg.com/564x/60/22/d0/6022d07fc9bd655b14133901a6363cbd.jpg",
    cardDesc: "Appartement de Telemcen",
    cardPrice: "2.000.000 DZD",
    cardOwner: "Hakim Saidani",
    cardLocation: "Tlemcen"
  },
  {
    id: "10",
    type: "house",
    cardImage: "https://i.pinimg.com/236x/bf/e8/cb/bfe8cbf910ae9a09c3925911a8f934d0.jpg",
    cardDesc: "Maison du Soleil",
    cardPrice: "50.000.000 DZD",
    cardOwner: "Fatima Zohra",
    cardLocation: "Tipaza"
  },
  {
    id: "11",
    type: "house",
    cardImage: "https://i.pinimg.com/236x/43/f6/05/43f6052917158e4d13a1bb2e390fce08.jpg",
    cardDesc: "Maison de la Plage",
    cardPrice: "30.000.000 DZD",
    cardOwner: "Rachid Ali",
    cardLocation: "Mostaganem"
  },
  {
    id: "12",
    type: "villa",
    cardImage: "https://i.pinimg.com/236x/36/9e/ab/369eab7c1bae1285e66484281b203387.jpg",
    cardDesc: "Villa des Palmiers",
    cardPrice: "70.000.000 DZD",
    cardOwner: "Laila Amar",
    cardLocation: "Ghardaia"
  },
  {
    id: "13",
    type: "villa",
    cardImage: "https://i.pinimg.com/236x/db/55/e3/db55e3ee350b0e5ee42b87199bceaf09.jpg",
    cardDesc: "Villa des Jardins",
    cardPrice: "80.000.000 DZD",
    cardOwner: "Ahmed Youssef",
    cardLocation: "Boumerdes"
  },
  {
    id: "14",
    type: "apartment",
    cardImage: "https://i.pinimg.com/236x/b3/98/0c/b3980c8feb39dbe92a0c3498bda6c242.jpg",
    cardDesc: "Appartement du Centre",
    cardPrice: "4.500.000 DZD",
    cardOwner: "Samiya Bouzid",
    cardLocation: "Batna"
  },
  {
    id: "15",
    type: "apartment",
    cardImage: "https://i.pinimg.com/236x/fd/2c/48/fd2c48f1f1646cbe73e2232be2451cba.jpg",
    cardDesc: "Appartement de Luxe",
    cardPrice: "10.000.000 DZD",
    cardOwner: "Nour Elhouda",
    cardLocation: "Alger"
  }
      ],
      accordionItems: [
  { 
    value: 'item-1', 
    title: 'What types of properties do you offer?', 
    content: 'At DZEstate, we offer a wide range of properties including houses, villas, apartments, and commercial spaces. Each property is carefully curated to meet your specific needs and preferences.' 
  },
  { 
    value: 'item-2', 
    title: 'How do I schedule a property viewing?', 
    content: 'To schedule a property viewing, simply contact our team through our website or give us a call. We will be happy to arrange a convenient time for you to visit the property and explore its features.' 
  },
  { 
    value: 'item-3', 
    title: 'What financing options are available?', 
    content: 'We offer various financing options to help you secure your dream property. Whether youre looking for mortgage advice or guidance on financing solutions, our experts are here to assist you every step of the way.' 
  },
  { 
    value: 'item-4', 
    title: 'Can I list my property with DZEstate?', 
    content: 'Yes, we welcome property owners who wish to list their properties with us. Listing your property with DZEstate gives you access to our extensive network of potential buyers and renters, ensuring maximum exposure for your property.' 
  },
  { 
    value: 'item-5', 
    title: 'What additional services do you offer?', 
    content: 'In addition to buying, selling, and renting properties, we offer property management services, investment consultations, and legal advice related to real estate transactions.' 
  },
  { 
    value: 'item-6', 
    title: 'Do you provide assistance for international clients?', 
    content: 'Yes, we provide specialized assistance for international clients looking to invest in Algerian real estate. Our team can help navigate legal requirements, property regulations, and other considerations for international buyers.' 
  }
],

      filteredCards: []
    };
  },
  created() {
    this.showHouseCards();
  },
  methods: {
    showHouseCards() {
      this.filteredCards = this.cards.filter(card => card.type === 'house');
    },
    showVillaCards() {
      this.filteredCards = this.cards.filter(card => card.type === 'villa');
    },
    showApartmentCards() {
      this.filteredCards = this.cards.filter(card => card.type === 'apartment');
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

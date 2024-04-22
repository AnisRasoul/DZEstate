import { createStore } from 'vuex';
import alger from '@/assets/hero/alger.png'
import batna from '@/assets/hero/batna.png'
import oran from '@/assets/hero/oran.png'
const store = createStore({
  state: {
    WilayaCards: [
        {
          id: 1, // Unique identifier for this wilaya
          WilayaName: "Oran", // Another example wilaya
          WilayaImg: oran, // Replace with a valid URL
        },
    {
      id: 2, 
      WilayaName: "Alger",
      WilayaImg: alger,
    },
    {
      id: 3, // Unique identifier for this wilaya
      WilayaName: "Batna", // Another example wilaya
      WilayaImg: batna, // Replace with a valid URL
    },
    // Add more wilayas with unique ids
  ],
  EstateCards: [
    {
      id:1,
      EstateImg:'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
      EstatePrice: 30,
      EstateSpace:'200',
      EstateTitle: 'Villa alger',
      SellerName:'Amine',
      EstateType:'F3'
    },
    {
      id:2,
      EstateImg:'https://cdn.pixabay.com/photo/2017/06/16/15/58/luxury-home-2409518_960_720.jpg',
      EstatePrice: 40,
      EstateSpace:'200',
      EstateTitle: 'Villa batna',
      SellerName:'Moh',
      EstateType:'F5'
    },
    {
      id:3,
      EstateImg:'https://cdn.pixabay.com/photo/2017/07/08/02/16/house-2483336_960_720.jpg',
      EstatePrice: 50,
      EstateSpace:'200',
      SellerName:'Dhia',
      EstateTitle: 'Villa oran',
      EstateType:'F2'
    },
    {
      id:4,
      EstateImg:'https://cdn.pixabay.com/photo/2018/02/13/11/09/home-3150500_960_720.jpg',
      EstatePrice: 80,
      EstateSpace:'500',
      SellerName:'Moiz',
      EstateTitle: 'Villa Biskra',
      EstateType:'F8'
    },
    {
      id:5,
      EstateImg:'https://cdn.pixabay.com/photo/2017/07/17/00/54/house-2511060_960_720.jpg',
      EstatePrice: 80,
      EstateSpace:'500',
      SellerName:'Moiz',
      EstateTitle: 'Villa Biskra',
      EstateType:'F8'
    },
    {
      id:6,
      EstateImg:'https://cdn.pixabay.com/photo/2018/04/30/13/33/house-3362676_960_720.jpg',
      EstatePrice: 80,
      EstateSpace:'500',
      SellerName:'Moiz',
      EstateTitle: 'Villa Biskra',
      EstateType:'F8'
    },
  ]
  },
  mutations: {

  },
  actions: {
 
  },
});

export default store;

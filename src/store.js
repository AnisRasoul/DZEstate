import { createStore } from 'vuex';
import alger from '@/assets/hero/alger.png'
import batna from '@/assets/hero/batna.png'
import oran from '@/assets/hero/oran.png'
const store = createStore({
  state: {
    WilayaCards: [
        {
          id: 1, 
          WilayaName: "Oran", 
          WilayaImg: oran, 
        },
    {
      id: 2, 
      WilayaName: "Alger",
      WilayaImg: alger,
    },
    {
      id: 3, 
      WilayaName: "Batna", 
      WilayaImg: batna, 
    },
  ],
  },
  mutations: {

  },
  actions: {
 
  },
});

export default store;

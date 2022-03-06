Vue.createApp({
  data() {
    return {
      name: 'cmldk',
      age: 25,
      imgUrl: 'https://...',
    };
  },
  methods: {
    favoriteNumber() {
      return Math.random();
    },
  },
}).mount('#practise');

Vue.createApp({
  data() {
    return {
      data: '',
      confirmedData: '',
    };
  },
  methods: {
    showAlert() {
      alert('Alert!');
    },
    setData(event) {
      this.data = event.target.value;
    },
    setConfirmedData() {
      this.confirmedData = this.data;
    },
  },
}).mount('#practise');

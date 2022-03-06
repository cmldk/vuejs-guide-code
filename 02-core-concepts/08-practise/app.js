const app = Vue.createApp({
  data() {
    return {
      className: '',
      visible: true,
      background: '#8ddba4',
    };
  },
  computed: {
    classes() {
      return [this.className, { visible: this.visible, hidden: !this.visible }];
    },
  },
  methods: {
    setClass(event) {
      this.className = event.target.value;
    },
    toggleButton() {
      this.visible = !this.visible;
    },
    newBackground(event) {
      this.background = event.target.value;
    },
  },
});

app.mount('#assignment');

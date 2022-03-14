Vue.createApp({
  data() {
    return {
      toggle: true,
      enteredTask: '',
      tasks: [],
    };
  },
  computed: {
    buttonCaption() {
      return this.toggle ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTask);
    },
    toggleButton() {
      this.toggle = !this.toggle;
    },
  },
}).mount('#practise');

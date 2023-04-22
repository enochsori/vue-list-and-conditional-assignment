const app = Vue.createApp({
  data() {
    return {
      test: "hello",
      inputTask: "",
      buttonName: "Hide List",
      tasks: [],
      isVisible: true,
    };
  },
  methods: {
    handleAddTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
    handleToggleListVisibility() {
      if (this.tasks.length > 0) {
        if (this.isVisible) {
          this.buttonName = "Show List";
        } else {
          this.buttonName = "Hide List";
        }
        this.isVisible = !this.isVisible;
      }
    },
  },
});

app.mount("#assignment");

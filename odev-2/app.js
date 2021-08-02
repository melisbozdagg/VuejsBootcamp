const app = Vue.createApp({
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ShowAlert(){
      alert();
    },
    valueApdated(e){
      console.log(e.target.value);
      this.value= e.target.value;
    }
  },
});
app.mount("#exercise");

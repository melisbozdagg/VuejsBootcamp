<template>
    <label for="todoText"></label>
  <input v-model="todoText" @keydown.enter="addNewTodo" type="tex" id="todoText" placeholder="Bir şeyler yazınız...">

</template> 
<script>
export default {
  data(){
    return {
      todoText:null
    };
  },
  methods: {
    addNewTodo(){
      this.$emit("add-todo",this.todoText);
      this.todoText=null;
    }
  }
}
</script>
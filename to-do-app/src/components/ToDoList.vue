<template>
    <ul>
<!--  <li  v-for="todoItem in todoList" :key="todoItem.todoList" class="d-flex justify-content-between align-items-center">
      <span>{{todoItem.text}}</span>
      <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
    </li> -->

<ToDoListItem @delete-todo-item="$emit('delete-todo-item', $event)" v-for="todoItem in myData" :key="todoItem.id" :item="todoItem"/>
  </ul>
</template>
<script>
import ToDoListItem from "@/components/ToDoListItem"
export default {
  props: ["myData"],
    components:{
        ToDoListItem
    }
}
</script>
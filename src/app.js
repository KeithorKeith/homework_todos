import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "Buy shopping", isCompleted: false}, 
                {name: "Clean bathroom", isCompleted: false}, 
                {name: "Car's MOT", isCompleted: false}
            ],
            newTodo: ""
        },
        methods: {
            saveNewTodo: function(){
                this.todos.push({
                    name: this.newTodo,
                    isCompleted: false
                });
                this.newTodo = ""
            },
            completeTodo: function(index){
                this.todos[index].isCompleted = true;
            }
        }
    });
});
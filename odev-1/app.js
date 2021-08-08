const app = Vue.createApp({
    data(){
        return{
            name:"melis",
            age:23,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        };
    },
    methods: {
    
        random(){
            return Math.round(Math.random());
        }
    },
}).mount("#exercise")  
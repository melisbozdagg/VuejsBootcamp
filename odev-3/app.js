const app = Vue.createApp({
data(){
    return{
        value:0,
    };
},
computed:{
result(){
    return this.value==33 ? "TamamlandÄ±." : "TamamlanmadÄ±!!";
}
},
watch:{
    result() {
        setTimeout(() => {
        this.value = 0;
        }, 2000);
    },
}
}).mount("#exercise")
// const app = Vue.createApp({
//     data(){
//         return {
//         var1: 0,
//         var2: 0,
//         hasil: 0
//     }}
// })
// app.mount('#app')

// const app = Vue.createApp({
//     data(){
//         return{
//             var1:0,
//             var2:0,
//             hasil:0
//         }
//     }
// })
// app.mount('#app')


const {createApp} = Vue

createApp({
    data(){
        return{
            var1:0,
            var2:0,
            hasil:0
        }
    }
}).mount('#app')
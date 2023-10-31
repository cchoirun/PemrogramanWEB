const {createApp} = Vue 

createApp({
    data(){
        return{
            
            show:true,
            books: [
                {title: 'Pemrograman Web', author: 'Ridho Rahman', isFav:true},
                {title: 'Pemrograman Berbasis Objek', author: 'Agus Budiyanto', isFav:true},
                {title: 'Kecerdasan Buatan', author: 'M Husni', isFav:true}
            ]
        }
    },
    methods: {
        toggleFav(book){
            book.isFav = !book.isFav
        }
    }
}).mount('#app')

createApp({
    data(){
        return{
            var1:0,
            var2:0,
            hasil:0
        }
    }
}).mount('#calc')
const app = new Vue({
    el: '#root',
    data: {
        albums: []
    },
    created() {
        self = this;
        axios.get('http://localhost:8888/php-ajax-dischi/database.php')
        .then(function (response) {
            self.albums = [...response.data]
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
})
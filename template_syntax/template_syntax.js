// Filters
new Vue({
    // ...
    filters: {
        capitalize: function(value) {
            // 必ず第一引数としてfilterをかける対象データが渡される
            if(!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
});

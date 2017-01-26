var ex1 = new Vue({
    el: '#example1',
    data: {
        message: 'Hello'
    }
});

var vm = new Vue({
    el: '#example2',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function() {
            // thisはvmインスタンス
            return this.message.split('').reverse().join('')
        }
    }
});

var vm2 = new Vue({
    el: '#example3',
    data: {
        message: 'Hello'
    },
    methods: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        }
    }
});

var vm3 = new Vue({
    el: '#example4',
    computed: {
        now: function() {
            return Date.now()
        }
    }
});

var vm4 = new Vue({
    el: '#example5',
    methods: {
        now: function() {
            return Date.now()
        }
    }
});

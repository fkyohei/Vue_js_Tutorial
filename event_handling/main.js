var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            // thisはVueのインスタンス
            alert('Hello' + this.name + '!');
            // eventはNative DOMイベント
            if(event) {
                alert(event.target.tagName);
            }
        }
    }
});
// javascriptから実行することも可能
// example2.greet();

var example3 = new Vue({
    el: '#example-3',
    methods: {
        say: function(message) {
            alert(message);
        },
        warn: function(message, event) {
            // eventがNativeイベント
            if(event) event.preventDefault();
            alert(message);
        }
    }
});

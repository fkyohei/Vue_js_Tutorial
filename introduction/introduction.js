//// Declarative-Rendering
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date() 
     }
});
// memo: consoleでmessageを書き換えると反映される


//// Conditionals-and-Loops
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true     
    }
});
// memo: ここをfalseにすると非表示になる


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JavaScript.'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
});
// memo: consoleでtodosにtextの値を持ったオブジェクトを与えると反映される

//// Handling User Input
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
// memo: jQueryの.on('click', function(){})とやってることは同じ。DOMを触らずに更新できる

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});
// memo: 双方向バインディング

//// Composing with Components
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { text: 'Vegetables' },
            { text: 'Cheese' },
            { text: 'Whatever else humans are supprosed to eat' }
        ]
    }
});
// カスタムエレメントを作成・使用してコンポーネント化が可能。コンポーネントは後半で詳しく扱うらしい

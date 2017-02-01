var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [
            { message: 'Foo'},
            { message: 'Bar'}
        ]
    }
});

var example2 = new Vue({
    el: '#example-2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var repeat_object = new Vue({
    el: '#repeat-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});
var repeat_object2 = new Vue({
    el: '#repeat-object2',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});
var repeat_object3 = new Vue({
    el: '#repeat-object3',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

var range = new Vue({
    el: '#range'
});

Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">X</button>\
        </li>\
    ',
    props: ['title']
});
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Moe the lawn'
        ]
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        }
    }
});
// memo: $emitはイベントを追加する(発生させる)
// memo: propsは親コンポーネントからデータを受け取るためにエクスポートされた属性のリスト

// vueは配列の変更メソッドをラップするため、viewの更新もトリガーする。ラップされたメソッドは下記
// push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()

// 置換系は下記
// filter()
// concat()
// slice()

// javascriptの制限により、以下の変更は検知できない
// vm.items[indexOfItem] = newValue
// vm.items.length = newLength
// 下記の書き方をすると可能となる
// Vue.set(example1.items, indexOfItem, newValue)
// example1.items.splice(indexOfItem, 1 newValue)
// example1.items.splice(newLength)

new Vue({
    el: '#filter-ex1',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
});
new Vue({
    el: '#filter-ex2',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
});

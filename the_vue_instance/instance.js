// constructor
var vm = new Vue({
    // option
});

// extend
// memo: extendするときはインスタンスを作成する前に定義
var MyComponent = Vue.extend({
    // extention option
});
var myComponentInstance = new MyComponent();

// Properties and Methods
var data = { a: 1 };
var vm2 = new Vue({
    data: data
});

vm2.a == data.a;  // -> true

vm2.a = 2;
data.a;  // -> 2

data.a = 3;
vm2.a;  // -> 3
// memo: 双方向で値が反映される

var data2 = { a: 1 };
var vm3 = new Vue({
    el: '#example',
    data: data
});

vm.$data === data;  // -> true
vm.$el === document.getElementById('example');  // -> true
// memo: $をつけることで、データプロパティとインスタンスプロパティが区別できる

vm.$watch('a', function (newVal, oldVal) {
    // the callback will be called when 'vm.a' changes
});
// $watch is an instance method
// memo: $をつけてインスタンスメソッドを作成することができる
// memo: arrow functionは使用できない。vm.$watch('a', newVal => this.myMethod()); のようなもの

// instance Lifecycle Hooks
var vm4 = new Vue({
    data: {
        a: 1
    },
    created: function() {
        // memo: インスタンス作成時に実行される
        console.log('a is: ' + this.a);
        // memo: thisはインスタンスを指す
    }
});
// -> a is: 1
// mome: 他にも、mounted, updated, destroyedなどがある。どの場合はthisはインスタンスを指す

// Lifecycle diagram
// 参照: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram


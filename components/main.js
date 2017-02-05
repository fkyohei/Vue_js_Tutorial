Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})
new Vue({
    el: '#example'
})
// componentはグローバルで登録しなくても良い
var Child = {
    template: '<div>A custom Componet2!</div>'
}
new Vue({
    el: '#example2',
    components: {
        // my-component2は#example2の中でのみ使用可能
        'my-component2': Child
    }
})

// componentのdataは関数でなければいけない
// 例えば下の例はエラーとなる
//Vue.component('my-component', {
//    template: '<span>{{ message }}</span>',
//    data: {
//        message: 'hello'
//    }
//})

// 同じ内容のオブジェクトを返す関数としてあげれば上記と同じことを実現できる
var data = { counter: 0 }
Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data: function() {
        // この書き方だとオブジェクトは共通になり、すべてのボタンに同じ数字が反映される
        // return data
        // この書き方だとオブジェクトがボタン毎にことなるため、カウンターが独立する
        return {
            counter: 0
        }
    }
})
new Vue({
    el: '#example3'
})

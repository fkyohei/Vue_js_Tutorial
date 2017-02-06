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

// コンポーネントにはスコープがあり、親コンポーネントから子コンポーネントへ直接データを渡すことはできない
// propsを指定することで、子コンポーネントに値を渡すことができる。
// propsの値は受け取り側の変数
var example4 = new Vue({
    el: '#example4',
    components: {
        child: {
            props: ['message'],
            template: '<span>{{ message }}</span>'
        }
    }
});
// kebab-caseで書かれているものは、camelCaseで書く
var example5 = new Vue({
    el: '#example5',
    components: {
        child: {
            props: ['myMessage'],
            template: '<span>{{ myMessage }}</span>'
        }
    }
});

var example6 = new Vue({
    el: '#example6',
    data: {
        parentMsg: 'Message from parent'
    },
    components: {
        child: {
            props: ['myMessage'],
            template: '<span>{{ myMessage }}</span>'
        }
    }
});

// propsのバリデーション
Vue.component('example', {
    props: {
        // 型指定
        propA: Number,
        // 複数型指定
        propB: [String, Number],
        // 必須
        propC: {
            type: String,
            required: true
        },
        // デフォルト値
        propD: {
            type: Number,
            default: 100
        },
        // オブジェクトや配列の場合は関数を使用して返り値が必要
        propE: {
            type: Object,
            default: function() {
                return { message: 'hello' }
            }
        },
        // カスタムバリデーション
        propF: {
            validator: function(value) {
                return value > 10
            }
        }
    }
})
// 上記バリデーションで使用できる型は、String, Number, Boolean, Function, Object, Array


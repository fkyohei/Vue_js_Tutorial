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

Vue.component('button-counter', {
    // v-on:clickでincrementメソッドを実行するようボタンを生成させる
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function() {
            this.counter += 1
            // 親コンポーネント(button-counter)に対してincrementというイベントを発行する（v-on:incrementが呼ばれる）
            this.$emit('increment')
        }
    }
})
new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function() {
            this.total += 1
        }
    }
})

Vue.component('currency-input', {
    template: '\
        <span>\
            $\
            <input\
                ref="input"\
                v-bind:value="value"\
                v-on:input="updateValue($event.target.value)"\
            >\
        </span>\
    ',
    props: ['value'],
    methods: {
        updateValue: function(value) {
            var formattedValue = value
                .trim()
                .slice(0, value.indexOf('.') + 3)

            if(formattedValue !== value) {
                this.$refs.input.value = formattedValue
            }
            this.$emit('input', Number(formattedValue))
        }
    }
})
new Vue({
    el: '#form-example',
    data: {
        price: ''
    }
})

// 実例
Vue.component('currency-input2', {
    template: '\
        <div>\
            <label v-if="label">{{ label }}</label>\
            $\
            <input\
                ref="input"\
                v-bind:value="value"\
                v-on:input="updateValue($event.target.value)"\
                v-on:focus="selectAll"\
                v-on:blur="formatValue"\
            >\
        </div>\
    ',
    props: {
        value: {
            type: Number,
            default: 0
        },
        label: {
            type: String,
            default: ''
        }
    },
    mounted: function() {
        this.formatValue()
    },
    methods: {
        updateValue: function(value) {
            var result = currencyValidator.parse(value, this.value)
            if(result.warning) {
                this.$refs.input.value = result.value
            }
            this.$emit('input', result.value)
        },
        formatValue: function() {
            this.$refs.input.value = currencyValidator.format(this.value)
        },
        selectAll: function(event) {
            setTimeout(function() {
                event.target.select()
            }, 0)
        }
    }
})
new Vue({
    el: '#app',
    data: {
        price: 0,
        shipping: 0,
        handling: 0,
        discount: 0
    },
    computed: {
        total: function() {
            return ((
                this.price * 100 +
                this.shipping * 100 +
                this.handling * 100 -
                this.discount * 100
            ) / 100).toFixed(2)
        }
    }
})

// $emit, $onは親子でなくても良い
var bus = new Vue()
bus.$emit('id-selected', 1)
bus.$on('id-selected', function(id) {
    // hogehoge
})

Vue.component('child-component', {
    template: '<div v-show="someChildProperty">Child</div>',
    data: function() {
        return {
            someChildProperty: true
            // someChileProperty: false   // これで消える
        }
    }
})
new Vue({
    el: '#example7'
})

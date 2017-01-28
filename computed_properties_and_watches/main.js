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

var vm5 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    watch: {
        fistName: function(val) {
            this.fullName = val + ' ' + this.lastName
        },
        lastName: function(val) {
            this.fullName = this.firstName + ' ' + val
        }
    }
});
// vm5の書き方よりもvm6のcomputedの書き方の方が良い
var vm6 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
});
// getter, setterも作成できる
var vm7 = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length -1]
            }
        }
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        question: function(newQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.getAnswer()
        }
    },
    methods: {
        // _.debounce = 実行制限
        // 今回の場合はユーザーの入力が完全に終了するのを待つ(500ミリ秒)
        getAnswer: _.debounce(
            function() {
                if(this.question.indexOf('?') === -1) {
                    this.answer = 'Questions usually contain a question mark. ;-)'
                    return
                }
                this.answer = 'Thinking...'
                var vm = this
                axios.get('https://yesno.wtf/api')
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function(error) {
                        vm.answer = 'Error! Could no reach the API. ' + error
                    })
            },
            500
        )
    }
});

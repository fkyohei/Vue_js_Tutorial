var vm = new Vue({
    el: '#example1',
    data: {
        isActive: true,
        hasError: false
    }
});

var vm2 = new Vue({
    el: '#example2',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }
});

var vm3 = new Vue({
    el: '#example3',
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal',
            }
        }
    }
});

var vm4 = new Vue({
    el: '#example4',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
});

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});
var vm5 = new Vue({
    el: '#example5'
});

Vue.component('my-component2', {
    template: '<p class="foo bar">Hi2</p>'
});
var vm6 = new Vue({
    el: "#example6",
    data: {
        isActive: true
    }
});

var vm7 = new Vue({
    el: '#example7',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
});

var vm8 = new Vue({
    el: '#example8',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});


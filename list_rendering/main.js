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


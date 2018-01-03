const assert = require('assert');
const User = require('../src/user');

describe('create Record', () => {

    it('save a user', () => {
        // assert(1+1==2)
        // console.log(1+1==2);

        const joe = new User({ name: 'JOE' });
        joe.save()
            .then(()=>{
                assert(!joe.isNew);
            })
        // User({ name: 'MAD' }).save();

    });
})

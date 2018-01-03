
const User = require('../src/user');
const assert = require('assert');

describe('Retreiving users from the database', () => {
    var joe;
    beforeEach((done) => {

        joe = new User({ name: 'JOE' })
        joe.save()
            .then(() => {
                done();
            })
    })

    //done is used to give surity that test or beforeEach is done performing its work now beforeEach or another test can run

    it('Retreive all users with name Joe', (done) => {

        User.find({ name: 'JOE' }).then((users) => {

            // console.log(users[1]._id.toString());
            // console.log(joe._id.toString());

            assert(users[1]._id.toString() === joe._id.toString());
            done();
        })
    })
})
import chai from 'chai';
import chaiHttp from 'chai-http';

// Importing app
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

// Test the homepage.
describe('Get the homepage and display a message', ()=> {
    it('should give a status 200', (done) => {
        chai.request(app)
        .get('/')
        .set('Accept', 'application/json')
        .end((err, response) => {
            response.should.have.status(200);
            done();
        });
    });
    it('should give be an object', (done) => {
        chai.request(app)
        .get('/')
        .set('Accept', 'application/json')
        .end((err, response) => {
            response.should.be.an('object');
            done();
        });
    });
})

export default {chai, app }
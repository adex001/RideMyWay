import chai from 'chai';
import chaiHttp from 'chai-http';

// Importing app
import app from '../server/app';

chai.use(chaiHttp);
chai.should();

// Test the rides route

describe('get (/api/v1/rides)', () => {
    it('should return an object', (done) => {
        chai.request(app)
        .get('/api/v1/rides')
        .set('Accept', 'application/json')
        .end((err, response) => {
            response.should.be.an('object');
            done();
        });
    });
    it('should return status code 201', (done) => {
        chai.request(app)
        .get('/api/v1/rides')
        .set('Accept', 'application/json')
        .end((err, response) => {
            response.should.have.status(200);
            done();
        });        
    });
})

describe('get (/api/v1/rides/:rideId)', () => {
    let id = 1;
    it('should return status 200', (done) => {
        
        chai.request(app)
        .get(`/api/v1/rides/${id}`)
        .set('Accept', 'application/json')
        .end((err, response) => {
            response.should.have.status(200);
            done();
        });        
    });
    it('should return an object and a message', (done) => {
        chai.request(app)
        .get(`/api/v1/rides/${id}`)
        .set('Accept', 'application/json')
        .end((err, response) => {
            response.should.be.an('object');
            response.body.message.should.be.eql('Controller to fetch all single ride id');
            done();
        });        
    });
});

describe('POST (/api/v1/rides)', () => {
    const data = {};
    it('Controller to create a new ride', (done) => {

        chai.request(app)
        .post('/api/v1/rides')
        .set('Accept', 'application/json')
        .send(data)
        .end((err, response) => {
            response.body.message.should.be.eql('Controller to create a new ride');
            response.should.be.an('object');
            response.should.have.status(201);
            done();
        });

    });
});

describe('POST (/api/v1/rides/:rideId/request', () => {
    let rideId = 2; let data = {}
    it('should request to join a ride', (done) => {
        chai.request(app)
        .post(`/api/v1/rides/${rideId}/request`)
        .set('Accept', 'application/json')
        .send(data)
        .end((err, response) => {
            response.body.message.should.be.eql('Controller to make a request to join a ride');
            response.should.have.status(201);
            response.should.be.an('object');
            done();
        });
        
    });
});

import { Router} from 'express';

const ridesRoute = Router();

ridesRoute.get('/', (req, res) => {
    // Controller to fetch all the ride offers
    res.status(200).json({
        message: 'Controller to fetch all ride offers'
    });
});

ridesRoute.get('/:rideId', (req, res) => {
    // Controller to fetch all single ride id
    res.status(200).json({
        message: 'Controller to fetch all single ride id'
    });
});

ridesRoute.post('/', (req, res) => {
    // Controller to create a new ride
    res.status(201).json({
        message: 'Controller to create a new ride'
    });
});

ridesRoute.post('/:rideId/request', (req, res) => {
    // Controller to make a request to join a ride
    res.status(201).json({
        message: 'Controller to make a request to join a ride',
    });
});

export default ridesRoute;
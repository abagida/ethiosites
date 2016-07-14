var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');
var ctrlAuth = require('../controllers/authentication');
var ctrlTransmissions = require('../controllers/transmissions');
var ctrlCores = require('../controllers/cores');
var ctrlRans = require('../controllers/rans');
var ctrlIps = require('../controllers/ips');
var ctrlPowers = require('../controllers/powers');
var ctrlStaffs = require('../controllers/staffs');
var ctrlGenerals = require('../controllers/abebe');




router.get('/locations', ctrlLocations.locationsListByDistance);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);


// reviews
router.post('/locations/:locationid/reviews', auth, ctrlReviews.reviewsCreate);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);
router.put('/locations/:locationid/reviews/:reviewid', auth, ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews/:reviewid', auth, ctrlReviews.reviewsDeleteOne);

//generals
router.post('/locations/:locationid/generals', auth, ctrlGenerals.generalsCreate);
router.get('/locations/:locationid/generals/:generalid', ctrlGenerals.generalsReadOne);
router.put('/locations/:locationid/generals/:generalid', auth, ctrlGenerals.generalsUpdateOne);
router.delete('/locations/:locationid/generals/:generalid', auth, ctrlGenerals.generalsDeleteOne);


//transmissions
router.post('/locations/:locationid/transmissions', auth, ctrlTransmissions.transmissionsCreate);
router.get('/locations/:locationid/transmissions/:transmissionid', ctrlTransmissions.transmissionsReadOne);
router.put('/locations/:locationid/transmissions/:transmissionid', auth, ctrlTransmissions.transmissionsUpdateOne);
router.delete('/locations/:locationid/transmissions/:transmissionid', auth, ctrlTransmissions.transmissionsDeleteOne);


//cores
router.post('/locations/:locationid/cores', auth, ctrlCores.coresCreate);
router.get('/locations/:locationid/cores/:coreid', ctrlCores.coresReadOne);
router.put('/locations/:locationid/cores/:coreid', auth, ctrlCores.coresUpdateOne);
router.delete('/locations/:locationid/cores/:coreid', auth, ctrlCores.coresDeleteOne);

//rans
router.post('/locations/:locationid/rans', auth, ctrlRans.ransCreate);
router.get('/locations/:locationid/rans/:ranid', ctrlRans.ransReadOne);
router.put('/locations/:locationid/rans/:ranid', auth, ctrlRans.ransUpdateOne);
router.delete('/locations/:locationid/rans/:ranid', auth, ctrlRans.ransDeleteOne);

//ips
router.post('/locations/:locationid/ips', auth, ctrlIps.ipsCreate);
router.get('/locations/:locationid/ips/:ipid', ctrlIps.ipsReadOne);
router.put('/locations/:locationid/ips/:ipid', auth, ctrlIps.ipsUpdateOne);
router.delete('/locations/:locationid/ips/:ipid', auth, ctrlIps.ipsDeleteOne);

//powers
router.post('/locations/:locationid/powers', auth, ctrlPowers.powersCreate);
router.get('/locations/:locationid/powers/:powerid', ctrlPowers.powersReadOne);
router.put('/locations/:locationid/powers/:powerid', auth, ctrlPowers.powersUpdateOne);
router.delete('/locations/:locationid/powers/:powerid', auth, ctrlPowers.powersDeleteOne);

//staffs
router.post('/locations/:locationid/staffs', auth, ctrlStaffs.staffsCreate);
router.get('/locations/:locationid/staffs/:staffid', ctrlStaffs.staffsReadOne);
router.put('/locations/:locationid/staffs/:staffid', auth, ctrlStaffs.staffsUpdateOne);
router.delete('/locations/:locationid/staffs/:staffid', auth, ctrlStaffs.staffsDeleteOne);


// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;

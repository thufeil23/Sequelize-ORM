const verifySignUpController = require('../controllers').verifySignUp;
const verifySignController = require('../controllers').verifySign;
const verifyJwtTokenController = require('../controllers').verifyJwtToken;
const bookingsController = require('../controllers').bookings;

module.exports = function (app) {

	//User Auth
	app.post('/api/auth/signup',
		[
			verifySignUpController.checkDuplicateUserNameOrEmail,
			verifySignUpController.checkRolesExisted
		],
		(req, res) => {
			verifySignController.signup(req, res);
	});

	app.post('/api/auth/signin', (req, res) => {
		verifySignController.signin(req, res);
	});
	app.get('/api/bookings/:id', (req, res) => {
		bookingsController.listBookingId(req, res);
	});
	app.get('/api/bookings', (req, res) => {
		bookingsController.listBooking(req, res);
	});
	app.get('/api/bookingsuser', (req, res) => {
		bookingsController.listBookingUser(req, res);
	});
	app.post('/api/order', [
		verifyJwtTokenController.verifyToken
	], (req, res) => {
		bookingsController.createBooking(req, res);
	});
}
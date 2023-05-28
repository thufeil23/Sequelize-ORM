const verifySignUpController = require('../controllers').verifySignUp;
const verifySignController = require('../controllers').verifySign;
const statusController = require('../controllers').status;
const verifyJwtTokenController = require('../controllers').verifyJwtToken;

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

	//Status
	app.get('/api/status', (req, res) => {
		statusController.status(req, res);
	});
	app.get('/api/statususer', 
		[verifyJwtTokenController.verifyToken],
		(req, res) => {
			statusController.statususer(req, res);
	});
	app.get('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		], (req, res) => {
			statusController.status(req, res);
		});
	app.post('/api/status',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		], (req, res) => {
			statusController.status(req, res);
		});
	app.put('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		], (req, res) => {
			statusController.status(req, res);
		});
	app.delete('/api/status/:id',
		[verifyJwtTokenController.verifyToken,
			verifyJwtTokenController.isAdmin
		], (req, res) => {
			statusController.status(req, res);
		});
}
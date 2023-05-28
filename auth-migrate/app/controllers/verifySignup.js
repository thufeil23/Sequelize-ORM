const User = require('../models').User
const config = require('../config/configRoles.js');
const ROLEs = config.ROLEs;

module.exports = {
	checkDuplicateUserNameOrEmail(req, res, next) {
		User.findOne({
			where: {
				id: req.body.id
			}
		}).then(user => {
			if (user) {
				res.status(400).send({
					auth: false,
					id: req.body.id,
					message: "Error",
					errors: "Id is already taken!"
				});
				return;
			}

			User.findOne({
				where: {
					email: req.body.email
				}
			}).then(user => {
				if (user) {
					res.status(400).send({
						auth: false,
						id: req.body.id,
						message: "Error",
						errors: "Email is already taken!"
					});
					return;
				}
				next();
			});
		});
	},

	checkRolesExisted(req, res, next) {
		const roles = req.body.roles;
	  
		if (!roles || !Array.isArray(roles)) {
		  res.status(400).send({
			auth: false,
			id: req.body.id,
			message: "Error",
			errors: "Invalid or missing 'roles' field in the request body",
		  });
		  return;
		}
	  
		for (let i = 0; i < roles.length; i++) {
		  if (!ROLEs.includes(roles[i].toUpperCase())) {
			res.status(400).send({
			  auth: false,
			  id: req.body.id,
			  message: "Error",
			  errors: "Role does not exist: " + roles[i],
			});
			return;
		  }
		}
	  
		next();
	  }
	  
}
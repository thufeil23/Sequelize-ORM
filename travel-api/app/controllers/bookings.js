// const Schedules = require('../models').Schedules;
// const Vehicles = require('../models').Vehicles;
const Bookings = require('../models').Bookings;

module.exports = {
	listBookingId: async (req, res) => {
		try {
			const docs = await Bookings.findByPk(req.params.id, {
				limit: 10,
				include: [],
				order: [['createdAt', 'DESC']]
			});
			if (!docs || docs.length === 0) {
				return res.status(404).send({
					status_response: 'Not Found',
					errors: 'No bookings yet',
				});
			}
			const bookings = {
				status_response: 'OK',
				count: docs.length,
				bookings: docs.map(doc => doc),
				errors: null
			}
			res.status(200).send(bookings);
		} catch (error) {
			res.status(500).send({
				message: "Internal Server Error",
				errors: error
			});
		};
	},

    listBooking: async (req, res) => {
        try {
			const docs = await Bookings.findAll({
				limit: 10,
				include: [],
				order: [['createdAt', 'DESC']]
			});
			if (!docs || docs.length === 0) {
				return res.status(404).send({
					status_response: 'Not Found',
					errors: 'There is no bookings yet',
				});
			}
			const bookings ={
				status_response: 'OK',
				count: docs.length,
				bookings: docs.map(doc => doc),
				errors: null
			}
			res.status(200).send(bookings);
		  } catch (error) {
				res.status(500).send({
					message: "Internal Server Error",
					errors: error
				});
		  	}
	},

	listBookingUser: async (req,res) => {
		try {
		  const docs = await Bookings.findAll({
			limit: 10,
			include: [],
			where: {
			  userId: req.params.id,
			},
			order: [['createdAt', 'DESC']]
		  });
		  if (!docs || docs.length === 0) {
			return res.status(404).send({
				status_response: 'Not Found',
				errors: 'User has no bookings yet',
			});
		}
		  const bookings = {
			status_response: 'OK',
			count: docs.length,
			bookings: docs.map(doc => doc),
			errors: null
		  };
		  res.status(200).send(bookings);
		} catch (error) {
		  res.status(400).send({
			message: "Bad Request",
			errors: error
		  });
		}
	},

	createBooking: async (req, res) => {
		try {
		//   const Schedules = await Schedules.findByPk(req.body.scheId);
		//   const Vehicles = await Vehicles.findByPk(req.body.vehcId);
		//   const calculateTotalPrice = this.calculateTotalPrice(schedule, vehicle);

		//   if (!schedule || !vehicle) {
		// 	return res.status(404).send({
		// 	  status_response: 'Not Found',
		// 	  errors: 'Schedule or Vehicle Not Found',
		// 	});
		//   }
		  const booking = await Bookings.create({
			userId: req.userId,
			scheId: req.body.scheId,
			// totalPrice: calculateTotalPrice
		});
		  res.status(201).send({
			booking,
			errors: null,
			message: 'Booking created successfully'
		});
		} catch (error) {
			console.error('Error creating booking:', error);
		  res.status(500).send({
			message: "Internal Server Error",
			errors: error
		  });
		}
	},


	// calculateTotalPrice: async (schedule, vehicle) => {
	// 	try {
	// 		if (!schedule || !vehicle) {
	// 			console.log('Schedule or Vehicle Not Found');
	// 			return null;
	// 		}
	// 		const totalPrice = schedule.price + vehicle.price;
	// 		return totalPrice;
	// 	}	
	// 	catch (error) {
	// 		console.log(error);
	// 		return null;
	// 	}
	// }
}
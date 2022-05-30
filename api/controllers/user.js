import User from "../models/User.js";

export const deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json("User has been deleted.");
	} catch (error) {
		next(err);
	}
};

export const updatedUser = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		next(err);
	}
};

export const getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};

export const getAllUsers = async (req, res, next) => {
	const { min, max, ...others } = req.query;
	try {
		const users = await User.find({
			...others,
			cheapestPrice: { $gt: min | 1, $lt: max || 999 },
		}).limit(req.query.limit);
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};

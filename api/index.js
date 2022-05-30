import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import hotelsRouter from "./routes/hotels.js";
import usersRouter from "./routes/users.js";
import roomsRouter from "./routes/rooms.js";
const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.mondoDB);
		console.log("connected to mondoDB");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnect", () => {
	console.log("mongoDB disconect");
});

//middlewares
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something wrong!";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack,
	});
});

app.listen(7700, () => {
	connect();
	console.log("Connected to server on PORT = 7700!");
});

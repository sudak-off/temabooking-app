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
app.use("/api/auth", authRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/users", usersRouter);

app.listen(7700, () => {
	connect();
	console.log("Connected to server on PORT = 7700!");
});

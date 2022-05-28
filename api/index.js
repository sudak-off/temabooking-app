import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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

app.listen(7700, () => {
	connect();
	console.log("Connected to server on PORT = 7700!");
});

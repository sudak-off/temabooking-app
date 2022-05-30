import express from "express";
import {
	createHotel,
	deleteHotel,
	getAllHotels,
	getHotel,
	updatedHotel,
} from "../controllers/hotel.js";

const router = express.Router();

// create
router.post("/", createHotel);

// update
router.put("/:id", updatedHotel);

//delete
router.delete("/:id", deleteHotel);

// get
router.get("/:id", getHotel);

// get all
router.get("/", getAllHotels);

export default router;

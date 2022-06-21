import express from "express";
import {
	countByCity,
	countByType,
	createHotel,
	deleteHotel,
	getAllHotels,
	getHotel,
	updatedHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// create
router.post("/", verifyAdmin, createHotel);

// update
router.put("/:id", verifyAdmin, updatedHotel);

//delete
router.delete("/:id", verifyAdmin, deleteHotel);

// get
router.get("/find/:id", getHotel);

// get all
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

export default router;

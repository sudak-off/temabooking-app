import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.send("hi, auth");
});

router.get("/registration", (req, res) => {
	res.send("hi, registration");
});

export default router;

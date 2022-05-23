import express from "express";
import { addTransportations, getTransportations } from "../controllers/transportation.controller";

const router = express.Router();

router.get(`/transportations`, getTransportations);
router.post(`/transportations`, addTransportations);

export default router;

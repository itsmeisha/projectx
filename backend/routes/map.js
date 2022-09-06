import express from "express";

import { getAllMaps, deleteAllMaps } from "../controller/_map.js";
// declearing the map router

const mapRouter = express.Router();

mapRouter.route("/").get(getAllMaps);
mapRouter.route("/").delete(deleteAllMaps);

export default mapRouter;

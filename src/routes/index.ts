import * as express from "express";
import person from "./api/person/person.router";
const router = express.Router();

router.use("/person", person);
export default router;
import * as express from "express";
import { PersonHandler } from "./person.handler";
const router = express.Router();

router.route("/:id")
    .put(PersonHandler.edit)
    .delete(PersonHandler.remove);
router.route("/")
    .get(PersonHandler.list)
    .post(PersonHandler.add);

export default router;
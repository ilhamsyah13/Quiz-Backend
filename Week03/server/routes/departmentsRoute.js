import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.DepCtrl.findAll);
router.get("/:id", indexCtrl.DepCtrl.findOne);
router.post("/", indexCtrl.DepCtrl.create);
router.put("/:id", indexCtrl.DepCtrl.update);
router.delete("/:id", indexCtrl.DepCtrl.deleted);

export default router;

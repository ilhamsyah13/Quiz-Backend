import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.LocCtrl.findAll);
router.get("/:id", indexCtrl.LocCtrl.findOne);
router.post("/", indexCtrl.LocCtrl.create);
router.put("/:id", indexCtrl.LocCtrl.update);
router.delete("/:id", indexCtrl.LocCtrl.deleted);

export default router;

import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.JobHistCtrl.findAll);
router.get("/:id", indexCtrl.JobHistCtrl.findOne);
router.post("/", indexCtrl.JobHistCtrl.create);
router.put("/:id", indexCtrl.JobHistCtrl.update);
router.delete("/:id", indexCtrl.JobHistCtrl.deleted);

export default router;

import { Router } from "express";
import indexCtrl from "../controllers/indexCtrl";

const router = Router();

router.get("/", indexCtrl.JobCtrl.findAll);
router.get("/:id", indexCtrl.JobCtrl.findOne);
router.post("/", indexCtrl.JobCtrl.create);
router.put("/:id", indexCtrl.JobCtrl.update);
router.delete("/:id", indexCtrl.JobCtrl.deleted);

export default router;

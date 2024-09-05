import { Router } from "express";
import {
  createIssue,
  raiseIssue,
  updateIssueStatus,
} from "../controllers/issueController.js";

import { UserRoleEnum } from "../shared/status.enum.js";

const router = Router();

function checkRole(req, res, next) {
  const userRole = req.header("user-role");
  if (userRole !== role) {
    return res.status(403).json({ message: "Access is denied" });
  }
  next();
}

router.post("/create-issue", checkRole(UserRoleEnum.GENERAL), createIssue);

router.post("/raise-issue/:id", checkRole(UserRoleEnum.ADMIN), raiseIssue);

router.put(
  "/update-issue/:id",
  checkRole(UserRoleEnum.ADMIN),
  updateIssueStatus
);

export default router;

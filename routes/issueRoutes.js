import { Router } from "express";
import {
  createIssue,
  raiseIssue,
  updateIssueStatus,
} from "../controllers/issueController.js";

import { UserRoleEnum } from "../shared/status.enum.js";

const router = Router();

export function checkRole(requiredRole) {
  return (req, res, next) => {
    // Assuming user role is stored in req.user.role
    const userRole = req.user?.role;

    if (userRole !== requiredRole) {
      return res.status(403).json({ message: "Access is denied" });
    }

    next();
  };
}

router.post("/create-issue", checkRole(UserRoleEnum.GENERAL), createIssue);

router.post("/raise-issue/:id", checkRole(UserRoleEnum.ADMIN), raiseIssue);

router.put(
  "/update-issue/:id",
  checkRole(UserRoleEnum.ADMIN),
  updateIssueStatus
);

export default router;

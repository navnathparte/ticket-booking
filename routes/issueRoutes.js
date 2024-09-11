import { Router } from "express";
import {
  createIssue,
  raiseIssue,
  updateIssueStatus,
} from "../controllers/issueController.js";
import { UserRoleEnum } from "../shared/status.enum.js";
import {
  checkSubscription,
  submitContacts,
  subscribe,
} from "../controllers/portfolioController.js";

const router = Router();

export function checkRole(requiredRole) {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (userRole !== requiredRole) {
      return res.status(403).json({ message: "Access is denied" });
    }

    next();
  };
}

router.post("/create-issue", checkRole(UserRoleEnum.GENERAL), createIssue);
router.get("/raise-issue/:id", checkRole(UserRoleEnum.ADMIN), raiseIssue);
router.put(
  "/update-issue/:id",
  checkRole(UserRoleEnum.ADMIN),
  updateIssueStatus
);

router.post("/submit-contact", submitContacts);
router.post("/subscribe", subscribe);
router.post("/check-subscription", checkSubscription);

export default router;

import * as issueService from "../services/issueService.js";
import { IssueStatusEnum } from "../shared/status.enum.js";

export const createIssue = (req, res) => {
  try {
    const { description } = req.body;

    if (!description) {
      return res.status(400).json({ message: "Description is required" });
    }

    const newIssue = issueService.createIssue(description);
    res.status(201).json(newIssue);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: error.message,
    });
  }
};

export const raiseIssue = (req, res) => {
  try {
    const issueId = req.params.id;

    const issue = issueService.getIssueById(issueId);
    console.log("issue", issue);

    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    if (issue.status === IssueStatusEnum.CLOSED) {
      return res.status(400).json({ message: "This issue is already closed" });
    }

    if (issue.status !== IssueStatusEnum.NEW) {
      return res.status(400).json({ message: "Only new issues can be raised" });
    }

    const updatedIssue = issueService.updateIssueStatus(
      issueId,
      IssueStatusEnum.IN_PROGRESS
    );

    res.status(200).send({
      message: "Issue raaised successfully",
      data: updatedIssue,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateIssueStatus = (req, res) => {
  try {
    const issueId = req.params.id;

    const issue = issueService.getIssueById(issueId);
    if (!issue) {
      return res.status(404).json({ message: "Issue not found" });
    }

    const updatedIssue = issueService.updateIssueStatus(
      issueId,
      IssueStatusEnum.CLOSED
    );

    res.status(200).send({
      message: "Issue status updated",
      data: updatedIssue,
    });
  } catch (error) {
    console.log(error);
  }
};

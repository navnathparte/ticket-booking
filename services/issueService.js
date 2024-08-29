import fs from "fs";
import path from "path";
import { IssueStatusEnum } from "../shared/status.enum.js";

const issuesFilePath = path.resolve("issues.json");

if (!fs.existsSync(issuesFilePath)) {
  fs.writeFileSync(issuesFilePath, "[]", "utf8");
}

export const createIssue = (description) => {
  const newIssue = {
    description,
    id: Date.now().toString(),
    status: IssueStatusEnum.NEW,
    createdAt: new Date().toISOString(),
  };

  const issues = JSON.parse(fs.readFileSync(issuesFilePath, "utf8"));
  issues.push(newIssue);

  fs.writeFileSync(issuesFilePath, JSON.stringify(issues, null, 2), "utf8");

  return newIssue;
};

export const getIssueById = (issueId) => {
  const issues = JSON.parse(fs.readFileSync(issuesFilePath, "utf8"));
  return issues.find((issue) => issue.id === issueId);
};

export const updateIssueStatus = (issueId, newStatus) => {
  const issues = JSON.parse(fs.readFileSync(issuesFilePath, "utf8"));

  const issueIndex = issues.findIndex((issue) => issue.id === issueId);
  if (issueIndex === -1) return null;

  issues[issueIndex].status = newStatus;
  issues[issueIndex].updatedAt = new Date().toISOString();

  fs.writeFileSync(issuesFilePath, JSON.stringify(issues, null, 2), "utf8");

  return issues[issueIndex];
};

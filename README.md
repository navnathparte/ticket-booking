# Issue Tracking API

This project is an API for managing issues with different user roles (general user and admin). The API allows general users to create issues, and admins to raise those issues to an internal team or update the issue's status.

## Features

- **Create Issue**: Allows general users to create a new issue.
- **Raise Issue**: Allows admins to raise an issue to the internal team.
- **Update Issue Status**: Allows admins to update the status of an issue to `new_issue`, `raised_issue`, or `closed`.

## Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:

- npm install

4. Create a .env file in the root of the project and configure your environment variables
5. Start the server:

- npm start

API Endpoints
POST /api/issues - Create a new issue (General user)

Request Body: { "description": "Issue description" }
Response: 201 Created with the new issue data.
PUT /api/issues/
/raise - Raise an issue to the internal team (Admin only)

Response: 200 OK with the updated issue data.
PATCH /api/issues/
/status - Update the status of an issue (Admin only)

Request Body: { "status": "new_issue | raised_issue | closed" }
Response: 200 OK with the updated issue data.

Project Structure

├── controllers
│ └── issueController.js
├── services
│ └── issueService.js
├── routes
│ └── issueRoutes.js
├── issues.json
├── .env
├── .gitignore
├── package.json
└── README.md

Technologies Used
Node.js
Express.js
File System (fs) module
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

Contact
For any inquiries, please reach out to Navnath Parte.
